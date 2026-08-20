import PageShell from '@/components/PageShell';
import { METHODS_SUMMARY, PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Methods.
 *  pageId b1.page.methods · runner b1.runner.methods-rnp-protocol
 *  data b1.data.rnp-tanimoto-dockq · law b1.law.task-split-pose-affinity
 *  shared chrome.page-shell
 */
const METHODS = PAGE_BINDINGS.methods;

export default function B1MethodsPage() {
  return (
    <PageShell title="Methods" kicker="Runs N' Poses protocol">
      <p>{METHODS_SUMMARY}</p>

      <section className="rounded-2xl border border-slate-200 bg-white/80 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Task split</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Ligand RMSD for pose — not collapsed into a single ECE fold-change</li>
          <li>Interface quality via DockQ; affinity tasks held separate</li>
          <li>Ligand similarity via Tanimoto to training analogs</li>
          <li>Pocket occupancy audited post-cutoff only on scoped panels not hosted here</li>
        </ul>
      </section>

      <p className="text-sm text-slate-500">
        Reproducibility: public method code is not published yet. Archive DOI is in the header when
        the chip is enabled.
      </p>

      <p className="sr-only" data-page-id={METHODS.pageId}>
        {METHODS.pageId}
      </p>
    </PageShell>
  );
}
