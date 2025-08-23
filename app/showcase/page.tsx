'use client';

import { useMemo, useState } from 'react';
import { projects } from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';

export default function ShowcasePage() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const tags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = projects.filter(
      p =>
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
    );
    if (selected.length) list = list.filter(p => selected.every(t => p.tags.includes(t)));
    return list;
  }, [search, selected]);

  const toggleTag = (t: string) =>
    setSelected(prev => (prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]));
  const clearTags = () => setSelected([]);

  return (
    <main className="container isolate pt-24 sm:pt-32">
      <Reveal className="relative z-[9999]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          <input
            className="input w-full sm:max-w-sm"
            placeholder="Search by title or tag..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className="filter-wrapper shrink-0">
            <button className="filter-toggle" onClick={() => setOpen(v => !v)}>
              {selected.length ? `Tags (${selected.length})` : 'Filter by tag'} {open ? '▾' : '▸'}
            </button>

            {open && (
              <div className="filter-panel p-4 w-64 sm:w-56 max-h-[50vh] overflow-auto">
                <div className="flex flex-col gap-3">
                  {tags.map(t => {
                    const checked = selected.includes(t);
                    return (
                      <label
                        key={t}
                        onClick={() => toggleTag(t)}
                        className={`dd-checkbox ${checked ? 'checked' : ''}`}
                      >
                        <span className="dd-checkbox-box">
                          {checked ? (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" />
                          )}
                        </span>
                        <span>{t}</span>
                      </label>
                    );
                  })}
                  <button className="btn mt-2" onClick={clearTags}>Clear</button>
                </div>
              </div>
            )}
          </div>

          {selected.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {selected.map(t => (
                <span key={t} className="tag chip">#{t}</span>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      <Reveal className="relative z-[1]">
        {filtered.length === 0 ? (
          <div className="opacity-70 py-10 text-center">No results. Try a different search or clear tags.</div>
        ) : (
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
            {filtered.map(p => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </Reveal>
    </main>
  );
}
