'use client';
import { useEffect, useState } from 'react';

type Props = {
  /** The label shown on the pill button in the footer (e.g., "Discord", "Email") */
  label: string;
  /** Title text inside the popup (e.g., "Discord" or "Email") */
  headline: string;
  /** The main value to show (e.g., "@duckydev" or "you@domain.com") */
  display: string;
  /** What to copy to clipboard when user clicks Copy */
  copyValue?: string;
  /** Optional external link for a “Link” button (e.g., Discord profile URL).
      If omitted, only Copy/Close are shown. */
  linkUrl?: string;
  /** Label for the link button (defaults to "Link") */
  linkLabel?: string;
};

export default function ContactButton({
  label,
  headline,
  display,
  copyValue,
  linkUrl,
  linkLabel = 'Link',
}: Props) {
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? display);
    } catch {}
  };

  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>{label}</button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="work-card p-5 rounded-2xl max-w-sm w-[92%] text-center"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${headline} contact`}
          >
            <p className="text-lg font-semibold mb-1">{headline}</p>
            <p className="font-mono text-emerald-300 break-all">{display}</p>

            <div className="mt-4 flex items-center justify-center gap-2">
              {linkUrl && (
                <a className="btn" href={linkUrl} target="_blank" rel="noreferrer">
                  {linkLabel}
                </a>
              )}
              <button className="btn" onClick={copy}>Copy</button>
              <button className="btn" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
