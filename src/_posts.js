const fs = require('fs')
const marked = require('marked')
const hljs = require('highlight.js')
const fm = require('front-matter')

marked.use({
  renderer: {
    code(code, lang, escaped) {
      if (lang) {
        const highlighted = hljs.highlight(lang, code).value
        return `<pre><div class="copy-me" onclick="copyCode(this)">Copy</div><code>${highlighted}</code></pre>`
      }

      return `<pre><div class="copy-me" onclick="copyCode(this)">Copy</div><code>${code}</code></pre>`
    }
  }
})

const postFiles = fs.readdirSync('posts')

const isDev = process.env.NODE_ENV === 'development'

const posts = []
for (let i = 0; i < postFiles.length; i++) {
  const postContent = fs.readFileSync(`posts/${postFiles[i]}`, {
    encoding: 'utf-8'
  })
  const { body, ...frontMatter } = fm(postContent)
  const { attributes } = frontMatter
  const { published } = attributes
  if (!published && !isDev) continue
  posts.push({
    html: marked(body),
    ...attributes
  })
}

export { posts }
