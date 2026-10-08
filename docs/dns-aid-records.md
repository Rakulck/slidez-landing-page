# DNS for AI Discovery (DNS-AID) Records

This document defines the **DNS for AI Discovery (DNS-AID)** records for `slidez.social` according to [draft-mozleywilliams-dnsop-dnsaid](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/) and [RFC 9460](https://www.rfc-editor.org/rfc/rfc9460) (SVCB / HTTPS Service Binding DNS records).

---

## 1. Required DNS Records

Add the following DNS records to your DNS provider (e.g. Cloudflare, AWS Route 53, Vercel DNS, or BIND):

### A. Agent-to-Agent (`_a2a._agents.slidez.social`)

- **Name / Subdomain**: `_a2a._agents.slidez.social`
- **Record Type**: `SVCB` (or `HTTPS`)
- **Priority / SvcPriority**: `1`
- **Target / TargetName**: `www.slidez.social.` (or `slidez.social.`)
- **Params**: `alpn="a2a" port=443 mandatory=alpn,port`
- **TTL**: `3600`

#### Standard BIND Zone Format:
```dns
_a2a._agents.slidez.social. 3600 IN SVCB 1 www.slidez.social. alpn="a2a" port=443 mandatory=alpn,port
```

---

### B. Agent Discovery Index (`_index._agents.slidez.social`)

- **Name / Subdomain**: `_index._agents.slidez.social`
- **Record Type**: `HTTPS` (or `SVCB`)
- **Priority / SvcPriority**: `1`
- **Target / TargetName**: `www.slidez.social.` (or `slidez.social.`)
- **Params**: `alpn="h2,h3" port=443 mandatory=alpn,port`
- **TTL**: `3600`

#### Standard BIND Zone Format:
```dns
_index._agents.slidez.social. 3600 IN HTTPS 1 www.slidez.social. alpn="h2,h3" port=443 mandatory=alpn,port
```

---

## 2. DNSSEC Requirement

Ensure **DNSSEC** is enabled on the `slidez.social` domain zone in your DNS management console (e.g., Cloudflare DNSSEC or Route 53 DNSSEC) so DNS-over-HTTPS resolvers return authenticated data with the `AD` (Authenticated Data) flag.

---

## 3. Provider Specific Setup Instructions

### Cloudflare DNS
1. Navigate to **DNS** > **Records** in Cloudflare Dashboard.
2. Click **Add Record**.
3. Select Type `SVCB` (or `HTTPS`).
4. Set Name to `_a2a._agents`.
5. Target: `www.slidez.social`.
6. Value / Parameters: `alpn="a2a" port=443 mandatory=alpn,port`.
7. Repeat for `_index._agents` with type `HTTPS`.
8. Ensure **DNSSEC** is turned ON in **DNS** > **Settings**.

### AWS Route 53
1. Go to Route 53 Hosted Zone `slidez.social`.
2. Click **Create Record**.
3. Record Name: `_a2a._agents.slidez.social`.
4. Record Type: `SVCB`.
5. Value: `1 www.slidez.social. alpn="a2a" port=443 mandatory=alpn,port`.
