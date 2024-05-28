import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import {add} from "../ReduxStore/CartSlice"
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
const [popularProduct,setPopularProduct]=useState([]);
console.log(popularProduct);
const dispatch = useDispatch()

useEffect(()=>{
    const PopularProductFetch = async ()=>{
     try{
        const res = await axios("https://dummyjson.com/cart/1");
        setPopularProduct(res.data.products);
     }catch (err) {
        toast.error(err.message);
       
     }
    };
    PopularProductFetch();
    console.log(PopularProductFetch);
},[]);

const addToCart = (product)=>{
  dispatch(add(product))
}

  return (
    <>
        <div className='mt-12 text-center'>
            <h2 className='text-4xl md:text-5xl font-semibold underline'>Products</h2>
        </div>

        <section className='container'>
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
            <div className='col'>
             {popularProduct
             .filter((item,index)=> index !== 1)
             .map((popularItem)=>(
                <div className='lg:w-1/4 md:w-1/2 p-4 w-full' key={popularItem.id}>
                <a className='block relative h-48 rounded overflow-hidden'>
                    <img alt="ecommerce" className='object-cover object-center w-full h-full block' src={popularItem.thumbnail}/>
                </a>
               
                <div className='mt-4'>
              <h2 className='text-gray-900 title-font text-lg font-medium'>{popularItem.title} </h2>
              <p className='mt-1 text-[20px] font-semibold'>Price:{popularItem.price}</p>
               </div>
               
               <button className='btn btn-primary' onClick={()=>addToCart(popularItem)}>Add to cart</button>
               </div>
             ))}
            </div>
           </div>
           
        </section>
    </>
  )
}

export default Home;