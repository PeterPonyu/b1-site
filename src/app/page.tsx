import RouteCards from '@/components/RouteCards';
import { PAGE_BINDINGS, SITE } from '@/lib/site';

/** Unique page module for b1-site Home.
 *  pageId b1.page.home · runner b1.runner.home-pose-vs-score
 *  data b1.data.home-object-card · law b1.law.confidence-not-pose
 *  chrome.pose-ledger
 */
const HOME = PAGE_BINDINGS.home;

export default function B1HomePage() {
  return (
    <div className="pose-wrap">
      <p className="pose-kicker">{SITE.kicker}</p>
      <h1 className="pose-title">{SITE.title}</h1>
      <p className="pose-lead">{SITE.lead}</p>

      <section className="pose-box">
        <h2>Physical object</h2>
        <p>{SITE.physicalObject}</p>
        <p>
          The object is the deposited pose, the pocket, and the task — ligand RMSD versus interface
          DockQ versus affinity — not an ECE fold-change.
        </p>
      </section>

      <section className="pose-box">
        <h2>Repository</h2>
        <p>Site source lives on GitHub. Method code is not advertised as a public HTTPS 200.</p>
        <p>
          <a href={SITE.repo}>{SITE.repo}</a>
        </p>
      </section>

      <section className="pose-box">
        <h2>Explore this object</h2>
        <div style={{ marginTop: '0.85rem' }}>
          <RouteCards />
        </div>
      </section>

      <p className="sr-only" data-page-id={HOME.pageId} data-chrome={HOME.sharedRunner}>
        {HOME.pageId} {HOME.sharedRunner}
      </p>
    </div>
  );
}
