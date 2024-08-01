import OpenAI from 'openai';
import { Article } from './types';
import { OpenAIStream, StreamingTextResponse } from 'ai'; // Vercel AI SDK ***
import { title } from 'process';
import { getCountryInfo } from './utils';

if (!process.env.PERPLEXITY_API_KEY) {
	throw new Error(
		'PERPLEXITY_API_KEY environment variable is required. You can get this via https://vercel.com/docs/integrations/ai'
	);
}

const perplexity = new OpenAI({
	apiKey: process.env.PERPLEXITY_API_KEY || '',
	baseURL: 'https://api.perplexity.ai',
});

function buildPrompt(
	prompt: string
): [{ role: 'user'; content: string }] {
	return [
		{
			role: 'user',
			content: prompt,
		},
	];
}

export async function summarizeNews(news: Article[]) {
	const { languages } = await getCountryInfo();
	const prompt = `Escribe un resumen/reportaje de las noticias en ${languages}.

  Recibirás una lista de noticas en diferentes idiomas pero tu resumen debe estar en ${languages}.
  Tu objetivo es resaltar los temas más importantes para tener un conocimiento general de lo que esta pasando en el mundo.
  Si hay varios temas, intenta capturar los más importantes.
  Divídela en 4 párrafos cortos. Máximo 30 palabras en total.

  Estas son las noticias:
  ${news
		.map((article: Article) => article.content)
		.join('\n')}
  `;

	const query = {
		model: 'llama-3-sonar-large-32k-chat',
		stream: true,
		messages: buildPrompt(prompt),
		max_tokens: 1000,
		temperature: 0.75,
		frequency_penalty: 1,
	} as const;

	const response = await perplexity.chat.completions.create(
		query
	);

	const stream = OpenAIStream(response);

	const streamingResponse = new StreamingTextResponse(
		stream
	);
	return await streamingResponse.text();
}
