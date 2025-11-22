import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center h-[30%] p-2 bg-amber-300  '>
        <div className='flex bg-white/30 border-white/20 shadow-lg backdrop-blur-md justify-evenly items-center p-4 w-[50%] rounded-4xl font-bold  ' >
            <div>Home</div>
            <div>Add Product</div>
            <div>Item</div>
            <div>Contact</div>
            <div>MYAi</div>
        </div>
    </div>
  )
}

export default NavBar