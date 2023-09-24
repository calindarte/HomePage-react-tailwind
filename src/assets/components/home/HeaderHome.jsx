import { useState } from "react";
import LeftIcon from "../../../assets/components/icons/LeftIcon";
import RightIcon from "../../../assets/components/icons/RightIcon";
import ArticleHome from "./ArticleHome";

import imgHero1 from "../../../assets/images/desktop-image-hero-1.jpg"
import imgHero2 from "../../../assets/images/desktop-image-hero-2.jpg"
import imgHero3 from "../../../assets/images/desktop-image-hero-3.jpg"

const ARRAY_HERO = [
    {
      title: "Discover innovative ways to decorate",
      description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      img_hero: imgHero1,
      id: 1
    },
    {
      title: "We are available all across the globe",
      description: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      img_hero:imgHero2,
      id: 2
    },
    {
      title: "Manufactured with the best materials",
      description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      img_hero: imgHero3,
      id: 3
    },
  ];


const HeaderHome = () => {

    const [index, setIndex] = useState(0)

    const handlePrev = ()=>{
        if(index === 0){
            return setIndex(ARRAY_HERO.length -1)
        }
        setIndex(index-1)
    }
    const handleNext = ()=>{
        if(index === ARRAY_HERO.length -1){
            return  setIndex(0)
        }
        setIndex(index + 1)
    }

  return (
    <>
      <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
        <ArticleHome hero={ARRAY_HERO[index]}/>
        <div className=" bg-black flex col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3 ">
          <button className="w-full hover:bg-gray-500" onClick={handlePrev}>
            <LeftIcon className="mx-auto" />
          </button>
          <button className="w-full hover:bg-gray-500" onClick={handleNext}>
            <RightIcon className="mx-auto" />
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderHome;
