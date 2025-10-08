import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navber from "../components/Header/Navber";

const RootLayout = () => {
  return (
    <>
      <Navber />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
