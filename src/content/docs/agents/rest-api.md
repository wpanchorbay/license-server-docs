---
title: Agent REST Reference
description: Compact route reference for AI agents working with License Server integrations.
---

Base URL:

```text
https://example.com/wp-json/license-server/v1
```

## Public routes

| Method | Route | Purpose |
|---|---|---|
| `POST` | `/activate` | Validate a key and create a domain activation. |
| `GET` | `/check` | Validate license status and optionally domain activation. |
| `GET` | `/update-check/{slug}/{license_key}` | Return update metadata and a protected package URL. |
| `GET` | `/download/{slug}/{license_key}` | Validate the key and stream the release zip. |

## Admin routes

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/dashboard/stats` | Return dashboard counts and recent logs. |
| `GET` | `/admin/software` | List software records. |
| `POST` | `/admin/software` | Create software record and optionally upload zip. |
| `POST` | `/admin/software/{id}` | Update software metadata and optionally replace zip. |
| `DELETE` | `/admin/software/{id}` | Delete software record. |
| `GET` | `/licenses` | List and filter licenses. |
| `POST` | `/licenses` | Manually create a license. |
| `POST` | `/licenses/{id}` | Update license status, expiration, or activation limit. |
| `DELETE` | `/licenses/{id}` | Delete license and associated activations. |
| `GET` | `/activations` | List activations. |
| `DELETE` | `/activations/{id}` | Delete one activation. |
| `GET` | `/logs` | List filtered logs. |
| `GET` | `/logs/{id}` | Fetch one log. |
| `DELETE` | `/logs/{id}` | Delete one log. |
| `DELETE` | `/logs/bulk-delete` | Delete selected logs. |

## Public rate limits

- Activation: 10 requests per 60 seconds.
- License check: 60 requests per 60 seconds.
- Update check: 60 requests per 60 seconds.
- Download: 60 requests per 60 seconds.
