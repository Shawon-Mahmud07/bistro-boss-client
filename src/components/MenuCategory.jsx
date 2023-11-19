import PropTypes from "prop-types";
import MenuItem from "../Pages/Shared/MenuItem";
import CoverCategory from "../Pages/Shared/CoverCategory";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const MenuCategory = ({ items, img, title, subtitle }) => {
  return (
    <div className="my-12 lg:my-16">
      {/* cover image */}
      {title && (
        <CoverCategory
          bgCoverImg={img}
          title={title}
          subTitle={subtitle}
        ></CoverCategory>
      )}
      {/* menu category */}
      <div className="w-11/12 lg:w-9/12 mx-auto mt-6 md:mt-12">
        <div className=" grid grid-cols xl:grid-cols-2  gap-5 md:gap-10">
          {items?.map((items, index) => (
            <MenuItem key={index} items={items}></MenuItem>
          ))}
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center mt-6">
        <Link to="/order">
          <Button
            variant="outlined"
            className="text-[#1F2937]  border-0 border-b-2 lg:border-b-4 lg:text-xl font-semibold border-[#1F2937] hover:border"
          >
            ORDER YOUR FAVOURITE FOOD
          </Button>
        </Link>
      </div>
    </div>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.array,
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default MenuCategory;
