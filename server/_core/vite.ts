import type { Express } from "express";
import type { Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function setupVite(app: Express, server: Server) {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { server } },
    appType: "custom",
    root: path.resolve(__dirname, "../../client"),
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = await vite.transformIndexHtml(
        url,
        await (await import("fs")).promises.readFile(
          path.resolve(__dirname, "../../client/index.html"),
          "utf-8"
        )
      );
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../../dist/public");
  app.use((await import("express")).default.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}
