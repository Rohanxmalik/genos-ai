import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Chatbot Development Agency',
  description:
    'GenosAI builds custom AI chatbots trained on your business data. Handles customer support, qualifies leads, and books meetings automatically. Pricing $1,500–$5,000. Delivery 1–3 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/ai-chatbot-development' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an AI chatbot from GenosAI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI chatbot development at GenosAI ranges from $1,500 for a simple FAQ/support bot to $5,000 for a fully custom, multi-integration chatbot trained on your business data. Most mid-complexity chatbots land between $2,000–$3,500.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI delivers AI chatbots in 1–3 weeks depending on complexity. A simple support bot can go live in 3–5 days. A fully custom chatbot with CRM integrations, multi-language support, and custom training data typically takes 2–3 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI models does GenosAI use for chatbots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI builds chatbots on OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini, and other leading models. We choose the right model for your use case — not the most expensive one. We also use LangChain and LangGraph for complex multi-step reasoning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the chatbot connect to my existing CRM or tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GenosAI integrates chatbots with HubSpot, Salesforce, Pipedrive, Notion, Airtable, Slack, and most other business tools via API. Your chatbot can read from and write to your CRM in real-time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What results can I expect from a GenosAI chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI chatbot clients typically see 70% of customer queries handled without human intervention, 47x faster response times, and 35% higher conversion rates on lead capture forms. One client\'s support team went from handling 200 tickets/day to 60 tickets/day after deployment.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Chatbot Development',
  name: 'AI Chatbot Development',
  description:
    'GenosAI builds custom AI chatbots trained on your business data that handle customer support, qualify leads, book meetings, and integrate with your CRM. Pricing $1,500–$5,000. Delivery 1–3 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$1,500–$5,000',
    },
  },
  url: 'https://genosai.tech/services/ai-chatbot-development',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function AIChatbotPage() {
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
          <span className="text-white/70">AI Chatbot Development</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-violet-400 font-medium text-sm">$1,500–$5,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">1–3 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          AI Chatbot Development
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds custom AI chatbots trained on your business data — not
          generic, template-based bots. Our chatbots handle customer support,
          qualify inbound leads, book meetings, and integrate with your CRM.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Support chatbots</strong> — Answer FAQs, handle complaints, escalate complex issues to human agents automatically.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Lead qualification bots</strong> — Qualify inbound leads with custom questions, score them, and push qualified contacts to your CRM.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Appointment booking bots</strong> — Connect to your calendar, check availability, and book meetings without human input.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Internal knowledge bots</strong> — Train on your internal docs, SOPs, and knowledge base so your team can get answers instantly.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">E-commerce bots</strong> — Handle order status, returns, product recommendations, and checkout support 24/7.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">
            GenosAI chatbot development is the right fit if your business:
          </p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Receives 50+ repetitive customer queries per week</li>
            <li>Has a sales team spending time on unqualified leads</li>
            <li>Wants 24/7 customer engagement without hiring more support staff</li>
            <li>Uses a CRM and wants leads automatically added and tracked</li>
            <li>Is in SaaS, e-commerce, real estate, healthcare, or professional services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Simple FAQ / Support Bot</p>
                <p className="text-white/40 text-sm">Static knowledge base, basic routing, website embed</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$1,500–$2,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Lead Qualification Bot</p>
                <p className="text-white/40 text-sm">Custom questions, lead scoring, CRM integration</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,500–$3,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full Custom Chatbot</p>
                <p className="text-white/40 text-sm">Multi-integration, custom training, advanced reasoning</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$3,500–$5,000</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to build your chatbot?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your use case, recommend the right
            solution, and give you a firm quote — no commitment required.
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
