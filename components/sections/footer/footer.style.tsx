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
