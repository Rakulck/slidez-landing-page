import { NextResponse } from "next/server";

export async function GET() {
  const oidcConfig = {
    issuer: "https://www.slidez.social",
    authorization_endpoint: "https://www.slidez.social/login",
    token_endpoint: "https://www.slidez.social/api/auth/token",
    userinfo_endpoint: "https://www.slidez.social/api/auth/userinfo",
    jwks_uri: "https://www.slidez.social/.well-known/jwks.json",
    response_types_supported: ["code", "token", "id_token"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256"],
    grant_types_supported: [
      "authorization_code",
      "refresh_token",
      "client_credentials",
    ],
    scopes_supported: ["openid", "profile", "email"],
    token_endpoint_auth_methods_supported: [
      "client_secret_basic",
      "client_secret_post",
    ],
    code_challenge_methods_supported: ["S256"],
    agent_auth: {
      skill: "https://workos.com/auth-md",
      register_uri: "https://www.slidez.social/api/auth/register",
      identity_types_supported: ["anonymous", "verified_email"],
      anonymous: {
        credential_types_supported: ["bearer_token"],
        claim_uri: "https://www.slidez.social/api/auth/claim",
      },
      verified_email: {
        credential_types_supported: ["bearer_token"],
        claim_uri: "https://www.slidez.social/api/auth/claim",
      },
    },
  };

  return NextResponse.json(oidcConfig, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
