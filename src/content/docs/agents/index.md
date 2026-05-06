---
title: Agent Guide
description: Start here when an AI agent needs to understand how to use or extend License Server.
---

This section exposes the agent-facing guide in a public, crawlable form. It is useful for AI systems, MCP clients, and automation that need precise instructions for operating or integrating License Server.

## Which module to load

- To install, configure, or operate License Server, read [Install And Operate](./install-operate/).
- To integrate another plugin, read [Integrate Plugins](./integrate-plugins/).
- To work with routes and payloads, read [Agent REST Reference](./rest-api/).
- To diagnose setup or integration problems, read [Agent Troubleshooting](./troubleshooting/).
- To connect through MCP, read [MCP Server](./mcp-server/).

## Core facts

- Plugin slug, text domain, and REST namespace root: `license-server-for-woocommerce`.
- REST base path: `/wp-json/license-server-for-woocommerce/v1`.
- Public API authentication is license-key based.
- Admin API authentication is WordPress capability and nonce based.
- WooCommerce completed orders drive automatic license generation.

## Meta files and discovery endpoints

These public machine-readable files help crawlers, agents, and automation discover the docs and related integration metadata:

- [llms.txt](../llms.txt) for the concise LLM-friendly overview of the documentation set.
- [llms-full.txt](../llms-full.txt) for the expanded plain-text export of the docs corpus.
- [robots.txt](../robots.txt) for crawler policy and the sitemap reference.
- [sitemap-index.xml](../sitemap-index.xml) for the top-level sitemap index.
- [sitemap-0.xml](../sitemap-0.xml) for the generated URL list currently referenced by the sitemap index.
- [`.well-known/mcp.json`](../.well-known/mcp.json) for MCP discovery metadata related to the public documentation site.

## Keep docs and agent knowledge in sync

When License Server behavior changes, update the public docs and the agent guide together. The most important areas to keep current are setup flow, product meta, REST API contracts, database schema, release packaging, activation behavior, update/download behavior, and recommended integration patterns.
