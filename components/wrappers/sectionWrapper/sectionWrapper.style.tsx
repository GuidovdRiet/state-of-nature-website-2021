import styled from '@emotion/styled';
import { breakpoints } from '../../../style/theme';

export const Wrapper = styled.section`
  max-width: ${`${breakpoints.extraLarge}px`};
  padding: 0 30px;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.extraSmallDown} {
    padding: 0 13px;
  }
`;
