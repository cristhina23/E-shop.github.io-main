import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Cross from '../images/cross.svg';
import Watch from '../images/watch.jpg';
import Container from '../components/Container';

const WishList = () => {
  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title='Wishlist' />
      <Container class1='wishlist-wrapper home-wrapper-2'>
        
          <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img 
                  src={Cross} 
                  alt='cross' 
                  className='position-absolute cross img-fluid'/>
                  <div className='whishlist-card-image'>
                    <img src={Watch} alt='watch' />
                  </div>
                  <div>
                    <div className='py-3 '>
                      <h5 className='title fs-6'>
                        Honor t1 7.0 1GB RAM 8 GB ROM 7 Inch With WI-FI.
                      </h5>
                      <h6 className='price'>$100</h6>
                    </div>
                  </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img 
                  src={Cross} 
                  alt='cross' 
                  className='position-absolute cross img-fluid'/>
                  <div className='whishlist-card-image'>
                    <img src={Watch} alt='watch' />
                  </div>
                  <div>
                    <div className='py-3 px-3'>
                      <h5 className='title fs-6'>
                        Honor t1 7.0 1GB RAM 8 GB ROM 7 Inch With WI-FI.
                      </h5>
                      <h6 className='price'>$100</h6>
                    </div>
                  </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img 
                  src={Cross} 
                  alt='cross' 
                  className='position-absolute cross img-fluid'/>
                  <div className='whishlist-card-image'>
                    <img src={Watch} alt='watch' />
                  </div>
                  <div>
                    <div className='wishlist-card-des py-3 px-3'>
                      <h5 className='title fs-6'>
                        Honor t1 7.0 1GB RAM 8 GB ROM 7 Inch With WI-FI.
                      </h5>
                      <h6 className='price'>$100</h6>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>
        
      </Container>
    </>
  )
}

export default WishList