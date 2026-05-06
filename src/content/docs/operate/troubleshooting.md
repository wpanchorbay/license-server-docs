---
title: Troubleshooting
description: Diagnose common issues with setup, generation, activation, update checks, and downloads.
---

## License key was not generated

Check that:

- the WooCommerce order reached `completed`
- the product or variation has licensing enabled
- the configured software slug exists
- the custom database tables were created

## Activation fails

Check that:

- the key exists
- the slug matches the software
- the license is active
- the license is not expired
- the activation limit has not been reached
- the `domain` parameter is present

## Update check works but download fails

Check that:

- the software record exists
- the `file_name` is set
- the zip exists in `releases/`
- the license key belongs to the requested slug

## Admin requests fail with nonce or permission errors

Check that:

- the request includes `X-WP-Nonce`
- the nonce was generated for `wp_rest`
- the current user has the required capability for that endpoint
