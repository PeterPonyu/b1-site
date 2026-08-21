import PageShell from '@/components/PageShell';
import { PAGE_BINDINGS } from '@/lib/site';

/** Unique page module for b1-site Pose.
 *  chrome.pose-ledger
 */
const RESULTS = PAGE_BINDINGS.results;

export default function B1ResultsPage() {
  return (
    <PageShell title="Pose" kicker="Pose versus reported score">
      <p>
        Pose-versus-score panels, ligand case cards, and supporting figures are not hosted on this
        Pages leaf.
      </p>
      <p>
        When an article DOI exists, that record is the place for figures. Until then the Archive
        chip is the only public pointer.
      </p>
      <p className="sr-only" data-page-id={RESULTS.pageId} data-chrome={RESULTS.sharedRunner}>
        {RESULTS.pageId} {RESULTS.sharedRunner}
      </p>
    </PageShell>
  );
}
