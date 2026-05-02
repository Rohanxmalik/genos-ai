import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog/posts'
import CardStack, { type StackCard } from '@/components/ui/card-stack'

export const metadata: Metadata = {
  title: 'Blog — AI Insights & Research | GenosAI',
  description:
    'In-depth articles on AI automation, voice agents, workflow systems, and the broader impact of artificial intelligence on business and society.',
  alternates: { canonical: 'https://genosai.tech/blog' },
  openGraph: {
    title: 'Blog — GenosAI',
    description:
      'In-depth articles on AI automation, voice agents, workflow systems, and the broader impact of AI.',
    url: 'https://genosai.tech/blog',
    type: 'website',
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'GenosAI Blog',
  description:
    'In-depth articles on AI automation, voice agents, workflow systems, and the impact of artificial intelligence on business and society.',
  url: 'https://genosai.tech/blog',
  publisher: {
    '@type': 'Organization',
    name: 'GenosAI',
    url: 'https://genosai.tech',
  },
}

function resolveBlogImage(slug: string): string {
  const exts = ['webp', 'png', 'jpg', 'jpeg']
  for (const ext of exts) {
    const p = path.join(process.cwd(), 'public', 'blog', `${slug}.${ext}`)
    if (fs.existsSync(p)) return `/blog/${slug}.${ext}`
  }
  return ''
}

function formatMeta(date: string, readTime: string) {
  const d = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  return `${d} · ${readTime} read`
}

export default function BlogPage() {
  const posts = getAllPosts()

  const stackCards: StackCard[] = posts.map((post) => ({
    id: post.slug,
    src: resolveBlogImage(post.slug),
    alt: post.title,
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    meta: formatMeta(post.date, post.readTime),
    tags: post.tags,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="min-h-screen bg-bg-dark text-text-on-dark px-6 py-24 max-w-4xl mx-auto">
        <nav className="text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white/70 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">Blog</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Insights, ideas, and research
        </h1>

        <p className="text-white/60 text-lg mb-8 sm:mb-16 max-w-2xl">
          Articles on AI automation, agentic systems, voice AI, and the bigger
          questions AI is forcing businesses and societies to reckon with.
        </p>

        {posts.length === 0 ? (
          <p className="text-white/40">No posts published yet.</p>
        ) : (
          <section className="py-4 sm:py-12 mb-6 sm:mb-16">
            <CardStack cards={stackCards} />
          </section>
        )}

        <div className="border border-white/10 rounded-xl p-8 text-center mt-20">
          <h2 className="text-2xl font-display mb-3">
            Want AI working in your business?
          </h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your workflows, identify
            automation opportunities, and give you a transparent quote — no
            commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/strategy-call"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Book Free Strategy Call
            </Link>
            <Link
              href="/services"
              className="inline-block border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:border-white/40 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
