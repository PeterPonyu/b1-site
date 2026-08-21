'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { badgeEntries, isExternalHref } from '@/lib/badges';
import { ROUTES, SITE } from '@/lib/site';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname() || '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pose-head" data-chrome="pose-ledger">
      <div className="pose-head-row">
        <Link href="/" className="pose-mark" onClick={() => setMenuOpen(false)}>
          <span className="pose-mark-box" aria-hidden="true">
            {SITE.mark}
          </span>
          <span>{SITE.shortName}</span>
        </Link>

        <nav className="pose-nav" aria-label="Pose ledger">
          {ROUTES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? 'is-on' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pose-chips">
          {SITE.externalLeaves.map((item) => (
            <a key={item.href} href={item.href} className="pose-chip">
              {item.label}
            </a>
          ))}
          {badgeEntries().map(({ key, badge }) =>
            badge.enabled && badge.href ? (
              <a
                key={key}
                href={badge.href}
                className="pose-chip"
                {...(isExternalHref(badge.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {badge.label}
              </a>
            ) : (
              <span key={key} className="pose-chip-off" aria-disabled="true" title={badge.disabledReason}>
                {badge.label}
              </span>
            ),
          )}
        </div>

        <button
          type="button"
          className="pose-menu"
          aria-expanded={menuOpen}
          aria-controls="pose-mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="pose-mobile-nav" className={menuOpen ? 'pose-mobile is-open' : 'pose-mobile'}>
        <nav aria-label="Mobile pose ledger">
          {ROUTES.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          {SITE.externalLeaves.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
