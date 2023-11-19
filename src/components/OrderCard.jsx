import PropTypes from "prop-types";
import ChefCardItem from "./ChefCardItem";
const OrderCard = ({ items }) => {
  return (
    <div>
      <div className="grid mt-4 md:mt-8 grid-cols gap-8 lg:grid-cols-3 md:grid-cols-2">
        {items?.map((item, index) => (
          <ChefCardItem key={index} item={item}></ChefCardItem>
        ))}
      </div>
    </div>
  );
};
OrderCard.propTypes = {
  items: PropTypes.array,
};
export default OrderCard;
