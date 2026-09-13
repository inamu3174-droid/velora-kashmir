export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const OAUTH_STATE_COOKIE = "__Host-oauth_state";
export const UNAUTHED_ERR_MSG = "UNAUTHORIZED";

export function encodeOAuthState(payload: { redirectUri: string; nonce: string }) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

export function decodeOAuthState(state: string): { redirectUri: string; nonce: string } {
  return JSON.parse(Buffer.from(state, "base64url").toString("utf8"));
}
