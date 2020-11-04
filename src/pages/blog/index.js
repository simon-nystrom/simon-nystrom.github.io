import _ from 'lodash'
import BlogLink from '../../components/BlogLink'
import DividerHeader from '../../components/DividerHeader'
import { posts } from '../../_posts'

const BlogPage = ({ posts }) => {
  return (
    <>
      <DividerHeader header={'Recent posts'} />
      {posts.map((p) => (
        <BlogLink key={p.slug} post={p} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: _.orderBy(posts, 'date', ['desc'])
    }
  }
}

export default BlogPage
