import PropTypes from "prop-types";
const CoverCategory = ({ bgCoverImg, title, subTitle }) => {
  return (
    <div
      className="h-[40vh] md:h-[60vh] lg:h-[80vh] bg-cover flex items-center"
      style={{ backgroundImage: `url('${bgCoverImg}')` }}
    >
      <div className=" px-1 md:px-10 lg:px-20  w-11/12 md:w-9/12 mx-auto text-center bg-[#15151599]  font-cinzel text-white">
        <h1 className="text-2xl mb-0 md:mb-4 lg:text-3xl xl:text-5xl   pt-4 md:pt-8 xl:pt-16  md:font-semibold">
          {title}
        </h1>
        <h3 className=" text-sm lg:text-lg pb-4 md:pb-8 lg:pb-16   md:font-medium">
          {subTitle}
        </h3>
      </div>
    </div>
  );
};
CoverCategory.propTypes = {
  bgCoverImg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default CoverCategory;
