import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

// export const Grid = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 25% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 25%; 
//   grid-template-rows: 10% 300pt 250pt 10%;
//   gap: 10px 5px;

//   // @media (max-width: 960px) {
//   //   grid-template-columns: repeat(2, 1fr);
//   // }

//   // @media (max-width: 680px) {
//   //   grid-template-columns: 1fr;
//   // }
// `;

export const Section = styled.section`
  line-height: 0;
    
  -webkit-column-count: 4;
  -webkit-column-gap:   4px;
  -moz-column-count:    4;
  -moz-column-gap:      4px;
  column-count:         4;
  column-gap:           4px;

  @media (max-width: 1200px) {
    -moz-column-count:    3;
    -webkit-column-count: 3;
    column-count:         3;
  }
  @media (max-width: 1000px) {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
  }
  @media (max-width: 800px) {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
    }
`

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

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

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;
