import styled from '@emotion/styled';
import { darken } from 'polished';

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

  .event-highlight-section__status {
    background-color: ${({ theme }) => theme.colors.grey100};
    display: inline-block;
    padding: 8px 10px;
    font-size: 2.2em;
    font-family: 'Londrina Solid';
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.helpers.fontSmoothing};
  }

  .event-highlight-section__title-wrapper {
    max-width: 450px;
    margin-bottom: 34px;
  }

  .event-highlight-section__title {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.1em;
    font-weight: 100;
    line-height: 1.7em;
    ${({ theme }) => theme.helpers.fontSmoothing};

    display: inline;
    padding: 5px 0px;
    margin-left: 18px;
    --hightlightOrange: #ca532b;
    background-color: var(----hightlightOrange);
    box-shadow: 0.5em 0 0 var(----hightlightOrange),
      -0.5em 0 0 var(----hightlightOrange);
    box-decoration-break: clone;
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
