import { categories } from '../_posts.js';

const contents = JSON.stringify(categories.map(category => {
    return category;
}));

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}