import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/blog/posts'
import { HeroImage } from '@/components/blog/HeroImage'
import { PostBody } from '@/components/blog/PostBody'
import { TagPill } from '@/components/blog/TagPill'

const BASE_URL = 'https://genosai.tech'

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }

  return {
    title: `${post.title} | GenosAI`,
    description: post.description,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: `${BASE_URL}/blog/${slug}-og.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/blog/${slug}-og.png`],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${BASE_URL}/blog/${slug}.webp`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'GenosAI',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GenosAI',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-bg-dark text-text-on-dark px-6 py-24 max-w-4xl mx-auto">
        <nav className="text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white/70 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white/70 transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">{post.title}</span>
        </nav>

        <div className="flex items-center gap-3 text-xs text-white/40 mb-5">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-white/60 text-lg mb-8 max-w-2xl leading-relaxed">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>

        <HeroImage slug={post.slug} alt={post.title} priority />

        <PostBody content={post.content} />

        <div className="border border-white/10 rounded-xl p-8 text-center mt-16">
          <h2 className="text-2xl font-display mb-3">
            Ready to put AI to work?
          </h2>
          <p className="text-white/50 mb-6">
            Book a free 30-minute strategy call. We audit your workflows,
            identify your top automation opportunities, and give you a
            transparent quote — no commitment required.
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
