import React,{useState} from 'react'
import {products} from '../data/Data';
import { BiCart } from 'react-icons/bi';
import Modal from '../common/Modal';
import Heading from '../common/Heading';

const FlashSale = () => {
    const [isModalOpen,setIsModalOpen] = useState(null)
    const handleOpen = (productId)=>{
        setIsModalOpen(productId)
    }

    const handleClose = ()=>{
        setIsModalOpen(null)
    }

  return (
    <div>
        <div >
            <div className="w-10/12 m-auto">
                <Heading heading={'Flash Sales'} description={'Hot Picks: Top Sellers, Grab Yours!'} btn={"Limited Offer"}/>
                <div className="grid grid-cols-5 gap-3">
                    {products.map((item,index)=>(
                        <div className="mt-8 border">
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
                    ))}
                </div>
            </div>
        </div>
        <Modal data={products.find((ele)=>ele.id===isModalOpen)} isModalOpen={isModalOpen} handleClose={handleClose}/>
    </div>
  )
}

export default FlashSale