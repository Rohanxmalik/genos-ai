import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Immersive 3D Web Experiences',
  description:
    'GenosAI builds scroll-driven 3D websites, WebGL product configurators, and Three.js animations that make brands unforgettable. Pricing $3,000–$10,000. Delivery 2–4 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/3d-web-experiences' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tools do you use for 3D websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build with Three.js, React Three Fiber, GSAP, and WebGL. For scroll-driven animation we use GSAP ScrollTrigger. For 3D models we accept GLTF/GLB files or create them in Blender.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do 3D websites work on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build with progressive enhancement — full 3D on desktop, graceful fallback to optimised 2D animations on mobile. Performance budgets are set upfront and tested on real devices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a 3D website take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A scroll-animated landing page ships in 2 weeks. A full multi-page 3D site with custom scenes and interactions takes 3–4 weeks. Timeline depends on asset availability and revision rounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will it affect page load speed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We optimise every 3D asset — compressed textures, lazy-loaded scenes, LOD switching. Most builds hit 90+ Lighthouse scores. We share performance reports before handoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a 3D website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Animated landing pages start at $3,000. Interactive 3D product experiences run $5,000–$7,500. Full multi-page 3D sites with custom WebGL scenes are $7,500–$10,000.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: '3D Web Development',
  name: 'Immersive 3D Web Experiences',
  description:
    'Scroll-driven 3D environments, interactive product configurators, and WebGL-powered visuals built with Three.js and GSAP. Pricing $3,000–$10,000. Delivery 2–4 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$3,000–$10,000',
    },
  },
  url: 'https://genosai.tech/services/3d-web-experiences',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function ThreeDWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-bg-dark text-text-on-dark px-6 py-24 max-w-4xl mx-auto">
        <nav className="text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-white/70">3D Web Experiences</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-mono text-violet-400/70 tracking-wide">Three.js · WebGL · GSAP</span>
          <span className="text-white/30">·</span>
          <span className="text-violet-400 font-medium text-sm">$3,000–$10,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">2–4 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Immersive 3D Web Experiences
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds scroll-driven 3D environments and WebGL-powered visuals
          that stop visitors mid-scroll. Not templates. Not plugins. Custom-crafted
          scenes that make your brand impossible to forget.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Scroll-driven 3D landing pages</strong> — GSAP ScrollTrigger animations, parallax depth layers, and scene transitions tied to scroll position.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Interactive product configurators</strong> — Real-time 3D product viewers where users rotate, zoom, and customise colour/material in-browser.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">WebGL hero sections</strong> — Particle systems, fluid simulations, and shader-based visuals that replace static hero images.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Full 3D multi-page sites</strong> — Immersive navigation flows, custom 3D environments per section, and cinematic page transitions.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">3D portfolio &amp; showcase sites</strong> — Award-worthy digital presences for agencies, studios, and product companies.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">Right fit if you:</p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Want a website that wins awards and gets shared on design communities</li>
            <li>Sell a premium physical or digital product that deserves a premium showcase</li>
            <li>Run a creative agency, studio, or brand where design is your USP</li>
            <li>Are launching a product and need a landing page that converts at the top of the funnel</li>
            <li>Have tried template builders and want something that can't be replicated</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Animated 3D Landing Page</p>
                <p className="text-white/40 text-sm">GSAP scroll animations, WebGL hero, single page</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$3,000–$5,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Interactive 3D Product Experience</p>
                <p className="text-white/40 text-sm">Real-time configurator, WebGL renderer, model integration</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$5,000–$7,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full Immersive 3D Website</p>
                <p className="text-white/40 text-sm">Multi-page, custom 3D scenes, cinematic transitions</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$7,500–$10,000</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="font-medium mb-2">{faq.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border border-white/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-display mb-3">Ready to build something unforgettable?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We scope your project, share references,
            and give you a firm quote — no commitment required.
          </p>
          <Link
            href="/strategy-call"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </main>
    </>
  )
}
