import styled from '@emotion/styled';

interface EventHighlightSectionProps {
  id: string;
}

export const EventHighlightSection = styled.div<EventHighlightSectionProps>`
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

  .event-highlight-section__status {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    display: inline-block;
    padding: 8px 10px;
    font-size: 2.2em;
    font-family: 'Londrina Solid';
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[700]};
    ${({ theme }) => theme.helpers.fontSmoothing};
  }

  .event-highlight-section__title-wrapper {
    max-width: 500px;
    margin-bottom: 34px;
  }

  .event-highlight-section__title {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.72em;
    line-height: 1.55em;
    ${({ theme }) => theme.helpers.fontSmoothing};
    font-weight: 400;
    display: inline;
    padding: 5px 0px;

    --hightlightOrange: #ca532b;
    margin-left: 0.27em;
    background-color: var(--hightlightOrange);
    box-shadow: 0.27em 0 0 var(--hightlightOrange),
      -0.27em 0 0 var(--hightlightOrange);
    box-decoration-break: clone;
  }

  .event-highlight-section__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .event-highlight-section__illustration-wrapper {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    width: 100%;
    max-width: 440px;
    max-height: 550px;
    transform: translate3d(-15px, -31px, 11px);
  }

  .event-highlight-section__image-wrapper {
    width: 550px;
    margin-left: 10px;
  }

  ${({ theme }) => theme.mediaQueries.extraSmallDown} {
    padding: 29px 23px;
    flex-direction: column;
    margin: 35px 0;

    .event-highlight-section__status {
      font-size: 1.6em;
    }

    .event-highlight-section__title {
      font-size: 2.72em;
    }
    .event-highlight-section__illustration-wrapper {
      width: 90%;
    }

    .event-highlight-section__image-wrapper {
      width: 269px;
      margin-left: 0px;
      margin-top: 25px;
    }
  }
`;
