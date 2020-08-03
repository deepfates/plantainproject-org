import styled from 'styled-components';
import { accent } from 'constants/theme';
import { light } from 'constants/theme';
import { fg } from 'constants/theme';

export const Container = styled.div`
  padding: 2rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: ${light};
  transition: background-color 0.3s ease;
  h1 {
    font-size: 4rem;
    font-family: Baloo;
    text-transform: uppercase;
  }
  a {
    color: ${fg};
    text-decoration: none;
    &:hover {
      color: ${light};
    }
  }
  form {
    padding: 3rem;
  }
  background-color: ${({ isVisible }) => (isVisible ? accent : fg )};
`;
