import Image from 'next/image'
import fs from 'fs'
import path from 'path'

type Props = {
  slug: string
  alt: string
  priority?: boolean
}

function imageExists(slug: string): string | null {
  const exts = ['webp', 'png', 'jpg', 'jpeg']
  for (const ext of exts) {
    const filePath = path.join(process.cwd(), 'public', 'blog', `${slug}.${ext}`)
    if (fs.existsSync(filePath)) return `/blog/${slug}.${ext}`
  }
  return null
}

export function HeroImage({ slug, alt, priority = false }: Props) {
  const src = imageExists(slug)

  if (!src) {
    return (
      <div className="relative w-full aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-violet-950/40 via-black to-blue-950/30 flex items-end p-6">
        <span className="text-white/20 text-sm font-medium uppercase tracking-widest">
          {alt}
        </span>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl border border-white/10 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, 896px"
      />
    </div>
  )
}
