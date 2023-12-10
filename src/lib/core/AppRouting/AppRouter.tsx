import {  Navigate, Route, Routes } from "react-router-dom";
import HomeForDesktops from "../../presentation/pages/mainPages/home/homeForDesktops";
import { MainIndex } from "../../presentation/main-index";
import { OnlineEcommerceIndex } from "../../presentation/pages/mainPages/solution/online-ecommerce/onlineEcommerceIndex";
import { Manufacturing } from "../../presentation/pages/mainPages/solution/manufacture/manufacturing";
import { PackagesCargo } from "../../presentation/pages/mainPages/solution/packages-cargo/packages";
import { About } from "../../presentation/pages/mainPages/about/about";
import { ContactUs } from "../../presentation/pages/mainPages/contact/contactUs";


const AppRouter = () => (
 
    <Routes>
      {/* Main */}
      <Route path="/" element={<MainIndex/>}>
        <Route index element={<Navigate replace to="home"/>} />
        <Route path="home" element={<HomeForDesktops/>} />
        <Route path="solution" element={<OnlineEcommerceIndex/>} />
        <Route path="manufacturing" element={<Manufacturing/>} />
        <Route path="packages" element={<PackagesCargo/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<ContactUs/>} />
      </Route>
      {/* Not found */}
      <Route path="*"> Page not found! 🧐</Route>
    </Routes>
  
);
export default AppRouter;
