import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Flex from '../../components/sharedLayout/Flex';

import downloadImg from '../../../src/assets/icon-downloads.png';
import ratingsImg from '../../../src/assets/icon-ratings.png';
import reviewImg from '../../../src/assets/icon-review.png';
import AppNotFound from '../../components/AppNotFound/AppNotFound';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((id) => id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
  };

  const sortedInstalledApps = [...installedApps].sort((a, b) => {
    if (sortOrder === 'low-high') {
      return a.downloads - b.downloads;
    }

    if (sortOrder === 'high-low') {
      return b.downloads - a.downloads;
    }

    return 0;
  });

  return (
    <div className="py-10 md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
        <div>
          {installedApps.length === 0 ? (
            <AppNotFound navigate={navigate} />
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-10 px-2">
                <h2 className="text-2xl md:text-5xl font-bold text-[#001931] mb-3 md:mb-4">
                  Our All Applications
                </h2>
                <p className="text-base md:text-xl text-[#627382]">
                  Explore All Trending Apps on the Market developed by us
                </p>
              </div>

              {/* Sort Bar */}
              <Flex className="flex-row justify-between items-center gap-4 md:gap-0">
                <p className="text-sm md:text-base">({installedApps.length}) Apps Found</p>
                <div>
                  <select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="select border border-[#D9D9D9] w-full md:w-auto text-xs md:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#00D390] focus:border-transparent "
                  >
                    <option value="" disabled>
                      Sort By Downloads
                    </option>
                    <option value="low-high">Low-High</option>
                    <option value="high-low">High-Low</option>
                  </select>
                </div>
              </Flex>

              {/* Installed Apps List */}
              <ul className="mt-6 space-y-4">
                {sortedInstalledApps.map((appId, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 border p-4 rounded-lg"
                  >
                    {/* App Image */}
                    <div className="h-[80px] w-[80px] flex-shrink-0">
                      <img
                        src={appId.image}
                        alt={appId.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>

                    {/* App Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <p className="mb-3 font-semibold text-lg md:text-xl">
                        {appId.companyName}: {appId.title}
                      </p>

                      <Flex className="!flex-row justify-center sm:justify-start items-center gap-3 md:gap-4">
                        <Flex className="items-center gap-1!">
                          <img src={downloadImg} alt="" className="h-[15px]" />
                          <span className="text-sm">{appId.downloads}</span>
                        </Flex>
                        <Flex className="items-center gap-1!">
                          <img src={ratingsImg} alt="" className="h-[15px]" />
                          <span className="text-sm">{appId.ratingAvg}</span>
                        </Flex>
                        <Flex className="items-center gap-1!">
                          <img src={reviewImg} alt="" className="h-[15px]" />
                          <span className="text-sm">{appId.size}</span>
                        </Flex>
                      </Flex>
                    </div>

                    {/* Uninstall Button */}
                    <button
                      onClick={() => handleUninstall(appId)}
                      type="submit"
                      className="bg-[#00D390] text-white text-sm md:text-base px-4 py-2 rounded hover:bg-[#00D39095] transition-all duration-200 w-full sm:w-auto"
                    >
                      Uninstall
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
