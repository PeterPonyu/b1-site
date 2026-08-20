import RouteCards from '@/components/RouteCards';
import { PAGE_BINDINGS, SITE } from '@/lib/site';

/** Unique page module for b1-site Home.
 *  pageId b1.page.home · runner b1.runner.home-pose-vs-score
 *  data b1.data.home-object-card · law b1.law.confidence-not-pose
 *  shared chrome.page-shell
 */
const HOME = PAGE_BINDINGS.home;

export default function B1HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
        {SITE.kicker}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{SITE.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-700">{SITE.lead}</p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Physical object
        </h2>
        <p className="mt-2 text-slate-800">{SITE.physicalObject}</p>
        <p className="mt-3 text-sm text-slate-600">
          The object is the deposited pose, the pocket, and the task — ligand RMSD versus interface
          DockQ versus affinity — not an ECE fold-change.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Repository
        </h2>
        <p className="mt-2 text-slate-700">
          Site source lives on GitHub. Method code is not advertised as a public HTTPS 200.
        </p>
        <p className="mt-3">
          <a
            href={SITE.repo}
            className="font-medium text-teal-700 underline decoration-teal-200 underline-offset-2 hover:text-teal-800"
          >
            {SITE.repo}
          </a>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Pages
        </h2>
        <RouteCards />
      </section>

      <p className="sr-only" data-page-id={HOME.pageId}>
        {HOME.pageId}
      </p>
    </div>
  );
}
