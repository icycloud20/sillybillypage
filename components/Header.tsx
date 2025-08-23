'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header(){
  const pathname = usePathname();
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY||0;
      const s = Math.max(0.85, 1 - y / 800); // gentler shrink, min 0.85x
      setScale(s);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHome = pathname === '/';

  return (
    <nav className="nav-wrapper" style={{ transform: `translateX(-50%) scale(${scale})` }}>
      {/* Primary group */}
      <a href={onHome ? '#home' : '/#home'} className={`nav-item ${onHome ? 'active' : ''}`}>Home</a>
      <Link href="/showcase" className={`nav-item ${pathname?.startsWith('/showcase') ? 'active' : ''}`}>Showcase</Link>
      <span className="nav-divider" />
      {/* Secondary group */}
      <a href={onHome ? '#pricing' : '/#pricing'} className="nav-item pricing">Pricing</a>
      <a href={onHome ? '#faq' : '/#faq'} className="nav-item">FAQ</a>
      <a href={onHome ? '#contact' : '/#contact'} className="nav-item">Contact</a>
    </nav>
  );
}
