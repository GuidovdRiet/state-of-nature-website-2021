import styled from '@emotion/styled';

export const Navigation = styled.nav`
  z-index: 9999;

  .navigation__wrapper {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 1283px;
    padding: 0 30px;
    margin: 30px auto 0px auto;
  }

  &.sticky {
    background-color: ${({ theme }) => theme.colors.background};
    position: sticky;
    top: -30px;
    padding: 10px 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
    box-shadow: rgb(50 50 93 / 0%) 7px -2px 5px -1px,
      rgb(0 0 0 / 1%) 0px 1px 3px;
  }

  &.sticky .navigation__nav-logo {
    width: 100px;
    position: absolute;
    left: 218px;
    top: 40px;
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

  .navigation__nav-items-list > li {
    margin: 0 25px;
    font-size: 1.4em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey200};
    transition: background-color 0.1s ease-in;
    transition: border 0.1s ease-in;
    border: 1px solid transparent;
    border-radius: 5px;
    ${({ theme }) => theme.helpers.fontSmoothing};
  }

  .navigation__nav-items-list > li:hover {
    background-color: #fffdef;
    border: 1px solid #e0d4c2;
  }

  .navigation__nav-items-list > li > a {
    padding: 7px 10px;
    display: block;
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
