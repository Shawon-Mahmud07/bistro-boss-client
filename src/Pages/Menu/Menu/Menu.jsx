import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import bgCoverImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../../../components/MenuCategory";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offeredItem = menu?.filter((item) => item.category === "offered");
  const dessertItem = menu?.filter((item) => item.category === "dessert");
  const pizzaItem = menu?.filter((item) => item.category === "pizza");
  const saladItem = menu?.filter((item) => item.category === "salad");
  const soupItem = menu?.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant | Menu</title>
      </Helmet>

      <Cover
        bgCoverImg={bgCoverImg}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>

      <SectionTitle
        subHeading={"--- Don't miss---"}
        headingBlack={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offeredItem}></MenuCategory>
      <MenuCategory
        items={dessertItem}
        img={desertImg}
        title={"DESSERTS"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={pizzaItem}
        img={pizzaImg}
        title={"PIZZA"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={saladItem}
        img={saladImg}
        title={"SALAD"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={soupItem}
        img={soupImg}
        title={"SOUP"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
