import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Reset from "./styles/Reset.js";
import GlobalStyle from "./styles/GlobalStyles.js";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Reset />
      <GlobalStyle />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
