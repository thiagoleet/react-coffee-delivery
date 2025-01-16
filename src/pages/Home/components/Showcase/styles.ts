import styled from "styled-components";

export const ShowCaseWrapper = styled.section`
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ShowCaseTitle = styled.h2`
  margin: 2rem 0;
  font-weight: bold;
`;

export const ProductsShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;
`;
