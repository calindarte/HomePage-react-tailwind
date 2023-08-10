import ArrowIcon from "../../../assets/components/icons/ArrowIcon";

const ArticleHome = ({hero}) => {
  return (
    <>
      <img
        src={hero.img_hero}
        alt="imageHero"
        className=" col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-full h-full"
      />
      <div className="col-start-1 col-end-4 row-start-3 row-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 mx-10 lg:mx-28 my-16 lg:my-20 flex flex-col gap-y-6 ">
        <h1 className="font-bold text-3xl"> {hero.title}</h1>
        <p className="text-gray-500 text-sm">{hero.description}</p>
        <div className="flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black cursor-pointer">
          <span className="tracking-[1rem] uppercase text-base font-medium">
            Shop now{" "}
          </span>
          <ArrowIcon />
        </div>
      </div>
    </>
  );
};

export default ArticleHome;
