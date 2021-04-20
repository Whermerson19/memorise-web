import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/Global";

import AppProvider from "./hooks";

import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
