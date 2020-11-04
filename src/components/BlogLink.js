import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Divider from './Divider'
import Tag from './Tag'

const A = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
  padding-top: 12px;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px) {
    display: none;
  }
`

const Tags = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`

const Date = styled.p`
  font-size: 0.7em;
  margin-left: 6px;
`

const BlogLink = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link href={`blog/${post.slug}`} passHref>
      <A
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Container>
          <h4>{post.title}</h4>
          <Meta>
            <Tags>
              {post.tags
                .filter((_, i) => i < 2)
                .map((t) => (
                  <Tag key={t} tag={t} />
                ))}
              {post.tags.length > 2 ? <Tag key={'more'} tag={'...'} /> : null}
              <Date>{post.date}</Date>
            </Tags>
          </Meta>
        </Container>
        <Divider fullWidth={isHovered} />
      </A>
    </Link>
  )
}

export default BlogLink
