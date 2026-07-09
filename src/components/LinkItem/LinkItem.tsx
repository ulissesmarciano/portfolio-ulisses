import type { linkStyles } from "../../constants/linkStyles";
import { Container } from "./styles";

interface LinkItemProps {
  name: string;
  variant: keyof typeof linkStyles;
  href?: string;
  src?: string;
  alt?: string;
  target?: string;
  onClick?: () => void;
}

export const LinkItem = ({
  name,
  variant,
  href,
  src,
  alt,
  target,
  onClick,
}: LinkItemProps) => {
  return (
    <Container $variant={variant} href={href} target={target} onClick={onClick}>
      <img src={src} alt={alt} />
      {name}
    </Container>
  );
};
