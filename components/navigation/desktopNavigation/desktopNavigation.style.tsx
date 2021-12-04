import styled from '@emotion/styled';

export const Navigation = styled.nav`
  z-index: 9999;

  .navigation__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 1283px;
    padding: 0 30px;
    margin: 0 auto;
    padding-top: 20px;
  }

  &.sticky {
    background-color: ${({ theme }) => theme.colors.background};
    top: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: rgb(50 50 93 / 0%) 7px -2px 5px -1px,
      rgb(0 0 0 / 1%) 0px 1px 3px;
  }

  &.sticky .navigation__nav-logo {
    transform: scale(0.9);
    transform-origin: top left;
    transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navigation__nav-logo {
    width: 140px;
  }

  .navigation__nav-items-list {
    display: flex;
    list-style: none;
    padding: 0;
    flex: 1;
    justify-content: center;
    margin-left: 42px;
  }

  .navigation__nav-items-list > li > a {
    margin: 0 25px;
    font-size: 2.3em;
    font-weight: 600;
    font-family: 'Londrina Solid';
    transition: background-color 0.1s ease-in;
    transition: border 0.1s ease-in;
    border: 1px solid transparent;
    border-radius: 5px;
    ${({ theme }) => theme.helpers.fontSmoothing};
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  .navigation__nav-items-list > li:hover a {
    transition: background-color 0.1s ease-in, color 0.1s ease-in;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  .navigation__nav-items-list > li > a {
    padding: 7px 10px;
    display: block;
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  .navigation__nav-items-list > li > a:focus,
  .navigation__nav-items-list > li > a:active {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  .navigation__right-content-wrapper {
    display: flex;
    align-items: center;
  }

  .navigation__social-wrapper {
    display: flex;
    justify-content: center;
    margin-right: 26px;
  }

  .navigation__social-icon-instagram {
    width: 28px;
  }

  .navigation__social-icon-facebook {
    width: 13px;
    margin-right: 15px;
  }
`;
