export async function GET() {
  const content = `---
title: Book a Free Strategy Call | GenosAI
description: Book a free 30-minute strategy call with GenosAI. We audit your workflows, identify automation opportunities, and give you a transparent quote. No commitment required.
url: https://genosai.tech/strategy-call
last_updated: ${new Date().toISOString().split('T')[0]}
---

# Book a Free Strategy Call — GenosAI

GenosAI offers a free 30-minute strategy call for all prospective clients.

## What the Call Covers

1. **Workflow audit** — We review your current tools, processes, and manual work to identify where automation can have the most impact.
2. **Opportunity mapping** — We identify your top 3 automation opportunities ranked by ROI and implementation effort.
3. **Solution recommendation** — We recommend the right service and technical approach for your specific situation.
4. **Transparent quote** — You receive a firm price and timeline estimate before the call ends. No hidden fees, no vague proposals.

No commitment required. You leave with a clear action plan regardless of whether you work with us.

## Typical Results After Working With GenosAI

- 60% reduction in manual work
- 47x faster lead response times
- 35% increase in conversion rates
- $500–$3,000/month saved by replacing SaaS tools with custom automation

## Book Your Call

Visit https://genosai.tech/strategy-call to schedule.

## Contact

- Email: hello@genosai.tech
- LinkedIn: https://www.linkedin.com/company/genosai
- Twitter/X: https://x.com/AiGenos81577
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
