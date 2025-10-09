import { useNavigate } from "react-router";

import ErrorImg from "../../../src/assets/error-404.png";
import Flex from "../../components/sharedLayout/Flex";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Flex className=" justify-center">
          <div className="text-center">
            <Flex className=" justify-center">
              <img
                src={ErrorImg}
                alt=""
              />
            </Flex>
            <h2 className="text-xl md:text-5xl font-bold text-[#001931] my-5 md:my-10 ">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="text-[#627382] mb-5 md:mb-10">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 md:py-4 px-10 rounded-lg text-white"
            >
              Go Back
            </button>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default ErrorPage;
