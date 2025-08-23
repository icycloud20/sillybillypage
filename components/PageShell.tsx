'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
export default function PageShell({children}:{children:React.ReactNode}){
  const pathname = usePathname();
  const [key, setKey] = React.useState(pathname);
  React.useEffect(()=>setKey(pathname),[pathname]);
  return <div key={key} className="page-enter page-enter-active">{children}</div>;
}
