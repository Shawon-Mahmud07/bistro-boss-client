import Banner from "../Banner";
import BistroCover from "../BistroCover";
import Category from "../Category";
import PopularMenu from "../PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroCover></BistroCover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
