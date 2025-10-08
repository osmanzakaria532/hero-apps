import { Link } from "react-router";
import footer_logo from "../../../src/assets/logo.png";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Flex from "../sharedLayout/Flex";

const Footer = () => {
  return (
    <>
      <div className="bg-[#001931]">
        <div className="max-w-[1200px] mx-auto py-[35px] px-3 xl:px-0">
          <Flex className="flex-row justify-between items-center md:items-start ">
            <div>
              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <img
                  src={footer_logo}
                  alt=""
                  className="w-[40px]"
                />
                <span className="text-white text-lg font-semibold">
                  HERO.IO
                </span>
              </Link>
            </div>
            <div>
              <h6 className="text-white mb-2 md:mb-4">Social Links</h6>
              <Flex className="!gap-3 flex-row">
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="text-white text-xl"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="text-white text-xl"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  className="text-white text-xl"
                >
                  <FaFacebook />
                </Link>
              </Flex>
            </div>
          </Flex>
          <div>
            <p className="text-[#FAFAFA] text-center text-sm md:text-base mt-8">
              Copyright © 2025 - All right reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
