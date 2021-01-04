import styled from '@emotion/styled';

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  position: relative;

  .hero__text {
    text-align: center;
    font-size: 10.2em;
    margin-bottom: 75px;
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
`;
