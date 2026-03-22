import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import CardContainer from '../../components/CardContainer/CardContainer';

const Home = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const AppsData = useLoaderData();
  return (
    <>
      {/* <LoadingSpinner /> */}
      <Banner />
      <CardContainer AppsData={AppsData} />
    </>
  );
};

export default Home;
