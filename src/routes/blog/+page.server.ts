import matter from 'gray-matter';

export async function load() {
	const modules = import.meta.glob('/blog/*.md', { as: 'raw', eager: true });

	const posts = Object.entries(modules).map(([path, content]) => {
		const slug = path.split('/').pop()?.replace('.md', '');
		const { data } = matter(content.trim());
		const date = new Date(data.date);
		const isValidDate = !isNaN(date.getTime());

		return {
			slug,
			title: data.title,
			date: (isValidDate ? date : new Date()).toISOString(),
		};
	});

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts,
	};
}
