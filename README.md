This is a demo of AI generated summaries of customer news for an e-commerce storefront.

The demo takes a set of customer news, and uses an LLM to create summaries of those news.
It then displays the summary and the news in a demo UI.

The benefit of such an AI summary is that the user can get a quick overview of the sentiment
of newsers of the product without reading them all.

[A deployed version can be found here.](https://news-summary.vercel.app/)

[Install the template on Vercel](https://vercel.com/templates/next.js/customer-news-ai-summary-nextjs-vercel)

## Getting Started

First, run the development server:

```bash
pnpm dev
```

## AI key

This demo requires an API key for Perplexity's inference API. This can be installed via
[Vercel's AI Marketplace](https://vercel.com/docs/integrations/ai).

Any other LLM model can be connected via minimal changes to `lib/ai-summary.ts` through [Vercel's AI SDK](https://sdk.vercel.ai/docs).
