import React from 'react'
import {banners} from '../data/Data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BiChevronRight,BiChevronLeft } from 'react-icons/bi';


const Banner = () => {
    var settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        prevArrow:<BiChevronLeft/>,
        nextArrow:<BiChevronRight/>,
    }
  return (
    <div>
        <div className='w-full'>
        <Slider {...settings}>
            {
                banners.map((data,key)=>{
                    return (
                        <div className="" key={key}>
                            <img src={data.banner} alt="databannerimg" width={'100%'} />

                        </div>
                    )
                })
            }
        </Slider>
        </div>
    </div>
  )
}

export default Banner