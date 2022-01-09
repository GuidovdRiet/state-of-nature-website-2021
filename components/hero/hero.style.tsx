import styled from '@emotion/styled';

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  position: relative;

  .hero__text {
    text-align: center;
    font-size: 8.6em;
    margin-bottom: 75px;
    max-width: 1000px;
    font-weight: 900;
    @media (min-width: 1600px) {
      font-size: 10.2em;
      max-width: 1200px;
    }
  }

  .hero__text span {
    color: ${({ theme }) => theme.colors.primaryYellow};
  }

  .hero__shape {
    position: absolute;
  }

  .hero__shape--scalene-triangle-left {
    width: 111px;
    bottom: -43px;
    left: 157px;
  }

  .hero__shape--scalene-triangle-right {
    width: 80px;
    bottom: 10px;
    top: -85px;
    right: 29px;
  }

  .hero__shape--square {
    top: -113px;
    left: 231px;
    width: 70px;
  }

  .hero__shape--triangle {
    width: 85px;
    bottom: -66px;
    right: 101px;
  }

  @media (min-width: 1600px) {
    .hero__text {
      font-size: 10.2em;
      max-width: 1200px;
    }
  }

  ${({ theme }) => theme.mediaQueries.extraSmallDown} {
    margin-top: 140px;

    .hero__text {
      font-size: 4em;
      margin-bottom: 25px;
    }

    .hero__shape--scalene-triangle-right {
      top: -61px;
      right: 271px;
    }

    .css-8sux6p .hero__shape--square {
      top: -87px;
      left: 231px;
    }

    .hero__shape--scalene-triangle-left {
      width: 61px;
      bottom: 27px;
      left: 216px;
    }

    .hero__shape--triangle {
      right: 231px;
      bottom: 34px;
      width: 45px;
    }
  }
`;
