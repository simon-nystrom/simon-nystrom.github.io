import _ from 'lodash'
import styled from 'styled-components'
import BlogLink from '../components/BlogLink'
import DividerHeader from '../components/DividerHeader'
import { posts } from '../_posts'

const Intro = styled.p`
  margin-bottom: 30px;
`

const IndexPage = ({ posts }) => {
  return (
    <>
      <h2>Hi! 👋</h2>
      <Intro>
        Welcome to my site. My name is Simon Nyström. I'm a 30 year old software
        engineer with a big interest in tech and programming. This site is a
        place for me to share my thoughts and learnings with whoever may be
        interested 🙂.
      </Intro>
      <DividerHeader header={'Recent posts'} />
      {posts.map((p) => (
        <BlogLink key={p.slug} post={p} />
      ))}
    </>
  )
}

export default IndexPage

export async function getStaticProps() {
  return {
    props: {
      posts: _.orderBy(posts, 'date', ['desc'])
    }
  }
}
