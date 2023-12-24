import AppRouter from "./lib/core/AppRouting/AppRouter";
import "./custom.scss";
import {  HashRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 200, 
    });
  }, []);
  return (
    <>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </>
  );
}

export default App;
