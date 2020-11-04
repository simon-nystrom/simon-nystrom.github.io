import styled from 'styled-components'

const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.73em;
  padding: 2px 6px;
  background-color: #262e40;
  margin: 2px;
  border-radius: 4px;
`

const Tag = ({ tag }) => <TagWrapper>{tag}</TagWrapper>

export default Tag
