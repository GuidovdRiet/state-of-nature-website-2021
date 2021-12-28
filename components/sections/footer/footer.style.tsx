import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface FooterProps {
  showAsPopup: boolean;
}

export const Footer = styled.footer<FooterProps>`
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  margin-top: 180px;
  padding: 90px 0;

  ${({ showAsPopup }) =>
    showAsPopup &&
    css`
      position: fixed;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 9999;
    `}

  h2 {
    font-size: 5.8em;
    margin-bottom: 25px;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 10px;
    a {
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  h3:last-child {
    margin-bottom: 0;
  }
`;
