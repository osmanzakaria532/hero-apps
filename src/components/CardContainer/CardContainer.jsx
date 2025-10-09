import { Link } from "react-router";
import Card from "../Card/Card";

const CardContainer = ({ AppsData }) => {
  //   console.log(AppsData);

  return (
    <>
      <div className="bg-[#F5F5F5] py-10 md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0 ">
          {/* Heading Area */}
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#001931] md:mb-4">
              Trending Apps
            </h2>
            <p className="text-xl text-[#627382]">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* Cards Area */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            {AppsData.slice(0, 8).map((appData) => (
              <Card
                key={appData.id}
                appData={appData}
              />
            ))}
          </div>

          <div className=" text-center">
            <Link
              to="/apps"
              className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg py-2 px-10"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
