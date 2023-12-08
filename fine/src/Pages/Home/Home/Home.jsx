import Footer from "../../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Plans from "../Plans/Plans";
import Trending from "../Trending/Trending";
import TrendingCard from "../Trending/TrendingCard";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingCard></TrendingCard>
           <Trending></Trending>
           <Plans></Plans>
           <Footer></Footer>
        </div>
    );
};

export default Home;