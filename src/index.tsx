import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "modules";
import AppRoutes from "routes/AppRoutes";

import reportWebVitals from "reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <AppRoutes />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
