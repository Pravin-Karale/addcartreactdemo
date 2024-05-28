import React from 'react'
import {useDispatch, useSelector } from 'react-redux'

  

const Cart = () => {

    const dispatch = useDispatch();

    const productcart = useSelector(state=>state.addCart)
    // const removeItem = ()=>{
    //   dispatch(remove(id))
    // }

  return (
    <>
        <div className="col">
             {productcart.map((cartItem,i)=>{ 
                    <>
        <div className="flex w-2/5">

     <div className="col">
        <img className="col" src={cartItem.thumbnail} alt="image"/>
       </div>
       <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm">{cartItem.title}</span>
        <span className="font-bold text-sm">{cartItem.price}</span>

        <span className='text-read-500 text-xs'>{cartItem.category}</span>
        <button className='font-semibold hover:text-red-500 text-gray-500 text-xs'>Remove</button>
       </div>
       </div>
       </>
                 })
             }
      
        
        </div>
    </>
  )
}

export default Cart