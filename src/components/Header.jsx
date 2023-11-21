import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { Link ,useLocation} from 'react-router-dom';
import logo from '../assets/images/apneck.png'
import {HiOutlineInboxIn} from 'react-icons/hi'
import {VscAccount} from 'react-icons/vsc'
import {CgShoppingCart} from 'react-icons/cg'
import Cart from '../pages/Cart';
import Login from '../pages/Login';
const Header = () => {
  const location = useLocation();

    return (
        <>
            <header className='header-top-strip px-4 p-1 shadow-md'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-6 d-flex align-items-center'>
                            <p>The trending outfits at 100% off</p>
                        </div>
                        <div className='col-6 d-flex justify-content-between'>
                            <div>
                                <a href="tel:+201116264126"> Call us at +20 111 6264 126</a>
                            </div>
                            <div>
                            <Link> <BiPhoneCall className='fs-3 mx-4' /></Link>
                            <Link><AiOutlineMail className='fs-3 mx-4'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper sticky-top'>
            <div className='container-xxl'>
            <div className='row'>
            <div className='col-2  text-center'>
            <img src={logo} className='img-fluid logo' alt=''/>
            </div>
            <div className='col-3 d-flex align-items-center'>            
            <div className="input-group">
            <input type="text" className="form-control p-2" placeholder="Search Here ..." aria-label="Find products ..." aria-describedby="basic-addon2" />
            <button className="input-group-text" id="basic-addon2">search</button>
          </div>
            </div>
            <div className='nav-links col-4 text-center d-flex align-items-center justify-content-between m-auto'>
            <Link to='/' className={location.pathname=== '/' ? 'active' : 'inactive'} >Home</Link>
            <Link to='shop' className={location.pathname=== '/shop' ? 'active' : 'inactive'}>Shop</Link>
            <Link to='blog' className={location.pathname=== '/blog' ? 'active' : 'inactive'}>Blog</Link>
            <Link to='about' className={location.pathname=== '/about' ? 'active' : 'inactive'}>About</Link>
            <Link to='contact' className={location.pathname=== '/contact' ? 'active' : 'inactive'}>Contact</Link>
            </div>
            <div className='nav-links-nav col-3 d-flex align-items-center justify-content-around'>
            <Link to='wishlist'  className={location.pathname=== '/wishlist' ? 'active d-flex align-items-center' : 'inactive d-flex align-items-center'} ><HiOutlineInboxIn className='fs-3 mx-2 '/>
            <span>WishList</span>
            </Link>
            <Link  to='login' className={location.pathname=== '/login' ? 'active d-flex align-items-center' : 'inactive d-flex align-items-center'}>
            <VscAccount className='fs-3 mx-2 '/>
            <spn>Account</spn>
            </Link>
            <Link  to='cart' className={location.pathname=== '/cart' ? 'active d-flex align-items-center' : 'inactive d-flex align-items-center'}>
            <CgShoppingCart className='fs-3 mx-2 '/>
            <spn>Cart</spn>
            </Link>
            </div>
            </div>
            </div>
            </header>
        </>
    )
}

export default Header
