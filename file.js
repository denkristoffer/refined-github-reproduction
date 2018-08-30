const Container = styled.div`
  display: none;
  position: relative;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 700px) {
    display: block;
  }

  @media screen and (min-width: 850px) {
    width: 400px;
  }

  @media screen and (min-width: 1100px) {
    width: 550px;
  }
`

export default Container
