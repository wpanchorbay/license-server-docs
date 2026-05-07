---
title: WordPress Plugin Integration
description: Production-ready patterns for integrating your WordPress plugin with License Server.
---

Integrating your premium plugin with License Server involves three main components: a settings UI for the license key, a background validation process, and an update checker.

## Normalizing the Domain

To ensure consistent activation checks, always normalize the domain using the host portion of `home_url()`. This prevents issues with `http` vs `https` or trailing slashes.

```php
/**
 * Get normalized site domain for activation.
 */
function my_plugin_get_domain() {
    return wp_parse_url(home_url(), PHP_URL_HOST);
}
```

---

## Production Implementation Example

Below is a robust pattern for a `LicenseManager` class that handles activation and background validation via transients.

```php
class MyPluginLicenseManager {
    private $api_url = 'https://your-license-server.com/wp-json/license-server/v1';
    private $slug = 'my-cool-plugin';
    private $option_name = 'my_plugin_license_data';

    /**
     * Activate the license key.
     */
    public function activate($license_key) {
        $response = wp_remote_post($this->api_url . '/activate', [
            'body' => json_encode([
                'license_key' => $license_key,
                'slug'        => $this->slug,
                'domain'      => my_plugin_get_domain(),
            ]),
            'headers' => ['Content-Type' => 'application/json'],
        ]);

        if (is_wp_error($response)) {
            return $response;
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        if (!empty($data['success'])) {
            update_option($this->option_name, [
                'key'        => $license_key,
                'status'     => 'active',
                'expires_at' => $data['expires_at'] ?? '',
            ]);
            // Clear update cache to force immediate update check
            delete_site_transient('update_plugins');
            return true;
        }

        return new WP_Error('activation_failed', $data['message'] ?? 'Unknown error');
    }

    /**
     * Validate license status (with 12-hour transient cache).
     */
    public function is_valid() {
        $license_data = get_option($this->option_name);
        if (empty($license_data['key'])) return false;

        $cache_key = 'my_plugin_license_check';
        if (get_transient($cache_key)) return true;

        $response = wp_remote_get(add_query_arg([
            'license_key' => $license_data['key'],
            'slug'        => $this->slug,
            'domain'      => my_plugin_get_domain(),
        ], $this->api_url . '/check'));

        if (is_wp_error($response)) return true; // Fail gracefully on server error

        $data = json_decode(wp_remote_retrieve_body($response), true);
        
        if (!empty($data['success']) && $data['license'] === 'valid') {
            set_transient($cache_key, true, 12 * HOUR_IN_SECONDS);
            return true;
        }

        // License invalid: mark as inactive locally
        $license_data['status'] = 'inactive';
        update_option($this->option_name, $license_data);
        return false;
    }
}
```

---

## Enabling Automatic Updates

We highly recommend using the [Plugin Update Checker (PUC)](https://github.com/YahnisElsts/plugin-update-checker) library by Yahnis Elsts. It is the industry standard for non-repo plugin updates.
Install PUC throught [composer](https://getcomposer.org/):
```bash
composer require yahnis-elsts/plugin-update-checker
```

Learn more on [packagist](https://packagist.org/packages/yahnis-elsts/plugin-update-checker).

### Initialization with PUC

```php
require 'plugin-update-checker/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$license_data = get_option('my_plugin_license_data');
$license_key  = $license_data['key'] ?? '';

$myUpdateChecker = PucFactory::buildUpdateChecker(
    'https://your-license-server.com/wp-json/license-server/v1/update-check/my-cool-plugin/' . $license_key,
    __FILE__,
    'my-cool-plugin'
);

// Optional: Add host info to the request for better server logging
$myUpdateChecker->addQueryArgFilter(function($args) {
    $args['host'] = my_plugin_get_domain();
    return $args;
});
```

---

## Best Practices

1. **Graceful Failure**: If the license server is down, `is_valid()` should return `true` to avoid locking customers out of their own sites due to temporary network issues.
2. **Normalized Domains**: Always use `wp_parse_url` as shown above to ensure your client and server agree on what the "domain" is.
3. **Background Sync**: Use `wp_next_scheduled` (WP-Cron) to perform validation checks in the background rather than on every admin page load.
4. **Clear Transients**: When a user updates their license key, remember to delete the `update_plugins` site transient so WordPress sees the new update availability immediately.
