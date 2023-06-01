import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <>
        <h1>this is about Products </h1>
       <NavLink to={'shirts'} className="text-orange-950 font-bold  px-5  m-16  active:text-rose-400 underline">Shirt</NavLink>
       <NavLink to={'jeans'} className="text-orange-950 font-bold underline m-16  px-5"> Jeans</NavLink>
     <Outlet/>
      </>
    </div>
  )
}

export default Product
