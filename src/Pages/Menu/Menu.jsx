import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/Shared/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offeredItems = menu.filter((item) => item.category === "offered");
    const dessertItems = menu.filter((item) => item.category === "dessert");
    const pizzaItems = menu.filter((item) => item.category === "pizza");
    const soupItems = menu.filter((item) => item.category === "soup");
    const saladItems = menu.filter((item) => item.category === "salad");
    return (
        <div>
            <Helmet><title>Bistro Boss || Menu</title></Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>

            <div className="container mx-auto">
                <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offeredItems}></MenuCategory>
            <MenuCategory items={dessertItems} title={'dessert'} img={dessertImg}></MenuCategory>
            <MenuCategory items={pizzaItems} title={'pizza'} img={pizzaImg}></MenuCategory>
            <MenuCategory items={saladItems} title={'salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={soupItems} title={'soup'} img={soupImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;