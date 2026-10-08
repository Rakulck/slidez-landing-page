# auth.md

You are an agent. This service supports **agentic registration**: discover → register → (claim if needed) → exchange for an access_token → call API → handle revocation. Follow the steps in order.

---

## Audience

This specification is intended for autonomous AI agents, multi-agent orchestration systems, and automated client applications interacting with Slidez fashion styling and virtual try-on APIs.

---

## Step 1 — Discover

Discovery begins by inspecting the OAuth Protected Resource Metadata (PRM) and OAuth Authorization Server metadata:

### 1a. Protected Resource Metadata
```http
GET /.well-known/oauth-protected-resource HTTP/1.1
Host: www.slidez.social
Accept: application/json
```

Response:
```json
{
  "resource": "https://www.slidez.social",
  "authorization_servers": ["https://www.slidez.social"],
  "scopes_supported": ["openid", "profile", "email", "agent:read", "agent:write"],
  "bearer_methods_supported": ["header"],
  "resource_documentation": "https://www.slidez.social/auth.md"
}
```

### 1b. Authorization Server Metadata
```http
GET /.well-known/oauth-authorization-server HTTP/1.1
Host: www.slidez.social
Accept: application/json
```

---

## Step 2 — Pick a Registration Method

Select one of the supported registration methods:

1. **`identity_assertion`**: When you hold an ID-JAG (Identity Assertion JWT) minted by a trusted provider (`urn:ietf:params:oauth:token-type:id-jag`).
2. **`verified_email`**: When asserting a verified user email address. Claim ceremony required.
3. **`anonymous`**: When registering without an immediate user identity. An access token is granted, and user ownership can be claimed later.

---

## Step 3 — Register

Submit a registration request to the identity endpoint:

```http
POST /api/auth/register HTTP/1.1
Host: www.slidez.social
Content-Type: application/json

{
  "identity_type": "anonymous"
}
```

Response:
```json
{
  "assertion": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "claim_uri": "https://www.slidez.social/api/auth/claim"
}
```

---

## Step 4 — Claim Ceremony (User Ownership)

For anonymous or unconfirmed identities, initiate the claim flow so a human user can verify and bind their account:

```http
POST /api/auth/claim HTTP/1.1
Host: www.slidez.social
Content-Type: application/json

{
  "claim_uri": "https://www.slidez.social/api/auth/claim"
}
```

---

## Step 5 — Exchange for Access Token

Exchange the assertion for a user-scoped or agent-scoped access token:

```http
POST /api/auth/token HTTP/1.1
Host: www.slidez.social
Content-Type: application/x-www-form-urlencoded

grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOi...
```

Response:
```json
{
  "access_token": "slz_agt_tok_demo_token",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "openid profile agent:read agent:write"
}
```

---

## Step 6 — Call Protected API

Include the issued access token in the `Authorization` header on all API requests:

```http
GET /api/v1/style-profile HTTP/1.1
Host: www.slidez.social
Authorization: Bearer <access_token>
```

### Supported Scopes
- `openid`: Basic OpenID Connect identity.
- `profile`: User styling preferences, measurements, and wardrobe data.
- `email`: Verified email identity.
- `agent:read`: Read-only access to agent styling capabilities.
- `agent:write`: Execute outfit creations, try-on actions, and recommendations.

---

## Step 7 — Handle Revocation

When an agent session terminates or authorization is revoked, call the revocation endpoint:

```http
POST /api/auth/revoke HTTP/1.1
Host: www.slidez.social
Content-Type: application/x-www-form-urlencoded

token=<access_token>&token_type_hint=access_token
```


