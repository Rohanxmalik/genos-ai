'use client'

import { usePathname } from 'next/navigation'
import { SmokeBackground } from '@/components/ui/spooky-smoke-animation'

export function RouteBackground() {
  const pathname = usePathname()

  if (pathname === '/' || pathname === '/strategy-call') return null

  return (
    <>
      <style>{`
        body { background: #000 !important; }
        main { background: transparent !important; position: relative; z-index: 10; }
      `}</style>
      <div className="fixed top-0 left-0 z-0 w-screen h-screen overflow-hidden pointer-events-none">
        <SmokeBackground smokeColor="#7C3AED" />
      </div>
      <div className="fixed inset-0 z-1 bg-black/30 pointer-events-none" />
      <div className="fixed inset-0 z-1 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
    </>
  )
}
