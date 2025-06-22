import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Watch from '../images/watch.jpg';

const SpecialProduct = () => {
  const ratingChanged = () => {

  }
  return (
    <div className='col-6 mb-3'>
      <div className='special-product-cart'>
        <div className='d-flex justify-content-between'>
          <div>
            <img src={Watch} className='imag img-fluid' alt='' />
          </div>
          <div className='special.product-content'>
            <h5 className='brand'>Havels</h5>
            <h6 className='title'>Sansung Galaxy Note10+ Mobile Phone; Sim...</h6>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={22}
              activeColor="#ffd700"
              value={4}
              edit={false}
            />
            <p className='price'>
              <span className='red-p'>$100</span> 
              &nbsp;
              <strike>$200</strike>
            </p>
            <div className='discount-till d-flex aling-items-center gap-10'>
              <p className='days'>
                <b>5 days</b>
              </p>
              <div className='d-flex gap-1'>
                <span className='contador badge rounded-circle  bg-warning'>1</span>:
                <span className='contador badge rounded-circle  bg-warning'>1</span>:
                <span className='contador badge rounded-circle  bg-warning'>1</span>
                
              </div>
              
            </div>
            <div className='prod-count mb-3'>
                <p>Products: 5</p>
                <div className='progress-bar'>
                <div className="progress">
                  <div className="progress-bar"
                    role="progressbar" 
                    style={{width: '25%'}} aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
                </div>
            </div>
            <Link className='button'>Add To Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct