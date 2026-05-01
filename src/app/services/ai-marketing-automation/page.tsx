import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Marketing Automation Agency',
  description:
    'GenosAI builds AI-powered marketing automation with email sequences, lead scoring, and optimized customer touchpoints. Pricing $1,000–$4,000. Delivery 1–3 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/ai-marketing-automation' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does AI marketing automation from GenosAI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI marketing automation at GenosAI ranges from $1,000 for a basic email nurture sequence to $4,000 for a full multi-channel system with intelligent lead scoring, behavioral triggers, and CRM sync. Most clients building a complete inbound nurture system land between $2,000–$3,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What email platforms does GenosAI integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI builds marketing automation on top of your existing email platform — whether that\'s ActiveCampaign, Klaviyo, Mailchimp, HubSpot, or custom SMTP setups. We also integrate with your CRM so lead scores and engagement data sync automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is AI marketing automation different from standard email marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard email marketing sends the same message to everyone on a schedule. GenosAI\'s AI marketing automation scores leads based on behavior, personalizes messaging based on engagement patterns, and triggers sequences based on specific actions — so the right message reaches the right person at the right time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GenosAI build AI-generated email content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GenosAI can build systems that generate personalized email content using AI based on each lead\'s industry, behavior, and funnel stage. This goes beyond variable substitution — the AI crafts genuinely personalized messaging that converts better than template-based approaches.',
      },
    },
    {
      '@type': 'Question',
      name: 'What results can I expect from GenosAI marketing automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI marketing automation clients typically see 35% higher conversion rates on lead capture forms, 3–5x better email open rates through behavioral triggers vs. broadcast campaigns, and complete elimination of manual follow-up tasks. One SaaS client went from 8% trial-to-paid conversion to 14% after deploying a GenosAI nurture sequence.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Marketing Automation',
  name: 'AI Marketing Automation',
  description:
    'GenosAI builds AI-powered marketing automation systems with automated email sequences, intelligent lead scoring, and AI-optimized customer touchpoints that run without human input. Pricing $1,000–$4,000. Delivery 1–3 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$1,000–$4,000',
    },
  },
  url: 'https://genosai.tech/services/ai-marketing-automation',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function AIMarketingAutomationPage() {
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
          <span className="text-white/70">AI Marketing Automation</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-violet-400 font-medium text-sm">$1,000–$4,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">1–3 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          AI Marketing Automation
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds AI-powered marketing systems that run automated email
          sequences, score leads intelligently, and optimize every customer
          touchpoint — converting more leads without more manual work.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Automated nurture sequences</strong> — Multi-step email sequences that trigger based on lead behavior, not just time — driving higher open rates and conversions.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Intelligent lead scoring</strong> — Score leads automatically based on engagement, demographics, and behavior. Surface your hottest prospects to your sales team in real-time.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">AI-personalized email content</strong> — Generate personalized email copy for each lead based on their industry, role, and engagement history using LLMs.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Re-engagement campaigns</strong> — Automatically identify and re-engage cold leads in your CRM with AI-crafted messages timed for maximum response.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Multi-channel orchestration</strong> — Coordinate email, SMS, and LinkedIn touchpoints from a single automation that tracks every interaction.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">
            GenosAI marketing automation is the right fit if your business:
          </p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Has a CRM full of leads that aren't being nurtured consistently</li>
            <li>Sends the same email to everyone and wonders why conversions are low</li>
            <li>Wants marketing to run while your team focuses on closing</li>
            <li>Needs lead scoring to help sales prioritize their pipeline</li>
            <li>Is in SaaS, professional services, e-commerce, or B2B sales</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Email Nurture Sequence</p>
                <p className="text-white/40 text-sm">5–7 email sequence, behavioral triggers, CRM sync</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$1,000–$2,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Lead Scoring + Nurture System</p>
                <p className="text-white/40 text-sm">Behavioral scoring, segmented sequences, sales alerts</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,000–$3,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full AI Marketing System</p>
                <p className="text-white/40 text-sm">AI-personalized content, multi-channel, analytics dashboard</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$3,000–$4,000</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to automate your marketing?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your current funnel, identify
            the highest-impact automation opportunities, and give you a firm
            quote — no commitment required.
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
