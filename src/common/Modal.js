import React,{useEffect, useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import { PiMinus, PiPlus } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import { addToCart, getCartTotal, updateQuantity } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const Modal = ({data,isModalOpen,handleClose}) => {
    const [qty,setQty] =useState(1) 
    const [addedItemToCart,setAddedItemToCart] = useState(false)
    const dispatch = useDispatch()
    
    const addItemToCart=(product)=>{
        let totalPrice=qty*product.price
        const tempProduct = {
            ...product,
            quantity:qty,
            totalPrice
        }

        dispatch(addToCart(tempProduct))
        dispatch(getCartTotal())
        setAddedItemToCart(true)
    }
    
    useEffect(()=>{
        if(isModalOpen){
            document.body.classList.add("modal-open")
        }else{
            setQty(1)
            setAddedItemToCart(false)
            document.body.classList.remove("modal-open")
        }
    },[isModalOpen])

    const increaseQuantity = (itemId,currentQuantity)=>{
        const newQty = currentQuantity+1
        setQty(newQty)
        dispatch(updateQuantity({id:itemId,quantity:newQty}))
    }

    const decreaseQuantity = (itemId,currentQuantity)=>{
        const newQty = Math.max(currentQuantity-1,1)
        setQty(newQty)
        dispatch(updateQuantity({id:itemId,quantity:newQty}))
    }

  return (
    <div>
        {isModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content w-2/3 relative bg-white overflow">
                    <span className="absolute top-0 right-0 p-4" onClick={()=>handleClose()}>
                        <FaTimes/>
                    </span>
                    <div className="flex">
                        <div className='relative'>
                                    <div className="flash_sale_img">
                                        <img src={data.img} alt="img"/>
                                    </div>
                                    <div className="tag absolute top-0">
                                        <p className="bg-red-500 p-2 rounded-br-xl font-semibold text-white">{data.tag}</p>
                                    </div>
                                <div className='product-details text-center mt-6'>
                                    <p className="mb-2">{data.short_description}</p>
                                    <p className="text-red-600 text-xl" >${data.price}</p>
                                    <p className="mt-2" >${data.description}</p>
                                    <div className="flex items-center">
                                        <p className="font-semibold mr-2">Shades:</p>
                                        <select name="shades" id="sahges" className="border border-gray-300 rounded-md p-2
                                            focus:outline-none">
                                            <option value="options">1 Choose an Option</option>
                                            <option value="options">2 Choose an Option</option>
                                            <option value="options">3 Choose an Option</option>
                                            <option value="options">4 Choose an Option</option>
                                            <option value="options">5 Choose an Option</option>
                                        </select>
                                    </div>
                                    <p className="text-green-700">In Stock 400 Items</p>
                                    <div className="flex items-center">
                                        <div className="flex mr-3">
                                            <button className="border mt-4 py-3 px-6" onClick={()=>{
                                                decreaseQuantity(data.id,qty)
                                            }}><PiMinus/></button>
                                            <span className="border mt-4 py-3 px-6 count" >{qty}</span>
                                            <button className="border mt-4 py-3 px-6" onClick={()=>{
                                                increaseQuantity(data.id,qty)
                                            }}><PiPlus/></button>
                                        </div>
                                        <div className="addtocart mr-3">
                                            {addedItemToCart? (
                                                <button onClick={()=>addItemToCart(data)} className="mt-4 px-6 py-3 text-white">
                                                    <Link to="/cart">View Cart</Link>
                                                </button>
                                                ) : (
                                                    <button onClick={()=>addItemToCart(data)} className="mt-4 px-6 py-3 text-white">Add to Cart</button>
                                                ) }
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div>
                    products details
                </div>
            </div>
        )}
    </div>
  )
}

export default Modal