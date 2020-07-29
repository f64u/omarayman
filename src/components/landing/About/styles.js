import styled from "styled-components"


export const Wrapper = styled.div`
  padding: 2rem 0;

  h2 {
    margin-top: 8px;
  }

  p {
    font-size: 1.3rem;
    padding: .3em 1em;
    text-align: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RoundedContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  height: 100%;

  border-radius: 50%;
  overflow: hidden;

`
