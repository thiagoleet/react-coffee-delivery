import styled from "styled-components";

export const ShowCaseWrapper = styled.section``;

export const ShowCaseTitle = styled.h2`
  margin-bottom: 2rem;
  font-weight: bold;
`;

export const ProductsShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;
`;
