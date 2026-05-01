import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Voice AI Agents Agency',
  description:
    'GenosAI builds AI voice agents that make 500+ outbound calls/day, qualify leads in real-time, and book meetings automatically. Pricing $2,500–$8,000. Delivery 2–4 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/voice-ai-agents' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a voice AI agent from GenosAI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voice AI agent development at GenosAI ranges from $2,500 for a basic outbound calling agent to $8,000 for a fully custom system with multi-CRM integration, dynamic scripting, and real-time lead scoring. Most clients land between $3,000–$5,000 for a production-ready outbound lead qualification agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many calls can a GenosAI voice AI agent make per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI voice AI agents can handle 500+ outbound calls per day depending on call duration and script complexity. Unlike human SDRs limited by energy and schedule, voice AI agents run 24/7 and maintain consistent quality across every call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms does GenosAI use for voice AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI builds voice AI systems on Vapi, Retell AI, Bland AI, and ElevenLabs depending on your requirements. We choose the platform that best fits your call volume, latency requirements, and CRM stack — not the one with the highest margin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the voice AI agent sync calls and data to my CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every GenosAI voice AI system includes full CRM integration. Call recordings, transcripts, lead scores, and outcomes sync automatically to HubSpot, Salesforce, Pipedrive, or your CRM of choice in real-time after each call.',
      },
    },
    {
      '@type': 'Question',
      name: 'What results can I expect from a GenosAI voice AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI voice AI clients typically see 3x more booked meetings, 80% reduction in manual outreach effort, and consistent follow-up across 100% of leads. One client replaced a 3-person SDR team for cold outreach with a GenosAI agent that outperformed them in volume and conversion rate.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Voice AI Agent Development',
  name: 'Voice AI Agents',
  description:
    'GenosAI builds AI voice agents that make 500+ outbound calls per day, qualify leads in real-time, book meetings automatically, and sync all conversation data to your CRM. Pricing $2,500–$8,000. Delivery 2–4 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$2,500–$8,000',
    },
  },
  url: 'https://genosai.tech/services/voice-ai-agents',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function VoiceAIAgentsPage() {
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
          <span className="text-white/70">Voice AI Agents</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-violet-400 font-medium text-sm">$2,500–$8,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">2–4 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Voice AI Agents
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds AI voice agents that make 500+ outbound calls per day,
          qualify leads in real-time, book meetings automatically, and sync every
          conversation back to your CRM — without a single human SDR involved.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Outbound lead qualification agents</strong> — Call your prospect list, ask qualification questions, score leads, and push qualified contacts directly to your sales pipeline.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Appointment booking agents</strong> — Check calendar availability in real-time and book meetings with qualified prospects before the call ends.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Follow-up calling agents</strong> — Re-engage cold leads, remind prospects about demos, and chase pipeline that's gone quiet — all automatically.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Inbound support agents</strong> — Answer inbound calls 24/7, handle FAQs, take messages, and escalate complex issues to human agents instantly.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Survey and research callers</strong> — Run customer satisfaction surveys, gather market research, and collect structured data at scale across thousands of contacts.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">
            GenosAI voice AI development is the right fit if your business:
          </p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Has a lead list that isn't being called fast enough</li>
            <li>Spends SDR time on unqualified calls instead of closing</li>
            <li>Needs follow-up at a scale humans can't sustain</li>
            <li>Wants CRM data populated automatically after every call</li>
            <li>Is in real estate, SaaS, financial services, or high-volume B2B sales</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Basic Outbound Agent</p>
                <p className="text-white/40 text-sm">Single script, basic CRM sync, standard voice</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,500–$4,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Lead Qualification + Booking Agent</p>
                <p className="text-white/40 text-sm">Dynamic scripting, calendar integration, lead scoring</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$4,000–$6,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full Custom Voice AI System</p>
                <p className="text-white/40 text-sm">Multi-script, multi-CRM, advanced analytics, custom voice</p>
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
          <h2 className="text-2xl font-display mb-3">Ready to build your voice AI agent?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your outreach process, scope the
            right solution, and give you a firm quote — no commitment required.
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
