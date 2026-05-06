---
title: Installation
description: Install License Server in WordPress and prepare it for your first software release.
---

## Install the plugin

1. Install and activate WooCommerce.
2. Install and activate License Server.
3. Confirm the plugin activates without fatal errors.

On activation, License Server creates the custom tables it needs for:

- software releases
- licenses
- activations
- logs

## Development build commands

If you are working on the plugin locally, the main commands are:

```bash
bun install
composer install
bun run build
bun run package-plugin
```

The production release zip is created from the plugin repository packaging workflow, not from this docs site.
