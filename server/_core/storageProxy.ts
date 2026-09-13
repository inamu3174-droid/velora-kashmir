import type { Express } from "express";

export function registerStorageProxy(app: Express) {
  // Placeholder for storage proxy routes
  app.get("/api/storage/*", (_req, res) => {
    res.status(404).json({ error: "Not found" });
  });
}
