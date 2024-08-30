import styled from "styled-components";

const CocktailListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export default CocktailListWrapper;
