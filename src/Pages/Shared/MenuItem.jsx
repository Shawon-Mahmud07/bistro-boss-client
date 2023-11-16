import PropTypes from "prop-types";
const MenuItem = ({ items }) => {
  const { name, recipe, price, image } = items;
  return (
    <div className=" py-4  shadow-lg flex flex-col  pl-3 pr-3 md:mr-0 md:pl-0   md:flex-row md:gap-5 md:space-x-2">
      <img
        className="w-28 flex  h-28 rounded-tr-full rounded-br-full  rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-[#151515] font-normal font-cinzel lg:text-xl">
          {name} ------
        </h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506] lg:text-xl">${price}</p>
    </div>
  );
};
MenuItem.propTypes = {
  items: PropTypes.object,
};
export default MenuItem;
