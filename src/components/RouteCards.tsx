import Link from 'next/link';
import { ROUTES } from '@/lib/site';

export default function RouteCards() {
  return (
    <div className="pose-grid">
      {ROUTES.map((route) => (
        <Link key={route.href} href={route.href} className="pose-card">
          <span className="pose-num">{route.number}</span>
          <div>
            <h3>{route.label}</h3>
            <p>{route.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
