import styled from 'styled-components';

export const Container = styled.div`.
  display: flex;
  flex-direction: column;
  min-height: 100vh;

@media (min-width: 768px) {
  {
    display: grid;
    grid-template-columns: 1fr minmax(min-content, 700px) 1fr;


  }
}
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  p {
    padding: 1rem 4rem;
    grid-column: 2 / 3;
      }
  div {
    grid-column: 2 / 3;
  }
  h2 {
    font-family: 'Baloo';
    font-size: 3.45rem;
    text-align: right;
    padding: 1rem 1rem 1rem 4rem;
  }
  img {
    grid-column: 2 / 4;
  }
}
`;
