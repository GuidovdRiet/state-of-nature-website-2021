import styled from '@emotion/styled';

export const Hero = styled.section`
  .hero__text {
    text-align: center;
    font-size: 10.2em;
  }

  .hero__text span {
    color: ${({ theme }) => theme.colors.primaryYellow};
  }
`;
