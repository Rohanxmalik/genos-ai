import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-Commerce Storefronts',
  description:
    'GenosAI builds conversion-optimised Shopify stores, headless e-commerce sites, and custom checkout flows. Pricing $2,500–$8,000. Delivery 2–5 weeks.',
  alternates: { canonical: 'https://genosai.tech/services/ecommerce-storefronts' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you build on Shopify or fully custom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. Shopify is ideal for most D2C brands — fast to launch, massive app ecosystem, reliable infrastructure. Headless (Next.js + Shopify Storefront API or custom backend) is right when you need full design control, complex logic, or deep integrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate my existing store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We migrate products, customer data, order history, and SEO metadata. We map redirects carefully to protect your search rankings and test the migration on staging before going live.',
      },
    },
    {
      '@type': 'Question',
      name: 'What integrations do you support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Klaviyo, Mailchimp, HubSpot, Recharge (subscriptions), Gorgias, Yotpo, ShipBob, EasyPost, and most major fulfilment and marketing tools. Custom integrations available via API.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you optimise for conversion rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Conversion is a core design constraint — not an afterthought. We apply CRO principles to product pages, add-to-cart flows, checkout, and upsell/cross-sell placement. Post-launch A/B testing available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an e-commerce store cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom Shopify themes and setups start at $2,500. Headless storefronts with custom checkout run $4,000–$6,500. Full platforms with subscriptions, inventory, and CRM integration are $6,500–$8,000.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-Commerce Development',
  name: 'E-Commerce Storefronts',
  description:
    'Conversion-engineered online stores with fast checkout, smart product discovery, and CRM/fulfilment integrations. Shopify and headless. Pricing $2,500–$8,000. Delivery 2–5 weeks.',
  provider: { '@type': 'Organization', name: 'GenosAI', url: 'https://genosai.tech' },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      description: '$2,500–$8,000',
    },
  },
  url: 'https://genosai.tech/services/ecommerce-storefronts',
  areaServed: ['US', 'UK', 'AE', 'IN', 'AU'],
}

export default function EcommerceStorefrontsPage() {
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
          <span className="text-white/70">E-Commerce Storefronts</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs font-mono text-violet-400/70 tracking-wide">Shopify · Custom · Headless</span>
          <span className="text-white/30">·</span>
          <span className="text-violet-400 font-medium text-sm">$2,500–$8,000</span>
          <span className="text-white/30">·</span>
          <span className="text-white/40 text-sm">2–5 weeks delivery</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display mb-6">
          E-Commerce Storefronts
        </h1>

        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          GenosAI builds conversion-engineered online stores with fast checkout
          flows, smart product discovery, and deep integrations with your
          fulfilment, CRM, and marketing stack. Built to sell — not just to look good.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What GenosAI Builds</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Custom Shopify storefronts</strong> — Pixel-perfect Shopify themes, product page optimisation, and full app stack configuration.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Headless e-commerce sites</strong> — Next.js frontend with Shopify or custom backend for unlimited design freedom and performance.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Subscription storefronts</strong> — Recharge or custom subscription logic with flexible billing, pause, and cancellation flows.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">B2B &amp; wholesale portals</strong> — Trade accounts, tiered pricing, bulk ordering, and net-terms checkout for business buyers.</span></li>
            <li className="flex gap-3"><span className="text-violet-400 mt-1">→</span><span><strong className="text-white">Store migrations</strong> — Full migration from WooCommerce, Wix, Squarespace, or legacy platforms with zero data loss and SEO protection.</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who This Is For</h2>
          <p className="text-white/60 mb-3">Right fit if you:</p>
          <ul className="space-y-2 text-white/60 list-disc list-inside">
            <li>Are launching a new D2C brand and want to start on solid infrastructure</li>
            <li>Have an existing store that looks dated, loads slowly, or converts poorly</li>
            <li>Are migrating away from WooCommerce, Wix, or a custom legacy store</li>
            <li>Sell physical or digital products and need subscription or bundle logic</li>
            <li>Want your store connected to your CRM, email, and fulfilment in one pipeline</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-3">
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Shopify Theme &amp; Setup</p>
                <p className="text-white/40 text-sm">Custom theme, product setup, payment config, app stack</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$2,500–$4,000</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Custom Headless Storefront</p>
                <p className="text-white/40 text-sm">Next.js frontend, headless CMS, custom checkout flow</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$4,000–$6,500</span>
            </div>
            <div className="border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Full E-Commerce Platform</p>
                <p className="text-white/40 text-sm">Subscriptions, inventory management, CRM integration, B2B</p>
              </div>
              <span className="text-violet-400 font-medium whitespace-nowrap ml-4">$6,500–$8,000</span>
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
          <h2 className="text-2xl font-display mb-3">Ready to launch your store?</h2>
          <p className="text-white/50 mb-6">
            Book a free strategy call. We audit your current setup, identify the
            quickest wins, and give you a firm quote — no commitment required.
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
