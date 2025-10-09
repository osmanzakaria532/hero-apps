import { Suspense } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import Navber from "../components/Header/Navber";

const RootLayout = () => {
  return (
    <>
      <Navber />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <p>Loading content...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default RootLayout;
