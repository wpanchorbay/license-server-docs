---
title: Integration Overview
description: Learn the expected integration model for client plugins that activate licenses and receive updates.
---

Client plugins should treat License Server as a remote licensing backend.

## Recommended client-side pieces

- a config source for base URL, slug, option keys, and timeouts
- a license client or service class
- local admin-only REST endpoints for the plugin UI
- local storage for license key, status, and expiration
- a transient cache for validation state

## Endpoint rules

- `/activate` requires `license_key`, `slug`, and `domain`
- `/check` requires `license_key` and `slug`
- `/check` can also validate a specific activation row when `domain` is sent
- `/update-check/{slug}/{license_key}` returns update metadata
- `/download/{slug}/{license_key}` streams the protected zip

Avoid calling the License Server API directly from browser code. A safer pattern is:

1. browser UI calls your plugin's local admin REST endpoint
2. your local PHP endpoint calls License Server
3. your plugin stores the resulting status locally
