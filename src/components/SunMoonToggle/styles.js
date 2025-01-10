import styled from "styled-components";

export const IconContainer = styled.div`
    position: absolute;

    bottom: -4rem;
    left: 50%;
    transform: translateX(-100%);
    width: 25px;
    height: 25px;
    cursor: pointer;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: rotate(360deg);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

    &.visible {
      opacity: 1;
      transform: rotate(0deg);
      pointer-events: auto;
    }

    &.hidden {
      pointer-events: none;
    }
  }

  svg:hover{
    filter: ${({ theme }) => theme.sunMoonDropShadow}
  }
`;