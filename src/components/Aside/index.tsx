import { useAuth } from "../../hooks/auth";
import { useLayout } from "../../hooks/layout";

import { useHistory } from "react-router-dom";

import { FiMenu, FiHome, FiFolder, FiList } from "react-icons/fi";

import Logo from "../../assets/logo.svg";
import {
  BlackWindow,
  Container,
  Content,
  ActionsContainer,
  UserInfoContainer,
  CreateButtonContainer,
  OptionsCreateContainer,
  NavContainer,
} from "./styles";
import { useCallback, useState } from "react";

export default function Aside() {
  const [createMenuIsVisible, setCreateMenuIsVisible] = useState(false);

  const { user, logOut } = useAuth();
  const { handleAsideVisibility, asideVisibility } = useLayout();

  const history = useHistory();

  const handleCreateMenuVisibility = useCallback(
    () => setCreateMenuIsVisible(!createMenuIsVisible),
    [createMenuIsVisible]
  );

  return (
    <Container isVisible={asideVisibility}>
      <FiMenu size={30} onClick={handleAsideVisibility} />
      <Content>
        <img src={Logo} alt="MemoRise" />

        <ActionsContainer>
          <UserInfoContainer>
            <img src={user.avatarURL} alt={user.username} />
            <h1>{user.username}</h1>
          </UserInfoContainer>
          <CreateButtonContainer>
            <button onClick={handleCreateMenuVisibility}>CRIAR</button>
            <OptionsCreateContainer isVisible={createMenuIsVisible}>
              <ul>
                <li>Criar Lista</li>
                <li>Criar Pasta</li>
              </ul>
            </OptionsCreateContainer>
          </CreateButtonContainer>
        </ActionsContainer>

        <NavContainer>
          <ul>
            <li onClick={() => history.push("/")}>
              <FiHome size={25} />
              <p>Página Inicial</p>
            </li>

            <li onClick={() => history.push("/my-folders")}>
              <FiFolder size={25} />
              <p>Pastas</p>
            </li>

            <li onClick={() => history.push("/my-lists")}>
              <FiList size={25} />
              <p>Listas</p>
            </li>
          </ul>
        </NavContainer>

        <p onClick={logOut}>SAIR</p>
      </Content>
      <BlackWindow isVisible={asideVisibility} onClick={handleAsideVisibility} />
    </Container>
  );
}
