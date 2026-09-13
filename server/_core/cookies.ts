import type { Response } from "express";

export function setCookie(
  res: Response,
  name: string,
  value: string,
  options: {
    maxAge?: number;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: "strict" | "lax" | "none";
    path?: string;
  } = {}
) {
  const {
    maxAge = 60 * 60 * 24 * 365,
    httpOnly = true,
    secure = true,
    sameSite = "lax",
    path = "/",
  } = options;

  res.cookie(name, value, {
    maxAge: maxAge * 1000,
    httpOnly,
    secure,
    sameSite,
    path,
  });
}

export function clearCookie(res: Response, name: string) {
  res.clearCookie(name, { path: "/" });
}
