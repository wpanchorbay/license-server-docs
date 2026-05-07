---
title: Public Endpoints
description: Technical reference for public license activation, validation, and update APIs.
---

The License Server exposes a public REST API for client plugins and themes to manage activations and check for updates.

**Base Namespace:**
```text
/wp-json/license-server/v1
```

---

## 1. License Activation (`POST /activate`)

Registers a specific domain or environment against a license key.

### Request Body (JSON)
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `license_key` | string | Yes | The license key provided to the customer. |
| `slug` | string | Yes | The software slug (e.g., `my-cool-plugin`). |
| `domain` | string | Yes | The normalized host name of the client site. |

### Example Request
```json
{
  "license_key": "WPAB-6638C488-ABCD",
  "slug": "my-cool-plugin",
  "domain": "example.com"
}
```

### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "License activated successfully.",
  "license": "valid",
  "expires_at": "2025-12-31 23:59:59"
}
```

### Error Responses
- **400 Bad Request**: Missing required parameters or slug mismatch.
- **403 Forbidden**: Activation limit reached or license inactive/expired.
- **404 Not Found**: Invalid license key.

---

## 2. License Status Check (`GET /check`)

Verifies the current status of a license.

### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `license_key` | string | Yes | The license key to check. |
| `slug` | string | Yes | The software slug. |
| `domain` | string | No | If provided, also verifies if the license is active for this domain. |

### Success Response (`200 OK`)
```json
{
  "success": true,
  "license": "valid",
  "expires_at": "2025-12-31 23:59:59",
  "activation_limit": 3
}
```

---

## 3. Update Check (`GET /update-check/{slug}/{license_key}`)

Returns metadata in a format compatible with the [WordPress.org Plugin API](https://developer.wordpress.org/plugins/metadata/) and the [Plugin Update Checker (PUC)](https://github.com/YahnisElsts/plugin-update-checker) library.

### Parameters
- `{slug}`: The software slug.
- `{license_key}`: The customer's license key.

### Optional Query Params
- `host`: The host URL requesting the update (for logging).

### Success Response (`200 OK`)
```json
{
  "name": "My Cool Plugin Pro",
  "slug": "my-cool-plugin",
  "version": "2.1.0",
  "download_url": "https://server.com/wp-json/license-server/v1/download/my-cool-plugin/WPAB-...",
  "package": "https://server.com/wp-json/license-server/v1/download/my-cool-plugin/WPAB-...",
  "homepage": "https://server.com",
  "requires": "5.0",
  "tested": "6.5",
  "sections": {
    "description": "Full plugin description...",
    "changelog": "<h4>2.1.0</h4><ul><li>Bug fixes...</li></ul>"
  }
}
```

---

## 4. Protected Download (`GET /download/{slug}/{license_key}`)

Streams the latest release zip file. This endpoint performs full license validation before initiating the stream.

### Parameters
- `{slug}`: The software slug.
- `{license_key}`: The customer's license key.

### Headers
The response is returned with standard file-stream headers:
- `Content-Type: application/zip`
- `Content-Disposition: attachment; filename="slug-version.zip"`

---

## Rate Limits

To prevent abuse, the following limits are enforced per IP address:

| Endpoint | Limit | Window |
| :--- | :--- | :--- |
| `/activate` | 10 requests | 60 seconds |
| `/check` | 60 requests | 60 seconds |
| `/update-check` | 60 requests | 60 seconds |
| `/download` | 60 requests | 60 seconds |

:::tip
> Clients should implement local caching (e.g., using WordPress transients) to avoid hitting these limits during normal operation.
:::