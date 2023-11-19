import useMenu from "../../Hooks/useMenu";
import ChefCardItem from "../../components/ChefCardItem";
import SectionTitle from "../../components/SectionTitle";
import PropTypes from "prop-types";

const ChefCard = () => {
  const [menu] = useMenu();
  const offeredItem = menu?.filter((item) => item.category === "offered");

  return (
    <div className="w-11/12 lg:w-9/12 my-12 mx-auto">
      <SectionTitle
        subHeading={"---Should Try---"}
        headingBlack={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid  grid-cols gap-8 lg:grid-cols-3 md:grid-cols-2">
        {offeredItem?.map((item, index) => (
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
