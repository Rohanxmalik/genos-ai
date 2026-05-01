import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Analytics Dashboards',
  description:
    'GenosAI builds real-time analytics dashboards and internal data tools with role-based access, live feeds, and clean UI. Pricing $2,000–$8,000. Delivery 2–4 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/custom-dashboards' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What data sources can you connect to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We connect to PostgreSQL, MySQL, MongoDB, Supabase, Firebase, Google Sheets, REST APIs, GraphQL APIs, Stripe, HubSpot, and most SaaS tools with an API. If your data is accessible, we can visualise it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the dashboard update in real-time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use WebSockets or server-sent events for live data. Polling intervals are configurable. Real-time dashboards are standard for our multi-role tier and above.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build authentication and user roles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Role-based access control (RBAC) is included in the multi-role dashboard tier — different users see different data. We integrate with your existing auth (Google OAuth, SSO, magic link) or build standalone auth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a dashboard take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single-view dashboard with static data ships in 1–2 weeks. Multi-role dashboards with live data take 3–4 weeks. Complex analytics platforms with custom data pipelines take 4–6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a custom dashboard cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-view dashboards start at $2,000. Multi-role dashboards with real-time data run $3,500–$6,000. Full analytics platforms with custom data pipelines are $6,000–$8,000.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Dashboard Development',
  name: 'Custom Analytics Dashboards',
  description:
    'Purpose-built analytics dashboards with real-time data feeds, role-based access, and clean UI. Connects to any database or API. Pricing $2,000–$8,000. Delivery 2–4 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$2,000–$8,000',
    },
  },
  url: 'https://genosai.tech/services/custom-dashboards',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function CustomDashboardsPage() {
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
          <span className="text-white/70">Custom Dashboards</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-mono text-violet-400/70 tracking-wide">Real-time · Internal Tools · Data Viz</span>
          <span className="text-white/30">·</span>
          <span className="text-violet-400 font-medium text-sm">$2,000–$8,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">2–4 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Custom Analytics Dashboards
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds purpose-built dashboards that surface the metrics that
          matter — live data, role-based views, and clean UI that turns raw numbers
          into decisions your team can act on instantly.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Operations dashboards</strong> — Live KPI tracking, pipeline visibility, and team performance metrics in one place.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Sales &amp; revenue dashboards</strong> — MRR, pipeline health, conversion rates, and rep performance synced from your CRM.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Customer health dashboards</strong> — Churn signals, product usage, NPS trends, and support ticket volume in a single view.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Internal admin panels</strong> — CRUD interfaces, user management, and workflow tooling for your ops and support teams.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Client-facing reporting portals</strong> — White-labelled dashboards your clients log into to see their own data in real-time.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">Right fit if you:</p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Are still pulling reports manually from spreadsheets or multiple tools</li>
            <li>Need different teams to see different data without sharing everything</li>
            <li>Want clients or stakeholders to access live data without emailing CSVs</li>
            <li>Have data in a database or API that needs a usable front-end</li>
            <li>Run a SaaS product and need an admin panel or analytics layer</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Single-View Dashboard</p>
                <p className="text-white/40 text-sm">One data source, static charts, no auth required</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,000–$3,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Multi-Role Live Dashboard</p>
                <p className="text-white/40 text-sm">RBAC, real-time data feeds, multiple views, filters</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$3,500–$6,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full Analytics Platform</p>
                <p className="text-white/40 text-sm">Custom data pipelines, real-time feeds, export, multi-tenant</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$6,000–$8,000</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to replace your spreadsheets?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We map your data sources, define the metrics
            that matter, and give you a firm quote — no commitment required.
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
