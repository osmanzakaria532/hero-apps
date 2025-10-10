import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Navber from "../components/Header/Navber";

import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navber />
      <div>
        {navigation.state === "loading" && <LoadingSpinner />}
        <Outlet />
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default RootLayout;
