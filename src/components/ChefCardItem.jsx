import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
const ChefCardItem = ({ item }) => {
  const { name, recipe, image } = item;
  console.log(name, recipe, image);
  return (
    <Card className="flex flex-col   overflow-hidden bg-[#F3F3F3]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <div>
          <img className="object-cover w-full" src={image} alt="" />
        </div>
      </CardHeader>

      <CardBody className="text-center mt-auto  text-[#151515]">
        <h3 className=" text-lg lg:text-xl lg:font-semibold">{name}</h3>
        <p className="text-sm lg:text-base mt-3 font-normal">{recipe}</p>
      </CardBody>

      <div className="flex mb-4 mt-auto items-center  justify-center">
        <Button
          ripple={false}
          className="bg-[#E8E8E8]  text-[#BB8506] text-base  xl:text-xl font-medium border-0 border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:border"
        >
          add to cart
        </Button>
      </div>
    </Card>
  );
};
ChefCardItem.propTypes = {
  item: PropTypes.object,
};
export default ChefCardItem;
