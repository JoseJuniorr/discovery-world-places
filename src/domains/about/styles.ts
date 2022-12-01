import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
  text-align: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`;

export const BodyContainer = styled.div`
  max-width: 700px;
`;

export const Body = styled.p`
  text-align: center;

  a {
    text-decoration: none;
  }
`;
