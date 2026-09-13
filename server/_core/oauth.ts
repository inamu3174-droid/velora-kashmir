import type { Express } from "express";

export function registerOAuthRoutes(app: Express) {
  app.get("/api/oauth/callback", (req, res) => {
    // Simplified OAuth callback placeholder
    res.redirect("/");
  });

  app.post("/api/auth/logout", (_req, res) => {
    res.clearCookie("app_session_id");
    res.json({ success: true });
  });
}
