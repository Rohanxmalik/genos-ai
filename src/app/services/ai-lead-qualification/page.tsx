import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Lead Qualification Agency',
  description:
    'GenosAI builds AI lead qualification systems that score, qualify, and route inbound leads in real-time. Cut response times from hours to seconds. Pricing $800–$3,500. Delivery 1–2 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/ai-lead-qualification' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does AI lead qualification from GenosAI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI lead qualification systems at GenosAI range from $800 for a basic scoring and routing setup to $3,500 for a full system with AI chat qualification, dynamic scoring, CRM integration, and real-time sales alerts. Most clients building a complete inbound qualification pipeline land between $1,500–$2,500.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI lead qualification work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI AI lead qualification systems intercept inbound leads the moment they submit a form or start a chat. The AI asks qualification questions in real-time, scores the lead based on your ideal customer profile, and either routes them to a sales rep immediately or adds them to the appropriate nurture sequence — all within seconds of the initial contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the system integrate with my existing CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GenosAI lead qualification systems integrate with HubSpot, Salesforce, Pipedrive, and virtually any CRM via API. Lead scores, qualification answers, and routing decisions sync automatically so your sales team sees everything in one place.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast does the AI qualify leads compared to human SDRs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI AI systems qualify leads in seconds — 24/7, including nights and weekends. The average human SDR responds to inbound leads in 2–4 hours. Speed to lead is one of the strongest predictors of conversion: leads contacted within 5 minutes are 9x more likely to convert. Our systems close that gap completely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What results can I expect from GenosAI lead qualification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI lead qualification clients see 47x faster response times, 35% higher conversion rates, and significant reduction in time your sales team spends on unqualified calls. One client\'s sales team went from spending 60% of their time on unqualified leads to 90% of their time on pre-qualified, high-intent prospects.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Lead Qualification',
  name: 'AI Lead Qualification',
  description:
    'GenosAI builds automated lead qualification systems that score, qualify, and route inbound prospects in real-time, cutting response times from hours to seconds and boosting conversion rates. Pricing $800–$3,500. Delivery 1–2 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$800–$3,500',
    },
  },
  url: 'https://genosai.tech/services/ai-lead-qualification',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function AILeadQualificationPage() {
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
          <span className="text-white/70">AI Lead Qualification</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-violet-400 font-medium text-sm">$800–$3,500</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">1–2 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          AI Lead Qualification
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds AI systems that qualify inbound leads in real-time —
          scoring them, routing the best ones to your sales team instantly, and
          adding the rest to nurture sequences automatically.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Real-time lead scoring</strong> — Score every inbound lead instantly based on company size, role, intent signals, and your ideal customer profile criteria.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">AI qualification chatbots</strong> — Engage inbound leads in conversation the moment they hit your site, ask qualification questions, and route them based on answers.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Instant sales routing</strong> — Push hot leads to your sales team via Slack, email, or CRM task the moment they qualify — while they're still on your site.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Automated disqualification flows</strong> — Route unqualified leads to self-service resources instead of wasting sales time on poor-fit prospects.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Lead enrichment</strong> — Automatically enrich lead records with company data, LinkedIn profiles, and intent signals before they reach your sales team.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">
            GenosAI lead qualification is the right fit if your business:
          </p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Gets inbound leads but can't respond fast enough</li>
            <li>Has sales reps wasting time on unqualified calls</li>
            <li>Wants to qualify leads 24/7 including nights and weekends</li>
            <li>Needs a consistent qualification process that doesn't depend on individual reps</li>
            <li>Is in SaaS, consulting, real estate, or any high-volume inbound business</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Basic Lead Scoring</p>
                <p className="text-white/40 text-sm">Form-based scoring, CRM routing, sales alerts</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$800–$1,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">AI Qualification System</p>
                <p className="text-white/40 text-sm">AI chat qualification, dynamic scoring, instant routing</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$1,500–$2,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full Pipeline Intelligence</p>
                <p className="text-white/40 text-sm">Enrichment, multi-channel scoring, analytics, CRM sync</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,500–$3,500</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to qualify leads automatically?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your current lead flow, identify
            where you're losing qualified prospects, and give you a firm quote —
            no commitment required.
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
