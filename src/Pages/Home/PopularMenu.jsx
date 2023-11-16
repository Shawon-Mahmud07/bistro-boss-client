import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import { Button } from "@material-tailwind/react";

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
        subHeading={"---Check it out---"}
        headingBlack={"FROM OUR MENU"}
      ></SectionTitle>

      <div className=" grid grid-cols xl:grid-cols-2  gap-5 md:gap-10">
        {menu?.map((items, index) => (
          <MenuItem key={index} items={items}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          variant="outlined"
          className="text-[#1F2937] border-0 border-b-2 lg:border-b-4 lg:text-xl font-semibold border-[#1F2937] hover:border"
        >
          View Full Menu
        </Button>
      </div>
    </div>
  );
};

export default PopularMenu;
