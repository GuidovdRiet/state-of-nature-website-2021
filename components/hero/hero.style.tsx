import styled from '@emotion/styled';

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;

  .hero__text {
    text-align: center;
    font-size: 10.2em;
    margin-bottom: 75px;
  }

  .hero__text span {
    color: ${({ theme }) => theme.colors.primaryYellow};
  }
`;
