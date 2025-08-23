'use client';

import { useMemo, useState } from 'react';
import { projects } from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';

// change these to whatever top-level categories you want to show as sections
const CATEGORY_ORDER = ['Combat', 'Mega Rolls', 'VFX'] as const;
type NamedCategory = typeof CATEGORY_ORDER[number];
type CategoryKey = NamedCategory | 'Misc';

export default function ShowcasePage() {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  // collect unique tags (for the filter dropdown)
  const tags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  // search + tag filtering
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = projects.filter(
      (p) =>
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
    if (selected.length) {
      list = list.filter((p) => selected.every((t) => p.tags.includes(t)));
    }
    return list;
  }, [search, selected]);

  // group filtered projects into named categories, with a Misc fallback
  const groups = useMemo(() => {
    const g: Record<CategoryKey, typeof projects> = {
      Combat: [],
      'Mega Rolls': [],
      VFX: [],
      Misc: [],
    };
    filtered.forEach((p) => {
      const cat = CATEGORY_ORDER.find((c) => p.tags.includes(c)) ?? 'Misc';
      g[cat].push(p);
    });
    return g;
  }, [filtered]);

  const toggleTag = (t: string) =>
    setSelected((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  const clearTags = () => setSelected([]);

  return (
    <main className="container isolate pt-24 sm:pt-32">
      {/* Controls */}
      <Reveal className="relative z-[9999]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
          <input
            className="input w-full sm:max-w-sm"
            placeholder="Search by title or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Tag filter */}
          <div className="filter-wrapper shrink-0">
            <button className="filter-toggle" onClick={() => setOpen((v) => !v)}>
              {selected.length ? `Tags (${selected.length})` : 'Filter by tag'} {open ? '▾' : '▸'}
            </button>

            {open && (
              <div className="filter-panel p-4 w-64 sm:w-56 max-h-[50vh] overflow-auto">
                <div className="flex flex-col gap-3">
                  {tags.map((t) => {
                    const checked = selected.includes(t);
                    return (
                      <label
                        key={t}
                        onClick={() => toggleTag(t)}
                        className={`dd-checkbox ${checked ? 'checked' : ''}`}
                      >
                        <span className="dd-checkbox-box">
                          {checked ? (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
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
                  <button className="btn mt-2" onClick={clearTags}>
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Selected tag chips */}
          {selected.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {selected.map((t) => (
                <span key={t} className="tag chip">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      {/* Sections */}
      <Reveal className="relative z-[1]">
        {filtered.length === 0 ? (
          <div className="opacity-70 py-10 text-center">
            No results. Try a different search or clear tags.
          </div>
        ) : (
          <>
            {/* Render named categories in the order you specified */}
            {CATEGORY_ORDER.map((cat) =>
              groups[cat].length ? (
                <Section key={cat} title={cat}>
                  <CardsGrid items={groups[cat]} />
                </Section>
              ) : null
            )}

            {/* Misc only if there are uncategorized items */}
            {groups.Misc.length ? (
              <Section title="Misc">
                <CardsGrid items={groups.Misc} />
              </Section>
            ) : null}
          </>
        )}
      </Reveal>
    </main>
  );
}

/* ----- helpers/components (inline for convenience) ----- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      {children}
    </section>
  );
}

function CardsGrid({ items }: { items: typeof projects }) {
  return (
    // Only widen THIS area on xl+ so 3×440px + gaps fits; rest of the site stays the same
    <div className="mx-auto w-full xl:max-w-[1800px] px-2">
      <div className="grid gap-6 justify-center [grid-template-columns:repeat(auto-fit,minmax(420px,1fr))]">
        {items.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
