import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import downloads from "../../../src/assets/icon-downloads.png";
import Ratings from "../../../src/assets/icon-ratings.png";
import Review from "../../../src/assets/icon-review.png";
import Flex from "../../components/sharedLayout/Flex";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);

  const { id } = useParams();
  const ConvertedId = parseInt(id);
  const AppData = useLoaderData();

  const singleApp = AppData.find((app) => app.id === ConvertedId);

  const sortedRatings = [...singleApp.ratings].sort((a, b) => {
    const getNumber = (str) => parseInt(str);
    return getNumber(b.name) - getNumber(a.name);
  });

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isInstalled = installedApps.some((app) => app.id === ConvertedId);
    if (isInstalled) setInstalled(true);
  }, [ConvertedId]);

  const handleClick = (app) => {
    setInstalled(true);

    let installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    const isAlreadyInstalled = installedApps.some(
      (installedApp) => installedApp.id === app.id
    );

    if (!isAlreadyInstalled) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));

      toast.success("App Installed Successfully! 🎉", {
        position: "top-right",
        autoClose: 2000,
      });

      console.log("Installed App:", app);
    }
  };

  return (
    <>
      <div className="py-10 md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
          <Flex className="!w-full flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            {/* Left Side Image */}
            <div className="overflow-hidden w-[150px] h-[150px] md:w-[285px] md:h-[285px] rounded-xl flex-shrink-0">
              <img
                src={singleApp.image}
                alt={singleApp.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side Details */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">
                {singleApp.companyName}: {singleApp.title}
              </h2>
              <p className="text-sm md:text-base mt-2">
                Developed by{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  productive.io
                </span>
              </p>

              <div className="border-t border-[#001931] w-full my-3"></div>

              <Flex className="!flex-row justify-center md:justify-start gap-6 md:gap-10">
                <div className="text-center">
                  <img
                    src={downloads}
                    alt=""
                    className="mx-auto w-8 md:w-10"
                  />
                  <p className="mt-2 text-sm text-gray-500">Downloads</p>
                  <div className="text-xl md:text-[32px] font-extrabold">
                    {singleApp.downloads.toLocaleString()}
                  </div>
                </div>

                <div className="text-center">
                  <img
                    src={Ratings}
                    alt=""
                    className="mx-auto w-8 md:w-10"
                  />
                  <p className="mt-2 text-sm text-gray-500">Average Rating</p>
                  <div className="text-xl md:text-[32px] font-extrabold">
                    {singleApp.ratingAvg}
                  </div>
                </div>

                <div className="text-center">
                  <img
                    src={Review}
                    alt=""
                    className="mx-auto w-8 md:w-10"
                  />
                  <p className="mt-2 text-sm text-gray-500">Total Reviews</p>
                  <div className="text-xl md:text-[32px] font-extrabold">
                    {singleApp.reviews.toLocaleString()}K
                  </div>
                </div>
              </Flex>

              <button
                onClick={() => handleClick(singleApp)}
                disabled={installed}
                className="bg-[#00D390] py-3 md:py-4 px-5 md:px-6 rounded-lg text-white inline-block font-semibold mt-6 hover:bg-[#00b87c] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {installed ? "Installed" : `Install Now (${singleApp.size} MB)`}
              </button>
            </div>
          </Flex>

          <div className="border-t border-[#001931] w-full my-6"></div>

          {/* Ratings Bar Chart */}
          <div className="bg-gray-50 p-4 md:p-5 rounded-xl shadow-sm mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
              Ratings
            </h2>
            <ResponsiveContainer
              width="100%"
              height={250}
            >
              <BarChart
                layout="vertical"
                data={sortedRatings}
                margin={{ top: 0, right: 20, left: 30, bottom: 0 }}
              >
                <XAxis type="number" />
                <YAxis
                  dataKey="name"
                  type="category"
                />
                <Bar
                  dataKey="count"
                  fill="#FF8C00"
                  radius={[4, 4, 4, 4]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="border-t border-[#001931] w-full my-6"></div>

          {/* Description */}
          <div className="px-2">
            <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-left">
              Description
            </h4>
            <div className="space-y-4 text-justify md:text-left leading-relaxed text-gray-700">
              <p>{singleApp.description.slice(0, 600)}</p>
              <p>{singleApp.description.slice(600, 1200)}</p>
              <p>{singleApp.description.slice(1200, 1800)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
