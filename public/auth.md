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
- **Endpoint:** `https://www.slidez.social/api/auth/register`
- **Supported Identity Types:** `anonymous`, `verified_email`
- **Supported Credential Types:** `bearer_token`

### 2. Token Usage
Include access tokens in the `Authorization` HTTP header for API requests:

```http
Authorization: Bearer <access_token>
```

### 3. Scopes Supported
- `openid`: Basic OpenID Connect identity.
- `profile`: User styling preferences and profile metadata.
- `email`: Email verification identity.
