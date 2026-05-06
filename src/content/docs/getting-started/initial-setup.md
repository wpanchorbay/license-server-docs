---
title: Initial Setup
description: Create your first software release, connect it to WooCommerce, and verify the license flow.
---

## Create a software record

In the License Server admin area, add a software record with:

- a unique `slug`
- a product `name`
- a `version`
- a `file_name` matching the release zip in `releases/`
- a plugin-style `readme`

You can upload the zip or place it in the plugin `releases/` directory.

## Link WooCommerce products

Edit a WooCommerce product or variation and enable License Server for that item. Save:

- the software slug
- the activation/site limit
- the validity duration

## Verify the end-to-end flow

1. Complete a test order for the licensed product.
2. Confirm a license row was created.
3. Confirm the customer can see the license in My Account.
4. Test the public API with the generated key and the correct slug.

For endpoint details, continue to [Public Endpoints](../api/public-endpoints/).
