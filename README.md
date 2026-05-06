# License Server Docs

Public documentation site for License Server, built with Astro and Starlight.

## Local Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
bun run check
```

## MCP Server

The docs repo includes a read-only MCP server for AI clients:

```bash
bun run mcp
bun run mcp:http
```

The stdio command is intended for local MCP clients. The HTTP command starts a JSON-RPC endpoint at `http://localhost:8787/mcp` and should be deployed to a dynamic host if you want a remote MCP endpoint.

## Deployment Notes

- Production docs are published under `/license-server`.
- The GitHub Pages workflow builds and deploys the generated static site.
- `robots.txt`, `llms.txt`, `llms-full.txt`, `.well-known/mcp.json`, and sitemap files are generated as public output.

## Site Configuration

- `SITE_ORIGIN` controls the canonical site origin used for sitemap and metadata generation.
- `DOCS_REPO_URL` controls the GitHub repository link shown in the docs UI.
