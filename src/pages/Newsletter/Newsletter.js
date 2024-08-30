import styled from "styled-components";

const NewsletterWrapper = styled.section`
  margin-bottom: 6rem;

  .form {
    display: flex;
    flex-direction: column;
  }

  h4 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn {
    margin-top: 0.5rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  h5 {
    color: red;
    margin-top: 1rem;
    text-transform: none;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 500px) {
    .form {
      width: 100%;
      padding: 1rem 1.5rem;
    }

    h4 {
      margin-bottom: 1.5rem;
    }
  }
`;

export default NewsletterWrapper;
