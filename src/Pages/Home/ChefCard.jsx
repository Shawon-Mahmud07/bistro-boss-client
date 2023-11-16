import { useEffect, useState } from "react";
import ChefCardItem from "../../components/ChefCardItem";
import SectionTitle from "../../components/SectionTitle";
import PropTypes from "prop-types";

const ChefCard = () => {
  const [menu, setMenu] = useState();

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data?.filter((item) => item.category === "offered");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="w-11/12 lg:w-9/12 my-12 mx-auto">
      <SectionTitle
        subHeading={"---Should Try---"}
        headingBlack={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid grid-cols gap-8 lg:grid-cols-3 md:grid-cols-2">
        {menu?.map((item, index) => (
          <ChefCardItem key={index} item={item}></ChefCardItem>
        ))}
      </div>
    </div>
  );
};
ChefCard.propTypes = {
  items: PropTypes.array,
};
export default ChefCard;
