import { useLoaderData } from "react-router";
import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const AppsData = useLoaderData();
  //   console.log(AppsData);
  return (
    <>
      {/* <LoadingSpinner /> */}
      <Banner />
      <CardContainer AppsData={AppsData} />
    </>
  );
};

export default Home;
