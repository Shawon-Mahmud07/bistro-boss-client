import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading, headingBlack }) => {
  return (
    <div className="text-center mt-7 lg:mt-20 mb-6 lg:mb-12">
      <p className="italic font-normal lg:mb-4 mb-2 text-base lg:text-xl text-[#D99904]">
        {subHeading}
      </p>
      {heading && (
        <h3 className="text-white font-normal text-2xl lg:text-4xl border-y-2 lg:border-y-4 w-52 lg:w-full max-w-[424px] py-2 lg:py-5 mx-auto">
          {heading}
        </h3>
      )}
      {headingBlack && (
        <h3 className="text-[#151515]  font-normal text-2xl lg:text-4xl border-y-2 lg:border-y-4 w-52 lg:w-full max-w-[424px] py-2 lg:py-5 mx-auto">
          {headingBlack}
        </h3>
      )}
    </div>
  );
};
SectionTitle.propTypes = {
  heading: PropTypes.string,
  headingBlack: PropTypes.string,
  subHeading: PropTypes.string,
};
export default SectionTitle;
