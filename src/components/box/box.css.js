import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  font-family: 'Nunito', sans-serif;

  display: flex;
  flex-direction: column;

@media (min-width: 768px) {
  {
    display: grid;
    grid-template-columns: 1fr minmax(min-content, 700px) 1fr;
  }
  h2 {
    grid-column: 2 /3;
  }
}


`;
