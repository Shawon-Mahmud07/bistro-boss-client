import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data?.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className=" grid grid-cols xl:grid-cols-2  gap-5 md:gap-10">
        {menu?.map((items, index) => (
          <MenuItem key={index} items={items}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
