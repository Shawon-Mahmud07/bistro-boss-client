import bgCoverImg from "../../assets/home/chef-service.jpg";
const BistroCover = () => {
  return (
    <div
      className="w-11/12 lg:w-9/12 mx-auto py-5 lg:py-10 my-10  bg-no-repeat h-full  bg-cover"
      style={{ backgroundImage: `url(${bgCoverImg})` }}
    >
      <div className=" text-center">
        <div className="bg-white lg:py-10 lg:px-20 py-5 lg:w-9/12 w-11/12 rounded-md lg:rounded-none  mx-auto">
          <h1 className="lg:mb-5 text-2xl lg:text-4xl font-cinzel font-normal">
            Bistro Boss
          </h1>
          <p className=" text-xs lg:text-base px-4 text-justify lg:text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroCover;
