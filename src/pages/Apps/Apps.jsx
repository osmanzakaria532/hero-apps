import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AppNotFound from "../../components/AppNotFound/AppNotFound";
import Card from "../../components/Card/Card";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Flex from "../../components/sharedLayout/Flex";

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const AppsData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = searchTerm
        ? AppsData.filter((app) =>
            app.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : AppsData;
      setFilteredApps(filtered);
    }, 300); // debounce 300ms

    return () => clearTimeout(timeout);
  }, [searchTerm, AppsData]);

  // Initialize filteredApps on first load
  useEffect(() => {
    setFilteredApps(AppsData);
  }, [AppsData]);

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
        <Flex className="justify-between items-center !flex-row mb-6">
          <p className="font-semibold text-sm md:text-2xl">
            ({filteredApps.length}) Apps Found
          </p>
          <div>
            <label className="flex items-center border rounded-md overflow-hidden">
              <svg
                className="h-5 w-5 text-gray-400 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                />
              </svg>
              <input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 outline-none w-full"
              />
            </label>
          </div>
        </Flex>

        {filteredApps.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            {filteredApps.map((app) => (
              <Card
                key={app.id}
                appData={app}
              />
            ))}
          </div>
        ) : (
          <AppNotFound navigate={navigate} />
        )}
      </div>
    </div>
  );
};

export default Apps;
