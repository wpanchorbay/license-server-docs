---
title: Public Endpoints
description: Reference the public license activation, validation, update-check, and download routes.
---

Base namespace:

```text
/wp-json/license-server/v1
```

## `POST /activate`

Activates a license for a domain or environment.

Required fields:

- `license_key`
- `slug`
- `domain`

Success response includes:

- `success`
- `message`
- `license`
- `expires_at`

## `GET /check`

Validates license status.

Required fields:

- `license_key`
- `slug`

Optional field:

- `domain`

When `domain` is present, the API also checks whether the license is activated for that specific site.

## `GET /update-check/{slug}/{license_key}`

Returns update metadata suitable for WordPress plugin update flows and custom clients.

Optional query parameter:

- `host`

## `GET /download/{slug}/{license_key}`

Streams the release zip after validating the license.

Optional query parameter:

- `host`

## Rate limits

Current public limits:

- activation: 10 requests per 60 seconds
- license check: 60 requests per 60 seconds
- update check: 60 requests per 60 seconds
- download: 60 requests per 60 seconds
