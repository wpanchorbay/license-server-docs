---
title: License Management
description: Understand how licenses are generated, created manually, updated, and deleted.
---

License Server supports both automatic generation and manual creation.

## Automatic generation

When a WooCommerce order reaches `completed`, the plugin checks the purchased items and generates licenses for items that have licensing enabled.

## Manual creation

Admins can create licenses directly from the License Server admin interface by selecting:

- a software slug
- an activation limit
- an optional expiration date

## Admin actions

Admins can:

- search licenses
- filter by order, slug, or status
- update activation limits
- change status
- edit expiration
- delete licenses

Deleting a license also removes its associated activation rows.
