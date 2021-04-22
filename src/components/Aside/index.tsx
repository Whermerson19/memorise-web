import { useAuth } from "../../hooks/auth";
import { useLayout } from "../../hooks/layout";

import { FiMenu, FiHome, FiFolder, FiList } from "react-icons/fi";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import {
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
  const { handleAsideVisibility, asideVisibility } = useLayout()
 
  const handleCreateMenuVisibility = useCallback(
    () => setCreateMenuIsVisible(!createMenuIsVisible),
    [createMenuIsVisible]
  );

  return (
    <Container isVisible={asideVisibility} >
      <FiMenu size={30} onClick={handleAsideVisibility} />
      <Content>
        <img src={Logo} alt="MemoRise" />

        <ActionsContainer>
          <UserInfoContainer>
            <img src={user.avatarURL} alt={user.username} />
            <h1>{user.username}</h1>
          </UserInfoContainer>
          <CreateButtonContainer>
            <button
              onClick={handleCreateMenuVisibility}
            >
              CRIAR
            </button>
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
            <li>
              <FiHome size={25} />
              <Link to="#">Página Inicial</Link>
            </li>

            <li>
              <FiFolder size={25} />
              <Link to="#">Pastas</Link>
            </li>

            <li>
              <FiList size={25} />
              <Link to="#">Listas</Link>
            </li>
          </ul>
        </NavContainer>

        <p onClick={logOut}>SAIR</p>
      </Content>
    </Container>
  );
}
