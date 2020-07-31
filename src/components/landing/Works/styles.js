import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Section = styled.section`
`

export const Center = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
`

export const Item = styled.div`
  position: relative;
  width: 25%;

  @media (max-width: 1000px) {
    width: calc(100% / 3);
  }
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }

  .image {
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  
  .middle {
    position: absolute;
    transition: .5s ease;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .text {
    font-size: 1.3rem;
    line-height: 1.2;
    background-color: #6b63ff;
    padding: .5rem 1rem;
  }
  
  :hover .image {
    opacity: 0.3;
  }
  
  :hover .middle {
    opacity: 1;
  }  
`;