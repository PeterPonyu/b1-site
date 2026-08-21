import PageShell from '@/components/PageShell';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Scope. chrome.pose-ledger */
const CLAIMS_BIND = PAGE_BINDINGS.claims;

export default function B1ClaimsPage() {
  return (
    <PageShell title="Scope" kicker="Cofolding reliability statements">
      <p>
        Falsifiable statements for this cofolding-confidence object are not posted on this leaf.
        No article DOI is assigned for this cofolding leaf.
      </p>
      <p>Out of scope: journal venue packaging, invented article DOI, or a product headline.</p>
      <p className="sr-only" data-page-id={CLAIMS_BIND.pageId} data-chrome={CLAIMS_BIND.sharedRunner}>
        {CLAIMS_BIND.pageId} {CLAIMS_BIND.sharedRunner}
      </p>
    </PageShell>
  );
}
