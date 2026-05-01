import Link from 'next/link'
import { HeroImage } from './HeroImage'
import { TagPill } from './TagPill'
import type { Post } from '@/lib/blog/posts'

type Props = { post: Post }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
        <HeroImage slug={post.slug} alt={post.title} />
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
          <h3 className="font-display text-xl mb-2 text-white group-hover:text-white/90 transition-colors leading-snug">
            {post.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
