---
title: Hooks And Lifecycle
description: Understand how WooCommerce, WordPress hooks, and the order lifecycle drive License Server behavior.
---

## Key WordPress and WooCommerce hooks

- `plugins_loaded`
- `rest_api_init`
- `admin_menu`
- `admin_enqueue_scripts`
- `woocommerce_product_data_tabs`
- `woocommerce_product_data_panels`
- `woocommerce_process_product_meta`
- `woocommerce_save_product_variation`
- `woocommerce_order_status_completed`
- `woocommerce_account_menu_items`
- `woocommerce_account_licenses_endpoint`

## High-level lifecycle

1. the plugin boots and registers its controllers and managers
2. admins configure software and WooCommerce products
3. a completed order triggers license generation
4. customers receive and view their keys
5. client plugins activate and validate through REST APIs
6. update-check and download requests are logged and protected
