import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';
import ShopContext from './ShopContext'
import { useContext } from 'react';
const Prod = (props) => {
    const {id, name, price, image, brand} = props.data;

  return (
    <>
    <div className='col-3 card-shop'>
    <div className='card  mb-2'>
    <img src={image} alt='' className='img-fluid card-img-top'/>
    <div className='card-details card-body'>
    <span className='mb-2 text-bg-light'>{brand}</span>
    <h5>{name}</h5>
    <ReactStars
    count={5}
    edit={false}
    value={4}
    size={24}
    activeColor="#EA9D5A"
/>
<p className="price mb-2"><span className="text-success">{price} </span> <strike className='text-danger'>&nbsp; {price * 2}$</strike></p>
<div className='d-flex align-items-center justify-content-around'>
<button  className='' id=''>View Details</button>
<button className='' id=''>Add To Cart


</button>
</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Prod