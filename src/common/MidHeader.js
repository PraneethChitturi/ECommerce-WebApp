import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/obsession_logo.png';
import {navbar} from '../data/Data.js'
import { BiSolidShoppingBag, BiUser } from 'react-icons/bi';
import Sidebar from '../common/Sidebar'
import { useSelector } from 'react-redux';

const MidHeader = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  const toggleSidebar = ()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  const {totalItems}=useSelector((state)=>state.cart)
  return (
    <div>
    <div>
      <div className="p-4">
        <div className="w-10/12 m-auto">
            <ul className='flex place-content-between items-center'>
                <li className="flex items-center">
                    <Link to="/" className="logo">
                      <img src={logo} alt='logo_img' />
                    </Link>
                    {navbar.slice(1,4).map((link,key)=>{
                      return (
                        <Link to={link.path} key={key} className="mr-2 text-base  capitalize pr-4 pl-4 hover:text-red-600">{link.nav}</Link>
                      )
                    })}
                </li>
                <li className="flex place-items-center">
                  <input type="search" placeholder="Search..." className="w-full p-2 border rounded-lg mr-5 outline-none ring-offset-0"/>
                    <Link onClick={toggleSidebar} className="relative mr-5 text-2xl text-gray-500 rounded-full border p-2">
                      <BiSolidShoppingBag/>
                      <div className="items_count">
                        <span className="text-white">{totalItems}</span>
                      </div>
                    </Link>
                    <Link className="relative mr-5 text-2xl text-gray-500 rounded-full border p-2">
                      <BiUser />
                    </Link> 
                </li>
            </ul>
        </div>
    </div>
    </div>
    <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar}/>
    </div>
  )
}

export default MidHeader