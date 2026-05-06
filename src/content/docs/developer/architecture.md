---
title: Architecture
description: Understand the main runtime layers behind License Server and how requests flow through them.
---

License Server is a WordPress plugin with a PHP backend and a React admin SPA.

## Main layers

- bootstrap in `license-server.php`
- orchestration in `app/Core/Plugin.php`
- REST controllers in `app/Api/`
- persistence in `app/Data/`
- WooCommerce integration in `app/Admin/` and `app/Core/Frontend/`
- admin frontend in `src/`

## Runtime flow

1. WordPress loads `license-server.php`
2. the plugin defines constants and autoloaders
3. `Plugin` instantiates controllers and managers
4. REST routes register on `rest_api_init`
5. the admin React app mounts in the WordPress dashboard

## Notable implementation behavior

- public endpoints rely on license validation and rate limiting, not WordPress auth
- admin endpoints use WordPress capability checks and REST nonces
- software zip delivery is routed through validated download endpoints
