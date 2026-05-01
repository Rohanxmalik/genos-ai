import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Full-Stack Web Applications',
  description:
    'GenosAI builds production-grade full-stack web apps — MVPs, SaaS products, and internal tools with auth, APIs, and deployment. Pricing $5,000–$20,000+. Delivery 4–8 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/fullstack-web-apps' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tech stack do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We default to Next.js (App Router), TypeScript, PostgreSQL via Supabase, and Vercel for deployment. We adapt to your existing stack if needed — Node/Express, Python/FastAPI, AWS, or GCP.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle authentication and payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Auth via Clerk or Supabase Auth (email, Google, SSO). Payments via Stripe — subscriptions, one-time charges, usage-based billing. Both are included in production tier and above.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build on top of an existing codebase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We audit your existing code first, identify what to keep and what to refactor, and work within your repo. We do not require greenfield projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the code when the project is done?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do — fully. All source code is yours from day one. We transfer the repo, infrastructure credentials, and all assets on handoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a full-stack web app cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MVPs start at $5,000. Production web apps with auth, payments, and admin panels run $8,000–$15,000. Enterprise multi-tenant platforms start at $15,000.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Full-Stack Web Development',
  name: 'Full-Stack Web Applications',
  description:
    'Production-grade web apps built for scale — auth, APIs, databases, and deployment included. MVPs to enterprise platforms. Pricing $5,000–$20,000+. Delivery 4–8 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$5,000–$20,000+',
    },
  },
  url: 'https://genosai.tech/services/fullstack-web-apps',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function FullStackWebAppsPage() {
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
          <span className="text-white/70">Full-Stack Web Apps</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-mono text-violet-400/70 tracking-wide">Next.js · Node · PostgreSQL</span>
          <span className="text-white/30">·</span>
          <span className="text-violet-400 font-medium text-sm">$5,000–$20,000+</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">4–8 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Full-Stack Web Applications
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds production-grade web apps built for scale — auth, APIs,
          databases, and deployment all included. From MVPs shipped in weeks to
          enterprise platforms built to last years.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">SaaS MVPs</strong> — Core product loop, auth, billing, and onboarding. Enough to validate, acquire users, and raise a round.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Internal tools &amp; portals</strong> — Employee portals, vendor management systems, and workflow tools that replace Notion hacks and spreadsheets.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">API-backed web platforms</strong> — REST or GraphQL APIs with documented endpoints, rate limiting, and webhook support.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Multi-tenant SaaS platforms</strong> — Org-level isolation, team management, custom roles, and usage-based billing at scale.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Marketplace &amp; directory apps</strong> — Two-sided platforms with listings, search, booking, payments, and review systems.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">Right fit if you:</p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Have a validated idea and need an MVP built fast without technical debt</li>
            <li>Are running manual processes that need a proper software layer</li>
            <li>Have an existing product that needs new features or a full rebuild</li>
            <li>Need a technical co-founder equivalent without the equity conversation</li>
            <li>Want code you own and can hand to an in-house team later</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">MVP / Proof of Concept</p>
                <p className="text-white/40 text-sm">Core features, basic auth, deployment, documented handoff</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$5,000–$8,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Production Web App</p>
                <p className="text-white/40 text-sm">Full auth, payments, admin panel, CI/CD, monitoring</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$8,000–$15,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Enterprise Platform</p>
                <p className="text-white/40 text-sm">Multi-tenant, advanced RBAC, custom integrations, SLA</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$15,000–$20,000+</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to build your product?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We review your requirements, scope the build,
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
