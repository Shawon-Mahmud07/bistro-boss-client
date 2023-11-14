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
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section className="lg:my-10 w-11/12 mx-auto">
      <SectionTitle
        heading={"---From 11:00am to 10:00pm---"}
        subHeading={"ORDER ONLINE"}
      ></SectionTitle>
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
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="mb-12 relative  ">
          <div className="w-full">
            <img className="object-fill" src={slide1} alt="" />
          </div>
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide className="mb-12">
          <div className="w-full">
            <img src={slide1} alt="" />
          </div>
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />

          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-white py-1 text-lg lg:text-3xl font-cinzel absolute bottom-0  w-full text-center">
            desserts
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
