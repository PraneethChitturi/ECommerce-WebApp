import React,{useState} from 'react'
import {products} from '../data/Data';
import { BiCart, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Modal from '../common/Modal';
import Heading from '../common/Heading';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BestSeller = () => {
    const [isModalOpen,setIsModalOpen] = useState(null)
    const handleOpen = (productId)=>{
        setIsModalOpen(productId)
    }
    var settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:6,
        slidesToScroll:1,
        prevArrow:<BiChevronLeft/>,
        nextArrow:<BiChevronRight/>,
        autoplay:true,

    }
    const handleClose = ()=>{
        setIsModalOpen(null)
    }

  return (
    <div>
        <div >
            <div className="w-10/12 m-auto">
                <Heading heading={'New products'} 
                        description={'Lorem Ipsum is true ver veritatis except tempor indididunt'} 
                        btn={<Link to='/shop'>View All</Link>}/>
                <Slider {...settings}>
                    {products.map((item,index)=>(
                        <div className="mt-8 border">
                            <div className="mr-4 border">
                                <div className="overflow-hidden relative">
                                    <div className="image-container relative">
                                        
                                        <div className="flash_sale_img">
                                            <img src={item.img} alt="img"/>
                                        </div>
                                        <div className="tag absolute top-0">
                                            <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">{item.tag}</p>
                                        </div>
                                    </div>
                                    <div className='product-details text-center mt-2'>
                                        <p className="mb-2">{item.short_description}</p>
                                        <p className="text-red-600" >${item.price}</p>
                                    </div>
                                    <div className="bg-rose-300 opacity-65 hover:opacity-100 text-gray-900 py-4 transition-all w-full">
                                        <div className="flex align-middle justify-center">
                                            <button className="text-2xl"><BiCart /></button>
                                            <button onClick={()=>handleOpen(item.id)} className="">{item.btn}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        <Modal data={products.find((ele)=>ele.id===isModalOpen)} isModalOpen={isModalOpen} handleClose={handleClose}/>
    </div>
  )
}

export default BestSeller