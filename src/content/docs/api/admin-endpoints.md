---
title: Admin Endpoints
description: Reference the admin routes for software, licenses, activations, dashboard stats, and logs.
---

Admin endpoints require a logged-in WordPress user with the appropriate capability. Some also require a REST nonce.

## Dashboard

- `GET /dashboard/stats`

Returns summary counts and recent log activity.

## Software

- `GET /admin/software`
- `POST /admin/software`
- `POST /admin/software/{id}`
- `DELETE /admin/software/{id}`

Software records can include:

- slug
- name
- version
- file name
- readme
- uploaded zip file

## Licenses

- `GET /licenses`
- `POST /licenses`
- `POST /licenses/{id}`
- `DELETE /licenses/{id}`

Use these routes to list, create, update, and delete license records.

## Activations

- `GET /activations`
- `DELETE /activations/{id}`

Use these routes to inspect and revoke activations.

## Logs

- `GET /logs`
- `GET /logs/{id}`
- `DELETE /logs/{id}`
- `DELETE /logs/bulk-delete`

Use these routes to inspect filtered request logs and clear individual or bulk log records.
