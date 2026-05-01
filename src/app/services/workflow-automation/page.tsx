import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Workflow Automation Agency',
  description:
    'GenosAI builds end-to-end workflow automation connecting CRMs, ERPs, and internal tools. Eliminates manual data entry. Pricing $500–$3,000. Delivery 1–2 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/workflow-automation' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does workflow automation from GenosAI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Workflow automation at GenosAI ranges from $500 for a simple two-tool integration to $3,000 for a complex multi-system pipeline with custom logic. Most clients with 3–5 tools to connect land between $1,000–$2,000. Every project includes a free scoping call and firm quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools can GenosAI connect together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI integrates virtually any tool with an API. Common connections: HubSpot, Salesforce, Pipedrive, Airtable, Notion, Google Sheets, Slack, Gmail, QuickBooks, Xero, Shopify, WooCommerce, Stripe, Typeform, Calendly, and hundreds more. We use Make (formerly Integromat), n8n, and Zapier — choosing the right platform for your stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does workflow automation take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GenosAI delivers workflow automations in 1–2 weeks. Simple two-tool connections can go live in 2–3 days. Complex multi-system pipelines with custom error handling, data transformation, and conditional logic typically take 1–2 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can GenosAI replace my current SaaS subscriptions with automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often, yes. GenosAI frequently replaces stacks of 3–5 SaaS tools with a single custom-built automation, saving clients $500–$3,000/month in subscriptions. One logistics client saved $2,400/month by replacing 4 tools with a single GenosAI pipeline. You get better control and customization at a fraction of the recurring cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the automation breaks after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GenosAI builds automations with error handling and alerting built-in. If a step fails, you'll get notified immediately and the workflow logs exactly what happened. We offer optional maintenance packages, but most GenosAI automations run for months without issues after launch.",
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Workflow Automation',
  name: 'Workflow Automation',
  description:
    'GenosAI builds end-to-end workflow automation connecting your CRM, ERP, spreadsheets, and internal tools into one seamless pipeline. Eliminates manual data entry completely. Pricing $500–$3,000. Delivery 1–2 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$500–$3,000',
    },
  },
  url: 'https://genosai.tech/services/workflow-automation',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function WorkflowAutomationPage() {
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
          <span className="text-white/70">Workflow Automation</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-violet-400 font-medium text-sm">$500–$3,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">1–2 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          Workflow Automation
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI connects your CRM, ERP, spreadsheets, and internal tools into
          one seamless automated pipeline — eliminating manual data entry,
          reducing errors, and giving your team real-time operational visibility.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Automates</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">CRM data pipelines</strong> — Automatically sync leads, contacts, and deals between your CRM, spreadsheets, and other tools without copy-pasting.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Onboarding workflows</strong> — Trigger welcome emails, create accounts, assign tasks, and notify team members the moment a new client signs up.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Invoice and billing automation</strong> — Generate invoices, send payment reminders, and update accounting software automatically when deals close.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Reporting pipelines</strong> — Pull data from multiple sources, transform it, and deliver daily/weekly reports to Slack or email without manual work.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Multi-tool integrations</strong> — Replace stacks of disconnected SaaS tools with a single custom pipeline that costs less and works better.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">
            GenosAI workflow automation is the right fit if your business:
          </p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Has team members copying data between tools manually</li>
            <li>Uses 3+ disconnected SaaS tools that don't talk to each other</li>
            <li>Spends hours per week on repetitive admin work</li>
            <li>Wants real-time operational visibility without manual reporting</li>
            <li>Is in logistics, e-commerce, SaaS, finance, or operations-heavy industries</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Simple Integration</p>
                <p className="text-white/40 text-sm">2–3 tools, basic trigger-action flow</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$500–$1,200</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Multi-Tool Pipeline</p>
                <p className="text-white/40 text-sm">4–6 tools, conditional logic, error handling</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$1,200–$2,200</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full Automation Suite</p>
                <p className="text-white/40 text-sm">End-to-end pipeline, custom logic, monitoring dashboard</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,200–$3,000</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to automate your workflows?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your current tools, map your
            manual processes, and give you a firm quote — no commitment required.
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
