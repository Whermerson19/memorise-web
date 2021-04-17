import Aside from "../Aside";
import Content from "../Content";

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Aside />
      <Content />
    </Container>
  );
}
