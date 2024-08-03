import styled from "styled-components";
import { linkStyles } from "../../constants/linkStyles";

export const Container = styled.a`
    ${({variant}) => linkStyles[variant] || linkStyles.headerPrimeryLink}
`