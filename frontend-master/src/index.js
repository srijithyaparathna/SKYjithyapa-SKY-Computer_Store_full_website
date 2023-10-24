import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store/store";
import * as styles from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
const defaultTheme = styles.createTheme();
root.render(
  <React.StrictMode>
    <styles.ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <App />
    </Provider>
    </styles.ThemeProvider>

  </React.StrictMode>
);

