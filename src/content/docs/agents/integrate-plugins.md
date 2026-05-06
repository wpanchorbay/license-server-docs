---
title: Integrate Plugins
description: Agent-focused integration model for client plugins that consume License Server.
---

Use this page when an AI agent needs to connect another plugin, theme, or app to License Server.

## Client integration model

A client plugin should contain:

- a config source for server URL, software slug, option keys, transient keys, and timeout
- a license client or service class
- local admin-only REST endpoints for the client plugin UI
- local storage for license key, status, and expiration
- a transient cache for validation status
- an update integration that calls `/update-check/{slug}/{license_key}`

Avoid calling License Server directly from browser UI. Browser/admin UI should call the client plugin's local REST endpoint; the local PHP endpoint should call License Server.

## Parameter rules

- `/activate` requires `license_key`, `slug`, and `domain`.
- `/check` requires `license_key` and `slug`.
- `/check` can also verify a stored activation row when `domain` is sent.
- `/check` does not use a parameter named `url`.
- `/update-check/{slug}/{license_key}` accepts optional `host` for logging.
- `/download/{slug}/{license_key}` accepts optional `host` for logging.

## Recommended domain value

```php
wp_parse_url(home_url(), PHP_URL_HOST)
```

Use the same exact value for activation and check requests when activation-row validation matters.

## Local removal

License Server does not currently expose a public deactivation endpoint. A client plugin can remove the key locally, but this does not free the activation slot on the server. The store admin can delete the activation in License Server admin.
