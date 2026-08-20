import PageShell from '@/components/PageShell';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Evidence.
 *  pageId b1.page.evidence · runner b1.runner.evidence-hold-fail
 *  data b1.data.evidence-withheld · law b1.law.matched-confidence-opposite-pose
 *  shared chrome.page-shell
 */
const EVIDENCE = PAGE_BINDINGS.evidence;

export default function B1EvidencePage() {
  return (
    <PageShell title="Evidence" kicker="Hold versus fail RMSD">
      <p>
        Hold-versus-fail numeric tiles, ligand RMSD values, and matched-confidence case identifiers
        are not posted on this public leaf.
      </p>
      <section className="rounded-2xl border border-slate-200 bg-white/80 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Dissociation, not score delta</h2>
        <p className="mt-2 text-slate-700">
          This route keeps the evidence heading unique to cofolding pose-versus-score work. The
          measurements themselves stay off these pages.
        </p>
      </section>
      <p className="sr-only" data-page-id={EVIDENCE.pageId}>
        {EVIDENCE.pageId}
      </p>
    </PageShell>
  );
}
