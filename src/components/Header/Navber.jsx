import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import navbar_logo from "../../../src/assets/logo.png";

const Navber = () => {
  const menuItems = (
    <>
      <nav className="*:mr-3 lastchild:*:mr-0 font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/installation">Installation</NavLink>
      </nav>
    </>
  );
  return (
    <>
      <div className="bg-base-100 shadow-sm ">
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="lg:hidden pr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow"
                >
                  <li className="bg-white py-3">{menuItems}</li>
                </ul>
              </div>
              <Link
                to="/"
                className="flex items-center gap-1"
              >
                <img
                  src={navbar_logo}
                  alt=""
                  className="w-[35px] md:w-[40px]"
                />
                <span className="md:text-lg font-bold  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  HERO.IO
                </span>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">{menuItems}</div>
            <div className="navbar-end ">
              <Link
                to="https://github.com/osmanzakaria532/hero-apps"
                target="_blank"
                className="flex items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-2  md:py-3 md:px-4 font-semibold rounded-lg"
              >
                <FaGithub className="mr-2" />
                Contribute
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
