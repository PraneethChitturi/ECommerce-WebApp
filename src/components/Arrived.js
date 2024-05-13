import React,{useRef} from 'react'
import {arriveItems} from '../data/Data';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Heading from '../common/Heading';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bannerimg from "../images/obsessions_ecom/4.webp";

const Arrived = () => {
    var settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:6,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,

    }

    const slideRef = useRef(null)
    const goToPrevSlide = ()=>{
        slideRef.current.slickPrev()
    }

    const goToNextSlide = ()=>{
        slideRef.current.slickNext()
    }

  return (
    <div>
        <div className="bg-gray-200 my-4 py-8">
            <div className="w-10/12 m-auto">
                <div className="flex justify-between items-center">
                    <Heading heading={'Just Arrived'} />
                    <div className="flex text-4xl">
                        <BiChevronLeft className="arrows" onClick={goToPrevSlide}/>
                        <BiChevronRight className="arrows" onClick={goToNextSlide}/>
                    </div>
                </div>
                <Slider {...settings} ref={slideRef}>
                    {arriveItems.map((item,index)=>(
                        <div key={index}>
                            <div className="mr-4"><img src={item.img} alt="img"></img></div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

        <div className="mt-4 w-10/12 m-auto ">
            <img className="rounded-lg" src={bannerimg} alt="banner-img"/>
        </div>
    </div>
  )
}

export default Arrived