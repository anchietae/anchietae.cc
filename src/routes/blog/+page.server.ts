import matter from 'gray-matter';

export async function load({ url }) {
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

	const page = parseInt(url.searchParams.get('page') ?? '1');
	const pageSize = 20;
	const totalPosts = posts.length;
	const totalPages = Math.ceil(totalPosts / pageSize);

	const paginatedPosts = posts.slice((page - 1) * pageSize, page * pageSize);

	return {
		posts: paginatedPosts,
		page,
		totalPages
	};
}
