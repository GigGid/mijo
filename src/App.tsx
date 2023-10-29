import AppRouter from "./lib/core/AppRouting/AppRouter";
import "./custom.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
