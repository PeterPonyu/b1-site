import PageShell from '@/components/PageShell';
import { METHODS_SUMMARY, PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Protocol. chrome.pose-ledger */
const METHODS = PAGE_BINDINGS.methods;

export default function B1MethodsPage() {
  return (
    <PageShell title="Protocol" kicker="Runs N' Poses protocol">
      <p>{METHODS_SUMMARY}</p>
      <section className="pose-box">
        <h2>Task split</h2>
        <ul>
          <li>Ligand RMSD for pose — not collapsed into a single ECE fold-change</li>
          <li>Interface quality via DockQ; affinity tasks held separate</li>
          <li>Ligand similarity via Tanimoto to training analogs</li>
          <li>Pocket occupancy audited post-cutoff only on scoped panels not hosted here</li>
        </ul>
      </section>
      <p>
        Reproducibility: public method code is not published yet. Archive DOI is in the header when
        the chip is enabled.
      </p>
      <p className="sr-only" data-page-id={METHODS.pageId} data-chrome={METHODS.sharedRunner}>
        {METHODS.pageId} {METHODS.sharedRunner}
      </p>
    </PageShell>
  );
}
