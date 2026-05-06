---
title: Data Model
description: Review the custom tables that store software releases, licenses, activations, and logs.
---

License Server stores its core data in custom tables.

## Tables

### `licenseserver_software`

Stores:

- software slug
- name
- version
- zip filename
- readme content

### `licenseserver_licenses`

Stores:

- public license key
- software slug
- order and product ownership
- activation limit
- expiration
- status

### `licenseserver_activations`

Stores:

- license relationship
- activated domain
- client IP
- activation timestamps

### `licenseserver_logs`

Stores:

- action type
- license key
- slug
- request metadata
- response code
- extra context
