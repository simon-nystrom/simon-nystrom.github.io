const { default: styled } = require('styled-components')

const Divider = styled.hr`
  border: none;
  margin: 0;
  margin-top: 10px;
  transition: all 0.2s ease;

  border-bottom: 1px solid
    ${(props) => (props.fullWidth ? '#83a0e1' : '#262e40')};

  margin-left: ${(props) => (props.fullWidth ? '0' : '4px')};
  margin-right: ${(props) => (props.fullWidth ? '0' : '4px')};

  @media screen and (max-width: 992px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export default Divider
