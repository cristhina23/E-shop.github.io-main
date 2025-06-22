import React from 'react';
import Headphones from '../images/headphones-blue.jpg';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import Addcart from '../images/add-cart.svg';
import View from '../images/view.svg';
import Prodcompare from '../images/prodcompare.svg';
import Whish from '../images/wish.svg';
import Headphones2 from '../images/headphones-black.jpg';


function ProductCard(props) {
  const {grid} = props;
  let location = useLocation();
  console.log(location);
  const ratingChanged = () => {
//{`${location.pathname === '/store' ? `col-${grid}` : 'col-3'}`}
  }
  return (
    <>
      <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname !== '/product' ? '/product/:id' : ':id'}`} className='product-card position-relative'>
        <div className='whislist position-absolute'>
          <Link >
            <img src={Whish} alt='whish' />
          </Link>
        </div>
        <Link className='product-image'>
          <img className='imag img-fluid' src={Headphones} alt='product' />
          <img className='imag img-fluid' src={Headphones2} alt='product' />
        </Link>
        <div className='product-details'>
          <h6 className='brand'> Havels</h6>
          <h5 className='product-title'>
            Kids Headphones bulk 10 packs multi colores for students
          </h5>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            value='3'
            edit={false}
          />
          <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
              <img src={Prodcompare} alt='prodcompare' />
            </Link>
            <Link>
              <img src={View} alt='view' />
            </Link>
            <Link>
              <img src={Addcart} alt='addcart' />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname==='/' ? 'product/:id' : ':id'}`}
       className='product-card position-relative'>
        <div className='whislist position-absolute'>
          <Link>
            <img src={Whish} alt='whish' />
          </Link>
        </div>
        <div className='product-image'>
          <img className='imag img-fluid' src={Headphones} alt='product' />
          <img className='imag img-fluid' src={Headphones2} alt='product' />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels</h6>
          <h5 className='product-title'>
            Kids Headphones bulk 10 packs multi colores for students
          </h5>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            activeColor="#ffd700"
            value='3'
            edit={false}
          />
          <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
              <img src={Prodcompare} alt='prodcompare' />
            </Link>
            <Link>
              <img src={View} alt='view' />
            </Link>
            <Link>
              <img src={Addcart} alt='addcart' />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname==='/' ? 'product/:id' : ':id'}`}
      className='product-card position-relative'>
        <div className='whislist position-absolute'>
          <Link>
            <img src={Whish} alt='whish' />
          </Link>
        </div>
        <div className='product-image'>
          <img className='imag img-fluid' src={Headphones} alt='product' />
          <img className='imag img-fluid' src={Headphones2} alt='product' />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels</h6>
          <h5 className='product-title'>
            Kids Headphones bulk 10 packs multi colores for students
          </h5>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            activeColor="#ffd700"
            value='3'
            edit={false}
          />
          <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
              <img src={Prodcompare} alt='prodcompare' />
            </Link>
            <Link>
              <img src={View} alt='view' />
            </Link>
            <Link>
              <img src={Addcart} alt='addcart' />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    
    </>
  )
}

export default ProductCard