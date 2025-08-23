'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  media: { source: string; poster?: string };
};

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, description, media, tags } = project;

  const isVideo = /\.(mp4|webm)$/i.test(media.source);
  const [autoPoster, setAutoPoster] = useState<string | null>(null);
  const posterToUse = media.poster || autoPoster || null;

  // Generate a poster for local videos if none provided
  useEffect(() => {
    if (!isVideo || media.poster) return;
    let cancelled = false;

    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.preload = 'auto';
    video.src = media.source;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const cleanup = () => {
      try {
        video.pause();
        video.src = '';
        video.removeAttribute('src');
        video.load();
      } catch {}
    };

    const onLoaded = () => {
      const t =
        Number.isFinite(video.duration) && video.duration > 0
          ? Math.min(3, video.duration * 0.15)
          : 1;

      const onSeeked = () => {
        try {
          canvas.width = video.videoWidth || 1280;
          canvas.height = Math.round(canvas.width * 9 / 16);
          ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
          if (!cancelled) setAutoPoster(canvas.toDataURL('image/jpeg', 0.72));
        } catch {} finally {
          cleanup();
        }
      };

      video.addEventListener('seeked', onSeeked, { once: true });
      setTimeout(() => (video.currentTime = t), 30);
    };

    video.addEventListener('loadedmetadata', onLoaded, { once: true });
    video.addEventListener('error', cleanup, { once: true });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [isVideo, media.poster, media.source]);

  return (
    <Link
      href={`/showcase/${slug}`}
      className="showcase-card w-full max-w-[500px] block rounded-2xl border border-white/10 bg-black/30 hover:scale-[1.01] transition duration-200 overflow-hidden"
    >
      {/* Maintain 16:9 card shape */}
      <div className="relative w-full">
        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
          {posterToUse ? (
            <Image
              className="showcase-thumb"
              src={posterToUse}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          ) : (
            <div className="showcase-thumb absolute inset-0" style={{ background: 'linear-gradient(180deg,#222,#141414)' }} />
          )}
        </div>

        <div className="showcase-overlay">
          <div className="min-w-0">
            <h3 className="font-semibold text-xl mb-1 truncate">{title}</h3>
            <p className="opacity-80 text-sm truncate">{description}</p>

            <div className="mt-3 flex gap-2 flex-wrap">
              {tags.map(t => (
                <span key={t} className="tag chip">#{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
