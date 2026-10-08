# Slidez auth.md

This document provides instructions for AI agents and automated clients to register, authenticate, and access protected APIs and agent capabilities on Slidez per the [Auth.md](https://workos.com/auth-md) standard.

---

## Audience

This specification is intended for autonomous AI agents, multi-agent orchestration systems, and client applications interacting with Slidez services and fashion styling APIs.

---

## Authentication & Discovery Endpoints

- **Auth.md Spec:** `https://www.slidez.social/auth.md`
- **Protected Resource Metadata:** `https://www.slidez.social/.well-known/oauth-protected-resource`
- **OAuth Authorization Server:** `https://www.slidez.social/.well-known/oauth-authorization-server`
- **OpenID Connect Discovery:** `https://www.slidez.social/.well-known/openid-configuration`
- **API Catalog:** `https://www.slidez.social/.well-known/api-catalog`
- **Agent Card:** `https://www.slidez.social/.well-known/agent-card.json`

---

## Registration & Authorization Flow

### 1. Agent Registration
- **Registration Endpoint:** `https://www.slidez.social/api/auth/register`
- **Claim Endpoint:** `https://www.slidez.social/api/auth/claim`
- **Revocation Endpoint:** `https://www.slidez.social/api/auth/revoke`
- **Supported Identity Types:** `identity_assertion`, `verified_email`, `anonymous`
- **Supported Credential Types:** `bearer_token`
- **Supported Assertion Types:** `urn:ietf:params:oauth:token-type:id-jag`, `verified_email`

### 2. Token Usage
Include access tokens in the `Authorization` HTTP header for API requests:

```http
Authorization: Bearer <access_token>
```

### 3. Scopes Supported
- `openid`: Basic OpenID Connect identity.
- `profile`: User styling preferences and profile metadata.
- `email`: Email verification identity.
- `agent:read`: Read access to agent capabilities.
- `agent:write`: Execute agent actions on behalf of registered users.

