import React from 'react'
import {banners, category} from '../data/Data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BiChevronRight,BiChevronLeft } from 'react-icons/bi';


const Category = () => {
    var settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:8,
        slidesToScroll:1,
        arrows:false,
    }
  return (
    <div className="bg-rose-100">
        <div className='w-10/12 m-auto'>
        <Slider {...settings}>
            {
                category.map((data,key)=>{
                    return (
                        <div className="" key={key}>
                            <div className="overflow-hidden m-2 text-center">
                                <div className="category-img-wrapper">
                                    <img src={data.img} 
                                        alt="databannerimg" 
                                        className="w-auto h-full object-cover rounded-full" />
                                </div>
                                <p className="text-sm capitalize">{data.name}</p>
                            </div>
                            
                        </div>
                    )
                })
            }
        </Slider>
        </div>
    </div>
  )
}

export default Category