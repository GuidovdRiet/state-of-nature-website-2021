import styled from '@emotion/styled';

export const EventHighlightSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  display: flex;
  padding: 65px 76px;
  margin-top: 150px;
  justify-content: space-between;
  align-items: stretch;

  .event-highlight-section__content-container {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
  }

  .event-highlight-section__content-wrapper {
    position: relative;
    z-index: 2;
  }

  .event-highlight-section__illustration-wrapper {
    position: absolute;
    max-width: 560px;
    top: 0;
    z-index: 0;
  }

  .event-highlight-section__image-wrapper {
    width: 550px;
  }
`;
