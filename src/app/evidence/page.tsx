import PageShell from '@/components/PageShell';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Cases. chrome.pose-ledger */
const EVIDENCE = PAGE_BINDINGS.evidence;

export default function B1EvidencePage() {
  return (
    <PageShell title="Cases" kicker="Hold versus fail RMSD">
      <p>
        Hold-versus-fail numeric tiles, ligand RMSD values, and matched-confidence case identifiers
        are not posted on this public leaf.
      </p>
      <section className="pose-box">
        <h2>Dissociation, not score delta</h2>
        <p>
          This route keeps the evidence heading unique to cofolding pose-versus-score work. The
          measurements themselves stay off these pages.
        </p>
      </section>
      <p className="sr-only" data-page-id={EVIDENCE.pageId} data-chrome={EVIDENCE.sharedRunner}>
        {EVIDENCE.pageId} {EVIDENCE.sharedRunner}
      </p>
    </PageShell>
  );
}
