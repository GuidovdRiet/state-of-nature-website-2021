import styled from '@emotion/styled';

export const Navigation = styled.nav`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navigation__nav-items-list {
    display: flex;
    list-style: none;
  }

  .navigation__nav-items-list > li {
    margin: 0 15px;
    font-size: 1.38em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey200};
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
