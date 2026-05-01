import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom AI Solutions Agency',
  description:
    'GenosAI builds bespoke production-grade AI systems — computer vision, NLP pipelines, recommendation engines, and enterprise AI platforms. Pricing $5,000–$25,000+. Delivery 4–8 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/custom-ai-solutions' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a custom AI solution from GenosAI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom AI solutions at GenosAI range from $5,000 for a focused production-grade AI feature to $25,000+ for a full enterprise AI platform with multiple models, custom training pipelines, and complex integrations. The scope is always defined with a free strategy call and firm quote before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of custom AI systems does GenosAI build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI builds computer vision systems (object detection, image classification, quality inspection), NLP pipelines (document processing, entity extraction, sentiment analysis), recommendation engines (product, content, service recommendations), AI decision systems (fraud detection, risk scoring, anomaly detection), and enterprise AI platforms that combine multiple AI capabilities into one unified system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI models and technologies does GenosAI use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI builds with OpenAI GPT-4o, Anthropic Claude, Google Gemini, Meta LLaMA, Mistral, and DeepSeek for language tasks. For computer vision we use YOLO, SAM, and custom-trained models. Our infrastructure stack includes Python, FastAPI, LangChain, LangGraph, CrewAI, PostgreSQL, Supabase, AWS, and Docker.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a custom AI project take to deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom AI solutions at GenosAI typically take 4–8 weeks depending on system complexity, data requirements, and integration depth. A focused AI feature with a clear spec can ship in 3–4 weeks. A full enterprise AI platform with custom model training, multiple integrations, and a management dashboard typically takes 6–8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does GenosAI build AI systems that can be fine-tuned on my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. GenosAI builds custom RAG (Retrieval-Augmented Generation) systems trained on your proprietary data, fine-tunes models on domain-specific datasets, and builds embedding pipelines that keep your AI's knowledge base up to date automatically. Your data stays private — we don't train on it for any other purpose.",
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom AI Solutions',
  name: 'Custom AI Solutions',
  description:
    'GenosAI builds bespoke production-grade AI systems from the ground up — computer vision, NLP pipelines, recommendation engines, and enterprise AI platforms tailored to your industry and requirements. Pricing $5,000–$25,000+. Delivery 4–8 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$5,000–$25,000+',
    },
  },
  url: 'https://genosai.tech/services/custom-ai-solutions',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function CustomAISolutionsPage() {
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
          <span className="text-white/70">Custom AI Solutions</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-violet-400 font-medium text-sm">$5,000–$25,000+</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">4–8 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Custom AI Solutions
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds bespoke, production-grade AI systems from the ground up
          — computer vision, NLP pipelines, recommendation engines, and
          enterprise AI platforms built specifically for your industry and
          requirements.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Computer vision systems</strong> — Object detection, image classification, quality inspection, and visual data processing pipelines trained on your specific domain.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">NLP and document processing</strong> — Extract structured data from unstructured documents, classify content, analyze sentiment, and build document intelligence pipelines at scale.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Recommendation engines</strong> — Product, content, and service recommendation systems that personalize experiences and increase engagement and revenue per user.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">AI decision systems</strong> — Fraud detection, risk scoring, anomaly detection, and automated decision engines that act faster and more consistently than human review.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Enterprise AI platforms</strong> — Full platforms combining multiple AI capabilities, custom admin dashboards, usage analytics, and management interfaces for enterprise deployment.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">
            GenosAI custom AI solutions are the right fit if your business:
          </p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Has a problem that off-the-shelf AI tools can't solve</li>
            <li>Needs AI trained on proprietary or domain-specific data</li>
            <li>Requires a production-grade system, not a proof-of-concept</li>
            <li>Wants to own the AI system rather than pay recurring SaaS fees</li>
            <li>Is in healthcare, logistics, finance, manufacturing, or enterprise SaaS</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Focused AI Feature</p>
                <p className="text-white/40 text-sm">Single AI capability, API integration, production deployment</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$5,000–$10,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Custom AI System</p>
                <p className="text-white/40 text-sm">Multi-component AI, custom training, integrations, dashboard</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$10,000–$18,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Enterprise AI Platform</p>
                <p className="text-white/40 text-sm">Full platform, multiple AI models, admin interface, analytics</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$18,000–$25,000+</span>
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
          <h2 className="text-2xl font-display mb-3">Have a complex AI project in mind?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We review your requirements, propose a
            technical approach, and give you a firm quote — no commitment
            required.
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
