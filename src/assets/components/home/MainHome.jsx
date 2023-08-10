import imgAboutDark from "../../../assets/images/image-about-dark.jpg";
import imgAboutLight from "../../../assets/images/image-about-light.jpg";


const MainHome = () => {
  return (
    <>
      <main className="lg:grid lg:grid-cols-7">
        <img
          src={imgAboutDark}
          alt=""
          className="lg:col-span-2 w-full h-full"
        />
        <div className="lg:col-span-3 flex flex-col mx-10 my-16 lg:m-16 gap-y-6">
          <h3 className="font-bold text-base tracking-widest uppercase">
            {" "}
            About our furniture
          </h3>
          <p className="text-gray-500 text-sm">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img
          src={imgAboutLight}
          alt=""
          className="lg:col-span-2 w-full h-full"
        />
      </main>
    </>
  );
};

export default MainHome;
