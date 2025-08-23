'use client';
import React, { useEffect, useRef } from 'react';
export default function Reveal({ children, className='' }:{ children:React.ReactNode; className?:string }){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = ref.current!;
    const io = new IntersectionObserver(([e])=>{ if(e.isIntersecting) el.classList.add('is-visible'); else el.classList.remove('is-visible'); }, { threshold: .15 });
    io.observe(el); return ()=>io.disconnect();
  },[]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
