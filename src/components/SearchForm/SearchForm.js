import styled from "styled-components";

const SearchFormWrapper = styled.section`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 3rem;

    .form {
      width: 100%;
      margin: 0;
      padding: 1.5rem 1rem;
    }
  }

  /* @media (min-width: 768px) and (max-width: 1439px) {
    width: 100vw;
  } */
`;

export default SearchFormWrapper;
