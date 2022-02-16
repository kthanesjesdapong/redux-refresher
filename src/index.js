import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);



/*
We need to import Provider from react-redux
  1. Ensure that the provider is a parent of the application.
  2. We do this so we can enable our child components to have access to the store we have created.
*/