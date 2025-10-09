import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";

const Home = () => {
  const AppsData = useLoaderData();
  //   console.log(AppsData);
  return (
    <>
      <Banner />
      <CardContainer AppsData={AppsData} />
    </>
  );
};

export default Home;
