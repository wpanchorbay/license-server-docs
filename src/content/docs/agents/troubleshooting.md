---
title: Agent Troubleshooting
description: Compact troubleshooting guide for AI agents diagnosing License Server setup and integration failures.
---

## License was not generated

Check:

- the WooCommerce order reached `completed`
- the product or variation has `_licenseserver_enabled = yes`
- the product or variation has `_licenseserver_slug`
- the matching software slug exists
- the custom database tables exist

## Activation fails

Check:

- request includes `license_key`, `slug`, and `domain`
- the key exists
- the license slug matches the request slug
- license status is `active`
- expiration is empty or in the future
- activation count is below the limit

## Check returns `license_not_activated`

The `/check` request included `domain`, but that exact domain does not exist in the activations table. Activate first, or send the same normalized domain value used during activation.

## Update works but download fails

Check:

- software row exists for the slug
- software row has `file_name`
- zip file exists in `releases/`
- license is active, unexpired, and bound to the same slug

## Admin nonce or permission errors

Check:

- request includes `X-WP-Nonce`
- nonce is generated with `wp_create_nonce('wp_rest')`
- current user has the capability required by the endpoint
