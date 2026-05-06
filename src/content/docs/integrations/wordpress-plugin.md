---
title: WordPress Plugin Example
description: Follow a practical WordPress integration flow for activation, validation, and update checks.
---

## Recommended activation domain

Use the host portion of `home_url()` so activation and checking compare the same normalized value:

```php
wp_parse_url(home_url(), PHP_URL_HOST)
```

## Activation flow

1. user enters a license key
2. your plugin sends `POST /activate`
3. on success, store the key, status, and expiration locally
4. clear plugin update transients

## Validation flow

1. read the stored license key
2. use a transient cache when available
3. request `GET /check`
4. persist status changes locally

## Update flow

Use `/update-check/{slug}/{license_key}` to retrieve:

- latest version
- `download_url`
- `package`
- readme sections for update UI

If your plugin supports premium updates, use the returned `package` URL as the protected download source.
