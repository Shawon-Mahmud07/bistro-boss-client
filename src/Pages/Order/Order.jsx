import Cover from "../Shared/Cover";
import CoverImg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
// react - tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import OrderCard from "../../components/OrderCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["SALAD", "PIZZA", "SOUP", "DESSERTS", "DRINKS"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );
  const [menu] = useMenu();

  const saladItem = menu?.filter((item) => item.category === "salad");
  const pizzaItem = menu?.filter((item) => item.category === "pizza");
  const soupItem = menu?.filter((item) => item.category === "soup");
  const dessertItem = menu?.filter((item) => item.category === "dessert");
  const drinksItem = menu?.filter((item) => item.category === "drinks");

  return (
    <div>
      {/* page title */}
      <Helmet>
        <title>Bistro Boss Restaurant | Our Shop</title>
      </Helmet>
      {/* cover image */}
      <Cover
        bgCoverImg={CoverImg}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      {/* // react - tabs */}
      <div className="w-11/12 lg:w-9/12 my-6 md:my-12 mx-auto">
        <Tabs
          className="text-center md:mt-16"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="text-base md:text-xl font-medium md:font-bold ">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderCard items={saladItem}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={pizzaItem}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={soupItem}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={dessertItem}></OrderCard>
          </TabPanel>
          <TabPanel>
            <OrderCard items={drinksItem}></OrderCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
