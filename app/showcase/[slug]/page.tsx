// app/showcase/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../lib/projects';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ShowcaseItemPage({ params }: any) {
  const { slug } = typeof params?.then === 'function' ? await params : params;

  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const { title, description, media, tags = [] } = project;

  const isLocalVideo =
    media.source.startsWith('/') || /\.(mp4|webm)$/i.test(media.source);

  const m = media.source.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
  const ytId = m?.[1] ?? null;
  const ytEmbed = ytId ? `https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1` : null;

  return (
    <main className="container pt-28 sm:pt-32 showcase-detail">
      <Link href="/showcase" className="return-btn inline-flex mb-4" aria-label="Return to Showcase">
        ← Return
      </Link>

      <h1 className="font-display text-3xl md:text-4xl mb-2">{title}</h1>
      <p className="opacity-80">{description}</p>

      {/* Wider media shell */}
      <div className="media-shell mt-6">
        {isLocalVideo ? (
          <div className="aspect-video">
            <video
              className="w-full h-full block"
              controls
              playsInline
              poster={media.poster}
              src={media.source}
            />
          </div>
        ) : ytEmbed ? (
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={ytEmbed}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="p-6">Unsupported media source.</p>
        )}
      </div>

      {tags.length > 0 && (
        <div className="mt-4 flex gap-2 flex-wrap">
          {tags.map(t => (
            <span key={t} className="tag chip">#{t}</span>
          ))}
        </div>
      )}
    </main>
  );
}
