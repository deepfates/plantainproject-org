import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { fg } from 'constants/theme';
export const Title = styled.span`
  display: block;
  font-family: Baloo;
  font-size: 4rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;

`;

export const Copy = styled.p`
  color: ${fg};
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
