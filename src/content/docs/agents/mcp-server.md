---
title: MCP Server
description: Connect MCP-capable AI systems to License Server documentation and agent guidance.
---

This docs project includes a read-only MCP server that exposes License Server documentation and agent guidance to MCP-capable AI clients.

## What it provides

Resources:

- public docs pages
- agent guide pages
- API and troubleshooting references

Tools:

- `search_license_server_docs`
- `get_license_server_doc`

Prompts:

- `setup_license_server`
- `integrate_client_plugin`
- `troubleshoot_license_activation`

## Run with stdio

Use stdio for local clients that launch a command directly.

```bash
bun run mcp
```

Example client command:

```json
{
  "command": "bun",
  "args": ["run", "mcp"],
  "cwd": "/home/forhad/projects/license-server-for-woocommerce"
}
```

## Run over HTTP

Use HTTP when deploying the MCP server separately from GitHub Pages.

```bash
bun run mcp:http
```

By default, the HTTP server listens on port `8787` and responds at:

```text
http://localhost:8787/mcp
```

## Important deployment note

GitHub Pages can host the public docs, `llms.txt`, `llms-full.txt`, `robots.txt`, and sitemap files, but it cannot host the live MCP endpoint. Deploy the MCP server to a dynamic Node-capable host, then keep the static docs on GitHub Pages.

## Public discovery file

The docs build also publishes:

```text
/.well-known/mcp.json
```

That file points AI systems to the public docs, LLM text files, and MCP server instructions.
