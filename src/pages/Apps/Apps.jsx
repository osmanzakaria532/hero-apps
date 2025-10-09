import { useLoaderData } from "react-router";
import Card from "../../components/Card/Card";
import Flex from "../../components/sharedLayout/Flex";

const Apps = () => {
  const AppsData = useLoaderData();

  return (
    <div className="py-10 md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-3 xl:px-0 text-center mb-3 md:mb-10">
        <h2 className="text-xl md:text-5xl font-bold text-[#001931] md:mb-4">
          Our All Applications
        </h2>
        <p className="md:text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
        <Flex className="justify-between items-center !flex-row">
          <p className="font-semibold text-sm md:text-2xl">
            ({AppsData.length}) Apps Found
          </p>
          <div>
            <label className="input border">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  ></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
        </Flex>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
          {AppsData.map((appData) => (
            <Card
              key={appData.id}
              appData={appData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
