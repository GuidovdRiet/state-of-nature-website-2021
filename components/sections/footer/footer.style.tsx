import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  margin-top: 180px;
  padding: 90px 0;

  h2 {
    font-size: 5.8em;
    margin-bottom: 25px;
  }

  h3 {
    a {
      font-weight: 200;
      font-size: 2.7em;
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
