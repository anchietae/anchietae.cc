import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
	const { slug } = params;
	const modules = import.meta.glob('/blog/*.md', { as: 'raw', eager: true });
	const path = `/blog/${slug}.md`;
	const postContent = modules[path];

	if (!postContent) {
		throw error(404, `Post not found: ${slug}`);
	}

	const { data, content } = matter(postContent.trim());
	const html = marked(content);

	return {
		title: data.title,
		content: html,
		date: data.date
	};
}

export async function entries() {
	const modules = import.meta.glob('/blog/*.md', { as: 'raw' });
	const entries = Object.keys(modules).map(path => {
		const slug = path.split('/').pop()?.replace('.md', '');
		return { slug };
	}).filter((p): p is { slug: string } => !!p.slug);
	return entries;
}
