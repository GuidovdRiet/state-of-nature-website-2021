import styled from '@emotion/styled';

export const EventHighlightSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  display: flex;
  height: 3000px;
  padding-top: 200px;

  .event-highlight-section__image-wrapper {
  }

  img {
    --stroke-pos: 1px;
    --stroke-neg: -1px;
    --stroke-color: ${({ theme }) => theme.colors.primaryYellow};
    filter: drop-shadow(var(--stroke-pos) 0 0 var(--stroke-color))
      drop-shadow(var(--stroke-neg) 0 var(--stroke-color))
      drop-shadow(0 var(--stroke-pos) 0 var(--stroke-color))
      drop-shadow(0 var(--stroke-neg) 0 var(--stroke-color))
      drop-shadow(var(--stroke-pos) var(--stroke-pos) 0 var(--stroke-color))
      drop-shadow(var(--stroke-pos) var(--stroke-neg) 0 var(--stroke-color))
      drop-shadow(var(--stroke-neg) var(--stroke-pos) 0 var(--stroke-color))
      drop-shadow(var(--stroke-neg) var(--stroke-neg) 0 var(--stroke-color));
  }
`;
