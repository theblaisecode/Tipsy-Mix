import styled from "styled-components";

const AboutWrapper = styled.section`
  .centered {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }

  .highlight {
    color: var(--primary-500);
    font-weight: bold;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }

  img {
    width: 90vw;
    max-width: 95%;
    display: block;
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default AboutWrapper;
