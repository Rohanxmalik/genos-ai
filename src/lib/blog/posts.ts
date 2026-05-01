import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostFrontmatter = {
  title: string
  slug: string
  description: string
  date: string
  readTime: string
  tags: string[]
  heroPrompt?: string
}

export type Post = PostFrontmatter & { content: string }

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function readAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter(
    (f) => f.endsWith('.mdx') && !f.startsWith('_')
  )

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    return { ...(data as PostFrontmatter), content }
  })
}

export function getAllPosts(): Post[] {
  return readAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): Post | null {
  return readAllPosts().find((p) => p.slug === slug) ?? null
}

export function getPostSlugs(): string[] {
  return readAllPosts().map((p) => p.slug)
}
