import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Audifono1 from '../images/audifono1.jpeg';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';


const SingleProduct = () => {
  const props = {
    width: 500, 
    height: 500, 
    zoomWidth: 600, 
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX412?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420170758"};
  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title='Product Name' />
      <Container class1='main-product-wrapper py-5 home-wrapper-2'>
        
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div className='contenedor-imagenes bg-white'>
                  <div className='image-1'>
                    <ReactImageZoom {...props} />
                  </div>
                </div>
                <div className='other-products-image d-flex flex-wrap gap-15'>
                  <div className=''>
                    <img className='miniaturas' 
                    src={Audifono1} 
                    
                    alt='' />
                  </div>
                  <div>
                    <img className='miniaturas' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3Y2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420157297' alt='' />
                  </div>
                  <div>
                    <img className='miniaturas' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX422_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420173783' alt='' />
                  </div>
                  <div>
                    <img className='miniaturas' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJA2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420176294' alt='' />
                  </div>
                </div>
              </div>
             
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value='4'
                        edit={false}
                      />
                      <p className='mb-0' t-review>{'{ 2 Reviews }'}</p>
                  </div>
                  <a className='review-btn' href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom'>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type :</h3>
                    <p className='product-data'>Headphones</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand :</h3>
                    <p className='product-data'>Havells</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category :</h3>
                    <p className='product-data'>Tecnology</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags :</h3>
                    <p className='product-data'>Headphones</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availablity</h3>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size</h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border-1 bg-white text-dark border border-secondary'>S</span>
                      <span className='badge border-1 bg-white text-dark border border-secondary'>M</span>
                      <span className='badge border-1 bg-white text-dark border border-secondary'>L</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color</h3>
                    <Color/>
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity</h3>
                    <div>
                      <input 
                        type='number'
                        name=''
                        min={1}
                        max={10}
                        className='form-control'
                        style={{width: '70px'}}
                        id=''
                      />
                    </div>
                    <div className='d-flex align-items-center gap-30 ms-5'>
                      <button className='button' type='submit'>ADD TO CART</button>
                      <button className='button signup'>Buy It Now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a style={{fontSize: '14px', color: '#777777' }} className='a fs-5 me-2' href='#'>
                        <TbGitCompare className='me-2' />
                        <span style={{fontSize: '14px'}}>Add to Compare</span>
                        </a>
                    </div>
                    <div>
                      <a style={{fontSize: '14px', color: '#777777'}} className='a fs-5 me-2' href='#'>
                        <AiOutlineHeart className='me-2' />
                          <span style={{fontSize: '14px'}}>Add to Wishlist</span>
                        </a>
                    </div>
                  </div>
                  <div className='d-flex flex-column gap-10  my-3'>
                    <h3 className='product-heading'>Shipping & Returns:</h3>
                    <p className='product-data'>Free shipping and returns Available on  all orders! <br/> We ship all US domestic orders within <b>5-10 businnes day!</b></p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h3 className='product-heading'> Product Link:</h3>
                    <a
                      href='javascript:void(0);'
                      style={{fontSize: '14px', color: '#777777'}}
                      onClick={() => {
                        copyToClipboard('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX412?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420170758');
                      }}
                     >
                        copy Product Link
                      </a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1='description-wrapper py-5 home-wrapper-2'>
        
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        
      </Container>
      <Container id='review' class1='reviews-wrapper py-5 home-wrapper-2'>
        
          <div className='row'>
            <div className='col-12'>
              <h3>Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4>Customer Reviews</h4>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value='4'
                        edit={false}
                      />
                      <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct ?
                    <div>
                    <a className=' text-decoration-underline' href=''>Write a Review</a>
                    </div> : ''
                  }
                </div>
                <div  className='review-form py-4'>
                <h4>Write a Review</h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value='3'
                        edit={true}
                      />
                    </div>
                    <div>
                      <textarea  
                        className='w-100 form-control'
                        name=''
                        id=''
                        cols='30'
                        rows='4'
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div className='submit-review'>
                    <button className='comentar button border-0'>Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className='reviews'>
                  <div className='review mt-4'>
                    <div className='d-flex gap-10 align-items-center gap-10'>
                      <h6 className='mb-0'>Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={20}
                        activeColor="#ffd700"
                        value='4'
                        edit={false}
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            
          </div>
          <div className='row'>
            
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        
      </Container>
    </>
  )
}

export default SingleProduct