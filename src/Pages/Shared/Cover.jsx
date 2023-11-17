import PropTypes from "prop-types";
const Cover = ({ bgCoverImg, title, subTitle }) => {
  return (
    <div
      className="h-[40vh] md:h-[60vh] lg:h-[95vh] bg-cover flex items-center"
      style={{ backgroundImage: `url('${bgCoverImg}')` }}
    >
      <div className=" w-10/12 md:w-9/12 mx-auto text-center bg-[#15151599]  font-cinzel text-white">
        <h1 className="text-2xl lg:text-3xl xl:text-6xl   pt-8 md:pt-16 xl:pt-32  md:font-bold">
          {title}
        </h1>
        <h3 className=" md:text-lg 2xl:text-4xl lg:text-2xl pb-8 md:pb-16 lg:pb-32   md:font-semibold">
          {subTitle}
        </h3>
      </div>
    </div>
  );
};
Cover.propTypes = {
  bgCoverImg: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
export default Cover;
