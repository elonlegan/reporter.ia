import OpenAI from 'openai';
import { Article } from './types';
import { OpenAIStream, StreamingTextResponse } from 'ai'; // Vercel AI SDK ***
import { getPreferredLanguage } from './utils';

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
	const { name: language } = await getPreferredLanguage();

	const prompt = `Como si fueras un periodias hablante ${language} Escribe un resumen de las noticias.

  Recibirás una lista de noticas y sus detalles.
  Tu objetivo es resaltar los temas más importantes para tener un conocimiento general de lo que esta pasando en el mundo.
  Si hay varios temas, intenta capturar los más importantes.
	entrega el resumen de la noticia en ${language}

  Estas son las noticias:
  ${news.map(structureArticleData).join('\n')}`;

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
	// return await prompt;
}

function structureArticleData(article: Article) {
	return `
	Título: ${article.title}
	Fecha de publicacion: ${new Date(
		article.publishedAt
	).toLocaleString()}
	Fuente: ${article.source.name}
	Autor: ${article.author}
	contenido: ${article.content}
	`;
}
