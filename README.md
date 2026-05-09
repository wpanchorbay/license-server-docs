# License Server for WooCommerce - Documentation

Official documentation site for the License Server for WooCommerce plugin. This site provides comprehensive guides for operating the server and integrating client plugins.

[Live Documentation](https://docs.wpanchorbay.com/license-server-for-woocommerce/) | [GitHub Repository](https://github.com/wpanchorbay/license-server-for-woocommerce)

---

## ✨ Features

- **🚀 Performance-First**: Powered by Astro for lightning-fast static page loads.
- **🎨 Premium UI**: Custom-built components with a sleek, modern aesthetic and micro-animations.
- **🌗 Native Dark Mode**: Intelligent theme switching with high-contrast dark mode colors.
- **🤖 AI-Ready**: Automated generation of `llms.txt` and `llms-full.txt` for optimal indexing by Large Language Models.
- **🔌 MCP Integration**: Includes a built-in Model Context Protocol (MCP) server for deep integration with AI coding assistants.
- **🛠️ Developer-Centric**: Detailed API references, lifecycle hooks, and architecture diagrams.

---

## 🛠️ Local Development

Built with [**Astro**](https://astro.build/) and the [**Starlight**](https://starlight.astro.build/) framework. This project uses [**PNPM**](https://pnpm.io/) as the primary package manager.

### Installation
```bash
pnpm install
```

### Development Server
Start the development server with hot-module replacement:
```bash
pnpm run dev
```

### Build & Validate
Prepare the project for production and check for potential issues:
```bash
pnpm run build    # Build static site
pnpm run check    # Run Astro sync and TypeScript checks
```

---

## AI & MCP Integration

This documentation is designed to be highly accessible to AI agents and developers.

### LLMS Discovery
The site automatically generates AI-friendly summaries at the root:
- `/llms.txt`: High-level summary of the documentation structure.
- `/llms-full.txt`: Full concatenated text content for RAG and context window loading.

### MCP Server
The repository includes a read-only MCP server that allows AI clients to browse and search the documentation structure programmatically.

```bash
# Run via stdio (for local AI clients)
pnpm run mcp

# Run via HTTP (JSON-RPC endpoint)
pnpm run mcp:http
```
*Note: The HTTP endpoint defaults to `http://localhost:8787/mcp`.*

---

## ⚙️ Configuration

Site-wide settings are managed in `site-config.mjs`:

- **`SITE_ORIGIN`**: The canonical URL of the documentation (default: `https://docs.wpanchorbay.com`).
- **`BASE_PATH`**: The subpath where the docs are hosted (default: `/license-server-for-woocommerce`).
- **`REPO_URL`**: The link to the source code repository.

---

## 📂 Project Structure

- `src/content/docs/`: Markdown and MDX content files.
- `src/components/`: Custom Astro components and Starlight overrides.
- `src/styles/`: Global and component-specific CSS (main design system in `home.css`).
- `public/`: Static assets (images, logos, icons).

---

## 📄 License

Managed by [WPAnchorBay](https://wpanchorbay.com/). All rights reserved.
