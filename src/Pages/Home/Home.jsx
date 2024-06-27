import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CategoryFood from "./CategoryFood";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss || Home</title></Helmet>
            <Banner></Banner>
            <div className="container mx-auto">
                <CategoryFood></CategoryFood>
                <PopularMenu></PopularMenu>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;