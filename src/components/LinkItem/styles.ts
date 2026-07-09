import styled from "styled-components";
import { linkStyles } from "../../constants/linkStyles";

interface ContainerProps {
  $variant: keyof typeof linkStyles;
}

export const Container = styled.a<ContainerProps>`
  ${({ $variant }) => linkStyles[$variant] || linkStyles.headerPrimaryLink}
`;