---
title: Software Releases
description: Manage software records, release zips, version metadata, and update-readme content.
---

Software records power the update and download system.

## Each release record includes

- `slug`
- `name`
- `version`
- `file_name`
- `readme`

The `file_name` must match a real zip file in the plugin `releases/` directory.

## Why the slug matters

The software slug connects three parts of the system:

- the software release record
- the WooCommerce product configuration
- the client plugin integration

If the slug does not match across those pieces, activation and update checks will fail.
