/* eslint-disable react/prop-types */
import Cover from "../../Components/Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ['salad', 'pizza', 'soups', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const drinksItems = menu.filter((item) => item.category === "drinks");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");
  const saladItems = menu.filter((item) => item.category === "salad");
  return (
    <div>
                   <Helmet><title>Bistro Boss || Order</title></Helmet>
      <Cover img={orderImg} title={"order food"}></Cover>

      <div className="container mx-auto">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={saladItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizzaItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soupItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessertItems}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinksItems}></OrderTab>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
