import { posts } from './_posts.js';

const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
const contents = JSON.stringify(sorted.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		tags: post.tags,
		date: post.date
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}