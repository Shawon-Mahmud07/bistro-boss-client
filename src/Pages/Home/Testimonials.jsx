import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
// react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quoteImg from "../../assets/icon/quotepng.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://bistro-boss-server-one-pi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="w-full lg:w-9/12 mx-auto">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        headingBlack={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="w-full md:w-10/12 mx-auto text-center space-y-2">
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                  className="h-7 w-7 md:h-12 md:w-12 lg:h-16 lg:w-16"
                />
              </div>
              <div className="flex justify-center ">
                <img
                  className="xl:h-24 xl:w-24 md:h-14 md:w-14 h-10 w-10"
                  src={quoteImg}
                  alt=""
                />
              </div>
              <p className="text-[#444] text-xs mx-8 md:text-sm  xl:text-xl">
                {review.details}
              </p>
              <h4 className="text-[#CD9003] text-lg md:text-xl xl:text-3xl font-medium">
                {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
