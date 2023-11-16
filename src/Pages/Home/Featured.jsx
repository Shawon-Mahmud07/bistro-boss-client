import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import { Button } from "@material-tailwind/react";

const Featured = () => {
  return (
    <div
      className="w-11/12 mt-8 xl:mt-20 bg-fixed  lg:w-full mx-auto bg-contain  md:bg-cover    "
      style={{ backgroundImage: `url('${featuredImg}')` }}
    >
      <div className="pt-1 bg-gradient-to-r from-[#151515B3] to-[#151515B3]   ">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className=" w-11/12 lg:w-10/12 mx-auto xl:pb-16 lg:pb-10 pb-5  lg:flex justify-center xl:items-center gap-10">
          <div>
            <img
              className="rounded-md md:rounded-none"
              src={featuredImg}
              alt=""
            />
          </div>
          <div className="text-white pt-4  space-y-2 ">
            <h4 className="xl:text-xl">March 20, 2023</h4>
            <h4 className="xl:text-xl">WHERE CAN I GET SOME?</h4>
            <p className="text-sm xl:text-lg  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button
              variant="outlined"
              className="text-white border-0 border-b-2 lg:border-b-4 lg:text-xl font-semibold border-white "
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
