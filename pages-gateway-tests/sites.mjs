/** Live b1-site Pages leaf only. Sibling result sites are out of this repo's CI. */

export const B1_PAGES_URL = 'https://peterponyu.github.io/b1-site/';
export const HOMEPAGE_URL = 'https://peterponyu.github.io/';
export const SCPORTAL_URL = 'https://peterponyu.github.io/scportal/';
export const B1_GITHUB_URL = 'https://github.com/PeterPonyu/b1-site';

/**
 * Current landing still serves these as no-figure / no-number stubs (HTTP 200).
 * They must not become restored results pages.
 */
export const STUB_ROUTES = [
  'https://peterponyu.github.io/b1-site/results/',
  'https://peterponyu.github.io/b1-site/methods/',
  'https://peterponyu.github.io/b1-site/evidence/',
  'https://peterponyu.github.io/b1-site/claims/',
];

/** Unpublished figure assets removed from Pages. Must stay 404. */
export const UNPUBLISHED_ASSETS = [
  'https://peterponyu.github.io/b1-site/media/F1_four_panel.png',
  'https://peterponyu.github.io/b1-site/media/F_case_study.png',
];

/**
 * Unpublished-result tokens that must not appear on the public leaf.
 * Align with `scripts/verify-export.mjs` leakPatterns (values / IDs, not the word RMSD).
 */
export const LEAK_TOKENS = [
  'unpublished results',
  'unpublished-results',
  'SOTA',
  '0.15 Å',
  '0.15Å',
  '6.3 Å',
  '6.3Å',
  '15.6 Å',
  '15.6Å',
  'n=182',
  'F1_four_panel',
  'F_case_study',
  '8e5i',
  '8og8',
  '8q0u',
];

export const ALLOWED_PUBLISHED_ARTICLE_DOIS = new Set([]);

export const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
};
