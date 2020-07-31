import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Section = styled.section`
  .my-masonry-grid {  
    display: flex;
    width: auto;
  }

  .my-masonry-grid_column {
    background-clip: padding-box;
  }
`

export const Item = styled.div`
  position: relative;

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