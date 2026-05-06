---
title: Install And Operate
description: Agent-focused checklist for installing, configuring, releasing, and verifying License Server.
---

Use this page when an AI agent or automation needs to set up or verify License Server on a WooCommerce store.

## Setup flow

1. Install and activate WooCommerce.
2. Install and activate License Server.
3. Confirm activation created the custom database tables.
4. Create a software record in the License Server admin area.
5. Upload or place the release zip in `releases/`.
6. Enable licensing on a WooCommerce product or variation.
7. Complete a test order for that product.
8. Confirm the generated license appears in admin and customer My Account.
9. Call the public check and update endpoints with the generated key.

## Software record requirements

Each software record should include:

- `slug`
- `name`
- `version`
- `file_name`
- `readme`

The `file_name` must match a zip file in the plugin `releases/` directory.

## Product meta contract

For a simple product or variation, License Server stores:

- `_licenseserver_enabled`
- `_licenseserver_slug`
- `_licenseserver_limit`
- `_licenseserver_duration`

License generation runs when WooCommerce fires `woocommerce_order_status_completed`.

## Verification checklist

- The order status is `completed`.
- The product or variation has licensing enabled.
- The configured software slug exists.
- A row exists in `licenseserver_licenses`.
- The customer can see the key under My Account.
- `/check` returns a valid response for the key and slug.
- `/update-check/{slug}/{license_key}` returns metadata when the software record exists.
- `/download/{slug}/{license_key}` streams the zip when the file exists.
