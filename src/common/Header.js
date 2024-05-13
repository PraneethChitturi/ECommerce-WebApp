import React from 'react'
import {navbar} from '../data/Data'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="sticky top-0 z-50 shadow-xl bg-rose-100">
        <div className="flex flex-wrap justify-between items-center w-10/12 m-auto">
        <div className="flex flex-wrap text-base py-3">
          {navbar.slice(4,10).map((nav,key)=>{
            return (
              <div key={key} className="mr-5 hover:border-b-2 border-b-red-600">
                <Link className="hover:text-red-600" to={nav.path}>
                  {nav.nav}
                </Link>
              </div>
            )
          })}
          </div>

          <div className="bg-red-600 py-3 text-white font-bold px-3 uppercase text-xl transform-skew">
            <h1>Coupon Code: <span>ENTERTINA%$0</span></h1>
          </div>
        </div>
    </div>
  )
}

export default Header