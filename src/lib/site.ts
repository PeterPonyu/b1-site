/**
 * b1-site — science gateway config (generated; edit in site-configs.mjs + re-scaffold).
 */
export const SITE = {
  slug: 'b1-site',
  shortName: "Cofolding",
  title: "Protein–ligand cofolding confidence on Runs N' Poses degrades under ligand-similarity shift",
  kicker: "ZF Lab · cofolding reliability",
  lead: "The object is the deposited pose, the pocket, and the task — ligand RMSD versus interface DockQ versus affinity — not an ECE fold-change.",
  physicalObject: "Deposited protein–ligand complexes: pose, pocket occupancy, and task type on Runs N' Poses.",
  primaryClaim: "Boltz-2 confidence stays high while ligand RMSD fails when training analogs are absent — pose error is not captured by the reported score alone.",
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
} as const;

export type BadgeConfig = {
  label: string;
  href?: string;
  enabled: boolean;
  disabledReason?: string;
};

export const BADGES = {
  code: {
    label: 'Code',
    enabled: false,
    disabledReason: 'No anonymous public HTTPS 200 yet',
  } satisfies BadgeConfig,
  site: {
    label: 'Site',
    href: "https://peterponyu.github.io/b1-site/",
    enabled: true,
  } satisfies BadgeConfig,
  archive: {
    label: 'Archive',
    href: 'https://doi.org/10.5281/zenodo.21870002',
    enabled: true,
  } satisfies BadgeConfig,
  articleDoi: {
    label: 'Article DOI',
    enabled: false,
    disabledReason: 'On acceptance',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  { href: '/results', label: 'Results', number: '01' },
  { href: '/methods', label: 'Methods', number: '02' },
  { href: '/evidence', label: 'Evidence', number: '03' },
  { href: '/claims', label: 'Claims', number: '04' },
] as const;

export const STATS = [
  {
    "value": "3",
    "label": "audited complexes · 8e5i / 8og8 / 8q0u"
  },
  {
    "value": "8",
    "label": "cofolding models on Runs N' Poses"
  },
  {
    "value": "182",
    "label": "post-cutoff systems for pocket occupancy (Fig 8 only)"
  }
] as const;

export const RESULTS_FIGURES = [
  {
    "src": "/media/F_case_study.png",
    "alt": "Three ligand case cards at similar confidence with opposite pose outcomes",
    "caption": "Case cards: 8e5i holds at 0.15 Å; 8og8 and 8q0u fail at 6.3 Å and 15.6 Å while scores stay high."
  },
  {
    "src": "/media/F1_four_panel.png",
    "alt": "Four-panel pose comparison across audited complexes",
    "caption": "Fig 1 — opposite poses at similar Boltz-2 confidence."
  },
  {
    "src": "/media/F5_double_dissociation.png",
    "alt": "Known-pocket Vina versus learned cofolding",
    "caption": "Fig 5 — Vina redock succeeds where cofolding fails on hard examples."
  },
  {
    "src": "/media/F8_postcutoff_pocket.png",
    "alt": "Post-cutoff pocket occupancy analysis",
    "caption": "Fig 8 — pocket novelty after the training cutoff (scoped n=182)."
  }
] as const;

export const EVIDENCE_TILES = [
  {
    "value": "0.15 Å",
    "label": "8e5i ligand RMSD · training-similar hold"
  },
  {
    "value": "6.3 / 15.6 Å",
    "label": "8og8 / 8q0u RMSD · high score, failed pose"
  },
  {
    "value": "≤2 Å",
    "label": "Vina redock on known-pocket hard cases"
  }
] as const;

export const METHODS_SUMMARY = "Eight cofolding models scored on Runs N' Poses deposited complexes. Ligand similarity via Tanimoto to training analogs; interface quality via DockQ; affinity tasks held separate from pose metrics. Pocket occupancy audited post-cutoff only where n is scoped on-panel." as const;

export const CLAIMS = [
  {
    "claim": "High cofolding confidence does not imply correct pose when ligand analogs are absent.",
    "scope": "Runs N' Poses · three audited complexes + post-cutoff pocket panel.",
    "refutation": "Show matched-confidence cases where RMSD stays ≤2 Å without training analogs."
  },
  {
    "claim": "Known-pocket Vina can recover poses cofolding misses on the same structures.",
    "scope": "8og8 and 8q0u hard examples only.",
    "refutation": "Demonstrate cofolding beats Vina on those pairs under the same pocket definition."
  }
] as const;
