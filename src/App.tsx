import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyle from "./styles/Global";

import AuthProvider from "./hooks/auth";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
