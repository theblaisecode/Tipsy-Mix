import styled from "styled-components";

const CocktailWrapper = styled.section`
  margin: auto;
  width: 85%;

  header {
    text-align: center;
    margin-bottom: 3rem;

    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
  }

  .drink-info {
    padding-top: 2rem;
  }

  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }

  .ingredients-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    margin: 1rem 0;
  }

  .ingredient-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
  }

  .ingredient-img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }

  .ingredient-info {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .ingredient-info p {
    margin: 0;
  }

  .measure {
    color: var(--grey-500);
    font-size: 0.85em;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .drink-info {
      padding-top: 0;
    }
  }
`;

export default CocktailWrapper;
