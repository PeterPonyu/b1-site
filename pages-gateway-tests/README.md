# b1-site Pages landing tests (Playwright)

Browser policy gate for **this repo's** GitHub Pages leaf only (`https://peterponyu.github.io/b1-site/`). It does **not** crawl sibling paper sites.

Daily `cron: 30 3 * * *` was dropped: this leaf is static, post-deploy coverage is `workflow_run` after **Deploy GitHub Pages**, and the old schedule was mailing failures from sibling-site chrome assertions.

## Contract

| Check | Rule |
|---|---|
| Home | HTTP 200 object+archive leaf |
| Leak tokens | No unpublished-results framing / SOTA / RMSD Å values / `n=182` / `8e5i` `8og8` `8q0u` / unpublished figure filenames |
| Stub routes | `/results/` `/methods/` `/evidence/` `/claims/` stay HTTP 200 with no restored numbers or figures |
| Figures | `/media/F1_four_panel.png` and `/media/F_case_study.png` stay 404 |
| Chrome | Sticky header with Homepage + SCPortal |
| Layout | No horizontal overflow on Home @ 1280 and 390 |
| Packaging | No venue-intended / under review / BibTeX kit |
| Links | Public `PeterPonyu/b1-site`; no HetCLOP href; Zenodo archive OK; no invented article DOI |

## Run locally

```bash
cd pages-gateway-tests
npm ci
npx playwright install chromium
npm test
```
