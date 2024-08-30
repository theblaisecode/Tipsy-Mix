import styled from "styled-components";

const LayoutWrapper = styled.section`
  width: 67vw;
  max-width: var(max-width);
  margin: 0 auto;
  padding: 1rem 2rem 5rem 2rem;

  @media screen and (max-width: 500px){
    width: 90vw;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: 100vw;
  }
`;

export default LayoutWrapper;
