import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; //bigger than leaflet
  top: var(--medium);
  right: var(--medium);

  svg {
    transition: color 0.3 ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highligth);
    }
  }
`;
