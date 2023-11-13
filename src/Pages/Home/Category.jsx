import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="lg:my-10 mx-4 max-w-screen-2xl lg:mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="mb-12">
          <img src={slide1} alt="" />
          <h2 className="text-white lg:mr-8 font-cinzel font-normal  text-xs lg:text-3xl text-center -mt-5 lg:-mt-10">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />

          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-white mr-8 font-cinzel font-normal  text-sm lg:text-3xl text-center -mt-10">
            desserts
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
