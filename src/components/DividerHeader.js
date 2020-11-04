import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const H3 = styled.h3`
  font-size: 1.4em;
`

const InlineDivider = styled.hr`
  border-bottom: 1px solid #262e40;
  border-top: none;
  margin-left: 0.6em;
  margin-right: 6px;
  margin-top: 4px;
  margin-bottom: 0;
  flex: 1;

  @media screen and (max-width: 992px) {
    margin-right: 0;
  }
`

const DividerHeader = ({ header }) => (
  <Wrapper>
    <H3>{header}</H3>
    <InlineDivider />
  </Wrapper>
)

export default DividerHeader
