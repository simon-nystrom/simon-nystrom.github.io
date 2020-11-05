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

const H5 = styled.h5`
  color: #7b7b7b;
  font-size: 0.7em;
`

const renderTitle = (post) => {
  const isPartOfSeries = !!post.series_title
  if (isPartOfSeries) {
    return (
      <div>
        <h4>{post.title}</h4>
        <H5>
          {post.series_title} ({post.part} / {post.last_part})
        </H5>
      </div>
    )
  }
  return <h4>{post.title}</h4>
}

const BlogLink = ({ post }) => {
  console.log('post: ', post.last_part)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link href={`blog/${post.slug}`} passHref>
      <A
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Container>
          {renderTitle(post)}

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
