import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, useLocation } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="p-6">Loading…</div>}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
