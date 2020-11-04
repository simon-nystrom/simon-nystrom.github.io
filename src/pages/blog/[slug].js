import _ from 'lodash'
import Head from 'next/head'
import styled from 'styled-components'
import Tag from '../../components/Tag'
import { posts } from '../../_posts'

const Meta = styled.div`
  padding: 0.8em;
  padding-left: 0;
  display: flex;
  align-items: center;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Post = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.summary} key="description" />
    </Head>
    <h1 style={{ fontSize: '2.2em' }}>{post.title}</h1>
    <Meta>
      <h5 className="gray">{post.date}</h5>
      <div className="gray">・</div>
      <Tags>
        {post.tags.map((t) => (
          <Tag key={t} tag={t} />
        ))}
      </Tags>
    </Meta>
    <article
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: post.html }}
    ></article>
  </>
)

export default Post

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: false // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  return { props: { post: _.find(posts, (p) => p.slug === params.slug) } }
}
