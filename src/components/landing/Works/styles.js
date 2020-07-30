import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Section = styled.section`
  line-height: 0;
    
  column-count:         4;
  column-gap:           4px;

  @media (max-width: 1200px) {
    column-count:         3;
  }
  @media (max-width: 1000px) {
    column-count:         2;
  }
  @media (max-width: 800px) {
    column-count:         1;
    }
`

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: block;
  margin-bottom: 4px;
  cursor: pointer;


  .image {
    position: relative;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
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