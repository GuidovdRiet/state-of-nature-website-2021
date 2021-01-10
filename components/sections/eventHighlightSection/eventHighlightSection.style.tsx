import styled from '@emotion/styled';

export const EventHighlightSection = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  justify-content: space-between;
  align-items: stretch;
  padding: 65px 76px;
  margin: 150px 0;

  .event-highlight-section__content-container {
    display: flex;
    position: relative;
    align-items: center;
    flex: 1;
  }

  .event-highlight-section__content-wrapper {
    position: relative;
    z-index: 2;
  }

  .event-highlight-section__illustration-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 0;
    width: 100%;
    max-height: 550px;
  }

  .event-highlight-section__image-wrapper {
    width: 550px;
  }
`;
