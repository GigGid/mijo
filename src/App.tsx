import AppRouter from "./lib/core/AppRouting/AppRouter";
import "./custom.scss";
import { BrowserRouter, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </>
  );
}

export default App;
