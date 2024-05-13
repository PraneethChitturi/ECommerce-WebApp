import React from 'react'
import { brands} from '../data/Data';
import Heading from '../common/Heading';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Brands = () => {
    var settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:6,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,

    }

  return (
    <div>
            <div className="w-10/12 m-auto">
                <Heading heading={"Best Deals on the Brands"} />
                <Slider {...settings}>
                    {brands.map((item,index)=>(
                        <div key={index}>
                        <div className="bg-white shadow-md rounded-lg m-2">
                                        
                                        <div className="flash_sale_img">
                                            <img className="rounded-t-lg  w-full object-cover" src={item.img} alt="img"/>
                                        </div>
                                        <div className="product-details p-3">
                                            <p className="bg-rose-500 p-2 rounded-br-xl font-semibold text-white">{item.title}</p>
                                            <p>
                                                {item.short_description}
                                            </p>
                                        </div>
                                    </div>
                        </div>
                    ))}
                </Slider>
            </div>
    </div>
  )
}

export default Brands