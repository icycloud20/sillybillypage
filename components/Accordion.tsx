'use client';
import React, {useState, useRef, useEffect} from 'react';
export function AccordionItem({title, children}:{title:string; children:React.ReactNode}){
  const [open,setOpen] = useState(false);
  const inner = useRef<HTMLDivElement>(null);
  const [h,setH] = useState(0);
  useEffect(()=>{ if(open) setH(inner.current?.scrollHeight||0); }, [open]);
  return (
    <div className="work-card overflow-hidden">
      <button onClick={()=>setOpen(v=>!v)} className="w-full text-left px-5 py-4 rounded-xl flex items-center justify-between">
        <span className="font-medium">{title}</span>
        <span className="opacity-70">{open?'▾':'▸'}</span>
      </button>
      <div style={{height: open? h : 0}} className="transition-[height] duration-300 ease-out">
        <div ref={inner} className="px-5 pb-5 text-gray-300">{children}</div>
      </div>
    </div>
  );
}
