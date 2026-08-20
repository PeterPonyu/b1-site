import PageShell from '@/components/PageShell';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Results.
 *  pageId b1.page.results · runner b1.runner.results-case-cards
 *  data b1.data.results-withheld · law b1.law.analog-absence-rmsd
 *  shared chrome.page-shell
 */
const RESULTS = PAGE_BINDINGS.results;

export default function B1ResultsPage() {
  return (
    <PageShell title="Results" kicker="Pose versus reported score">
      <p>
        Pose-versus-score panels, ligand case cards, and supporting figures are not hosted on this
        Pages leaf.
      </p>
      <p className="text-sm text-slate-500">
        When an article DOI exists, that record is the place for figures. Until then the Archive
        chip is the only public pointer.
      </p>
      <p className="sr-only" data-page-id={RESULTS.pageId}>
        {RESULTS.pageId}
      </p>
    </PageShell>
  );
}
