type Props = { tag: string }

export function TagPill({ tag }: Props) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/10 text-xs text-white/50 uppercase tracking-wide">
      {tag}
    </span>
  )
}
