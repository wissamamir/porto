import React from 'react'
import ShopItems from '../components/ShopItems'
import Prod from '../components/Prod'
const Shop = () => {
  return (
 <>
 <section className="shop p-5">
 <div className="container-xxl">
   <div className="row justify-content-center align-items-center">
     <div className="col-md-8 col-lg-6 text-center">
       <div className="shop-details">
         <h1 className="text-white"><b className="title-green">#100%</b> Off On All Products</h1>
         <p className="text-white fs-5">Make your orders we will deliver..</p>
       </div>
     </div>
   </div>
 </div>
</section>

<section className="featured-products p-5">
<div className="container-xxl">
  <div className="row">
    <ShopItems />
  </div>
</div>
</section>
 </>
  )
}

export default Shop
