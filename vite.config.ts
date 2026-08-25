// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load non-VITE_ env vars into process.env for server-side code only.
const serverEnv = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
Object.assign(process.env, serverEnv);


// Nitro's cloudflare preset emits the server bundle as `dist/server/index.mjs`,
// but TanStack's prerender preview server imports `dist/server/<entry>.js`
// (`server.js` for the `server` entry). Emit a tiny re-export shim after the
// build so prerendering can boot the built server.
function serverEntryShimPlugin() {
  return {
    name: "voltrage:server-entry-shim",
    apply: "build" as const,
    closeBundle() {
      writeFileSync("dist/package.json", '{ "type": "module" }\n');
      writeFileSync(
        "dist/server/server.js",
        [
          'import worker from "./index.mjs";',
          "",
          "// srvx's NodeRequest exposes a getter-only `ip`, but the Cloudflare-module",
          "// runtime assigns `req.ip` — hand it a fresh plain Request instead.",
          "export default {",
          "  fetch(request, env, ctx) {",
          "    const hasBody = request.method !== \"GET\" && request.method !== \"HEAD\";",
          "    const plain = new Request(request.url, {",
          "      method: request.method,",
          "      headers: request.headers,",
          "      ...(hasBody ? { body: request.body, duplex: \"half\" } : {}),",
          "    });",
          "    return worker.fetch(",
          "      plain,",
          "      env ?? {},",
          "      ctx ?? { waitUntil: () => {} },",
          "    );",
          "  },",
          "};",
          "",
        ].join("\n"),
      );
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [serverEntryShimPlugin()],
    resolve: {
      alias: {
        "entities/lib/decode.js": path.resolve(__dirname, "node_modules/entities/lib/decode.js"),
        "entities/lib/encode.js": path.resolve(__dirname, "node_modules/entities/lib/encode.js"),
        entities: path.resolve(__dirname, "node_modules/entities"),
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
      autoSubfolderIndex: true,
    },
  },
});
