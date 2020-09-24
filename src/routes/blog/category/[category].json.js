import { categories } from '../_posts.js';

const lookup = new Map();
categories.forEach(category => {
    lookup.set(category, JSON.stringify(category));
});

export function get(req, res, next) {

    const { category } = req.params;

    if (lookup.has(category)) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(lookup.get(category));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}
