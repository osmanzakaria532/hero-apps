import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Flex from "../sharedLayout/Flex";

const Card = ({ appData }) => {
  const navigate = useNavigate(); // ✅ get navigate function once
  const { id, image, companyName, title, size, ratingAvg } = appData;

  const handleClick = (id) => {
    console.log("AppDetails Clicked", id);
    navigate(`/apps/appDetails/${id}`);
  };

  return (
    <div
      className="bg-white shadow-lg p-6 rounded-xl cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <Flex className="justify-center">
        <img
          src={image}
          alt={title}
        />
      </Flex>
      <div className="mt-2">
        <div className="my-4">
          <span className="font-semibold">{companyName}</span>:{" "}
          <span>{title}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Flex className="items- !flex-row bg-[#F1F5E8] text-[#00D390] gap-2 py-1 px-3 font-medium rounded-md">
            <LuDownload />
            {size}
          </Flex>
          <Flex className="items-center !flex-row bg-[#FFF0E1] text-[#FF8811] gap-2 py-1 px-3 font-medium rounded-md">
            <FaStar className="text-yellow-500 inline-block mr-1" />
            {ratingAvg}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Card;
