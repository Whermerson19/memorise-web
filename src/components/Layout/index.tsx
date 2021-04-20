import Routes from "../../routes";

import { useAuth } from "../../hooks/auth";

import Aside from "../Aside";
import Content from "../Content";

import { Container } from "./styles";

export default function Layout() {
  const { user } = useAuth();

  return !!user ? (
    <Container>
      <Aside />
      <Content>
        <Routes />
      </Content>
    </Container>
  ) : (
    <Routes />
  );
}
