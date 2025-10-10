import AppNotFoundImg from "../../../src/assets/App-Error.png";
import Flex from "../sharedLayout/Flex";

const AppNotFound = ({ navigate }) => {
  return (
    <>
      <Flex className="justify-center items-center text-center">
        <div>
          <Flex className="justify-center">
            <img
              src={AppNotFoundImg}
              alt=""
              className="w-[200px] mx-auto md:w-auto"
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
            onClick={() => navigate(-1)}
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 md:py-4 px-10 rounded-lg text-white cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </Flex>
    </>
  );
};

export default AppNotFound;
