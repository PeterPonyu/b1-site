/**
 * b1-site — cofolding pose ledger (not a shared science-gateway shell).
 */
export const SITE = {
  slug: 'b1-site',
  shortName: 'Cofolding',
  mark: 'RnP',
  title: "Protein–ligand cofolding confidence on Runs N' Poses",
  kicker: 'Pose ledger · Runs N’ Poses complexes',
  lead: 'Public Pages leaf for a cofolding-confidence study. This site names the research object and the archive pointer; it does not host figures or numeric results.',
  physicalObject:
    "Deposited protein–ligand complexes: pose, pocket occupancy, and task type on Runs N' Poses.",
  primaryClaim:
    'Scientific measurements and falsifiable claims are not posted on this public leaf. The Archive chip is the record pointer when it is enabled.',
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
  repo: 'https://github.com/PeterPonyu/b1-site',
  externalLeaves: [
    { href: 'https://peterponyu.github.io/', label: 'Lab index' },
    { href: 'https://peterponyu.github.io/scportal/', label: 'Catalog' },
  ],
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
    href: 'https://peterponyu.github.io/b1-site/',
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
    disabledReason: 'No article DOI for this cofolding leaf',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  {
    href: '/results',
    label: 'Pose',
    number: '01',
    blurb:
      "Deposited pose and pocket occupancy on Runs N' Poses — figures are not hosted on this leaf.",
  },
  {
    href: '/methods',
    label: 'Protocol',
    number: '02',
    blurb: 'How ligand RMSD, DockQ, and affinity stay separate tasks on deposited complexes.',
  },
  {
    href: '/evidence',
    label: 'Cases',
    number: '03',
    blurb: 'Hold-out cases where reported confidence and pose disagree — withheld here.',
  },
  {
    href: '/claims',
    label: 'Scope',
    number: '04',
    blurb: 'What would refute a cofolding-confidence reading of this object.',
  },
] as const;

/** Unique infra binding per route. Chrome runner is this leaf only. */
export type PageBinding = {
  pageId: string;
  runnerId: string;
  dataId: string;
  lawId: string;
  sharedRunner: 'chrome.pose-ledger';
};

export const PAGE_BINDINGS = {
  home: {
    pageId: 'b1.page.home',
    runnerId: 'b1.runner.home-pose-vs-score',
    dataId: 'b1.data.home-object-card',
    lawId: 'b1.law.confidence-not-pose',
    sharedRunner: 'chrome.pose-ledger',
  },
  results: {
    pageId: 'b1.page.results',
    runnerId: 'b1.runner.results-case-cards',
    dataId: 'b1.data.results-withheld',
    lawId: 'b1.law.analog-absence-rmsd',
    sharedRunner: 'chrome.pose-ledger',
  },
  methods: {
    pageId: 'b1.page.methods',
    runnerId: 'b1.runner.methods-rnp-protocol',
    dataId: 'b1.data.rnp-tanimoto-dockq',
    lawId: 'b1.law.task-split-pose-affinity',
    sharedRunner: 'chrome.pose-ledger',
  },
  evidence: {
    pageId: 'b1.page.evidence',
    runnerId: 'b1.runner.evidence-hold-fail',
    dataId: 'b1.data.evidence-withheld',
    lawId: 'b1.law.matched-confidence-opposite-pose',
    sharedRunner: 'chrome.pose-ledger',
  },
  claims: {
    pageId: 'b1.page.claims',
    runnerId: 'b1.runner.claims-withheld',
    dataId: 'b1.data.claims-withheld',
    lawId: 'b1.law.falsifiable-cofolding',
    sharedRunner: 'chrome.pose-ledger',
  },
} as const satisfies Record<string, PageBinding>;

export const STATS = [] as const;

export const RESULTS_FIGURES = [] as const;

export const EVIDENCE_TILES = [] as const;

export const METHODS_SUMMARY =
  "Cofolding models are scored on deposited Runs N' Poses complexes. Ligand similarity, interface quality, and affinity are treated as separate tasks. Pocket occupancy is audited only on scoped panels that are not hosted here." as const;

export const CLAIMS = [] as const;
