import Banner from "../Banner";
import BistroCover from "../BistroCover";
import CallUs from "../CallUs";
import Category from "../Category";
import ChefCard from "../ChefCard";
import Featured from "../Featured";
import PopularMenu from "../PopularMenu";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroCover></BistroCover>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefCard></ChefCard>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
