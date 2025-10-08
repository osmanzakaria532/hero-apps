import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navber from "../components/Header/Navber";

const RootLayout = () => {
  return (
    <>
      <Navber />
      <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
