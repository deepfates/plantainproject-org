import styled from 'styled-components';
import { accent } from 'constants/theme';
import { dark } from 'constants/theme';

export const Container = styled.header`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  h1 {
    font-size: 6rem;
    font-family: Baloo;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem;
  }
  a {
    color: ${dark};
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 2rem;
    &:hover {
      color: ${accent};
    }
  img {
      width: 200px;
      padding: 2rem;
  }
  }
`;
