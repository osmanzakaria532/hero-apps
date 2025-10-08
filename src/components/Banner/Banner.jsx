import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router";

const BannerImg = "../../../src/assets/hero.png";

const Banner = () => {
  const status = [
    {
      id: 1,
      title: "Total Downloads",
      value: "29.6M",
      change: "21% More Than Last Month",
    },
    {
      id: 2,
      title: "Total Reviews",
      value: "906K",
      change: "46% More Than Last Month",
    },
    {
      id: 3,
      title: "Active Apps",
      value: "132+",
      change: "31 More Will Launch",
    },
  ];

  return (
    <div className="py-10 md:py-[80px]">
      {/* Banner Top */}
      <div className="max-w-[1200px] mx-auto px-3 xl:px-0 text-center mb-6">
        <h1 className="text-[#001931] text-4xl lg:text-7xl font-bold lg:leading-20 mb-4">
          We Build
          <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {" "}
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-[#627382] md:px-[80px] lg:px-[215px] ">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link
            to="https://play.google.com/store"
            target="_blank"
            className="flex items-center px-3 md:px-6 py-1 md:py-3 border-2 border-[#632EE3] text-[#632EE3] rounded-lg hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white transition text-sm md:text-base"
          >
            <FaGooglePlay className="w-6 h-6 mr-2" />
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="flex items-center px-3 md:px-6 py-1 md:py-3 border-2 border-[#632EE3] text-[#632EE3] rounded-lg hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white transition text-sm md:text-base"
          >
            <FaApple className="w-6 h-6 mr-2" />
            App Store
          </Link>
        </div>
      </div>

      {/* Banner Bottom */}
      <div>
        <div className="flex justify-center px-3 xl:px-0">
          <img
            src={BannerImg}
            alt=""
            className="text-center"
          />
        </div>
        <div className="py-10 md:py-[80px] text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-10">
              Trusted by Millions, Built for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {status.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg"
                >
                  <h3>{item.title}</h3>
                  <p className="font-extrabold text-5xl lg:text-6xl my-4">
                    {item.value}
                  </p>
                  <p>{item.change}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
