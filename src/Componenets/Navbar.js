import React from 'react'
import {FaCartShopping} from "react-icons/fa6";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const Navbar = () => {

   const productCart = useSelector(state=>state.cart);
  
  return (
<>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div>
      <Link to="/">
       <h3 className='font-bold text-1xl md:text-2xl'>Shop<span className='text-red-500'>ee</span></h3>
       </Link>
 </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <Link to="/">
        <li className="nav-item active" style={{margin:"20%"}}>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link> 
        <Link to="/About">
        <li className="nav-item" style={{margin:"20%"}}>
          <a className="nav-link" href="#">About</a>
        </li>
        </Link>
        <Link to="/Contact">
        <li className="nav-item" style={{margin:"15%"}}>
          <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
        </Link>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className=''>
        <Link to="/cart">
            <button className='collapse navbar-collapse' style={{margin:"20%"}}>
            <span className='absolute top-[-5px] bg-[red] right-0 text-white px-1 rounded-full text-x5 '></span>
              <FaCartShopping size={25}/>
             </button>
                          {/* <span className='text-red'>{productCart.length}</span>  */}
             </Link>
         </div>
    </div>
  </div>
</nav> 
</>
)
}

export default Navbar;