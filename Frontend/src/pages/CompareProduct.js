import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Cross from '../images/cross.svg';
import Watch from '../images/watch.jpg';
import Color from '../components/Color';
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
      <Meta title={'Compare Products'} />
      <BreadCrumb title='Compare Products' />
      <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
        
          <div className='row'>
            <div className='col-3'>
              <div className='compare-product-cart position-relative'>
                <img 
                  src={Cross} 
                  alt='cross' 
                  className='position-absolute cross img-fluid'/>
                <div className='product-cart-image'>
                    <img src={Watch} alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title fs-6'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 1 Inch Whit Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price fs-6 mb-3'>$100</h6>
                  <div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Color:</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='compare-product-cart position-relative'>
                <img 
                  src={Cross} 
                  alt='cross' 
                  className='position-absolute cross img-fluid'/>
                <div className='product-cart-image'>
                    <img src={Watch} alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title fs-6'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 1 Inch Whit Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price fs-6 mb-2'>$100</h6>
                  <div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Availablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Color:</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5 className='fs-6'>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  )
}

export default CompareProduct