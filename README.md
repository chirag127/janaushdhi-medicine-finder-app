# Oriz Janaushdhi

[![GitHub stars](https://img.shields.io/github/stars/chirag127/janaushdhi-app?style=social)](https://github.com/chirag127/janaushdhi-app/stargazers)

> Read-only catalog of the Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) generic medicine list — search, filter, compare prices, and locate the nearest PMBJP Kendra.

**Live at**: <https://janaushdhi.oriz.in> · **Status**: scaffold

## What this is

A static directory of generic medicines sold through the PMBJP scheme, sourced from `pmbjp.gov.in/janaushadhi-product-list.aspx`. Product brand is **Janaushdhi** itself — the program name is the SEO target.

## Per-feature inventory

| Feature | Status |
| --- | --- |
| Medicine catalog (search + filter) | 📜 planned |
| Per-medicine detail page | 📜 planned |
| Nearest Kendra lookup | 📜 planned |
| Weekly CSV refresh from `pmbjp.gov.in` | 📜 planned |
| Account / sign-in (shared) | 📜 planned |
| Legal pages | 📜 planned |

## App-specific env vars

None beyond the family-wide set at `templates/.env.example`.

## Local dev

```bash
# from the workspace root (c:/D/oriz)
pnpm -F @chirag127/oriz-janaushdhi dev
```

## Knowledge

See [`./knowledge/`](./knowledge/) for app-specific decisions, runbooks, and services. Family rules / decisions / architecture live at the master repo's [`knowledge/`](../../../../knowledge/).

## License

MIT License. See master [`LICENSE`](../../../../LICENSE) — same terms across the family.
