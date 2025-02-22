import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title='Cart' />

      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
        
          <div className='row'>
            <div className='col-7'>
              <h3>Dev Corner</h3>
              <nav 
              style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item ">
                    <Link className='total-price' to="/cart">Cart</Link></li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className='title total'>Contact Information</h4>
              <p className='user-details total'>
                Navdeep Dahiya (monudo232@gmail.com)
              </p>
              <h4 className='mb-3 titulo-xl'>Shipping Address</h4>
              <form className='d-flex gap-15 flex-wrap justify-content-between'
              action=''>
                <div className='w-100'>
                  <select 
                    name='' 
                    className='form-control form-select'
                    id=''
                   >
                     <option value='' selected disabled>Select County</option>
                   </select>
                    
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control'
                  placeholder='Firts Name' />
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control' 
                  placeholder='Last Name'/>
                </div>
                <div className='w-100'>
                  <input type='text' className='form-control'
                  placeholder='Address' />
                </div>
                <div className='w-100'>
                  <input type='text' className='form-control'
                  placeholder='Apartment, Suite, etc' />
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control'
                  placeholder='City' />
                </div>
                <div className='flex-grow-1'>
                  <select name='' 
                    className='form-control form-select'
                    id=''
                  >
                    <option value='' selected disabled>Selected State</option>
                  </select>
                    
                    
                </div>
                <div className='flex-grow-1'>
                <input type='text' className='form-control'
                placeholder='Zipcode' />
                </div>
              </form>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center mt-5'>
                    <Link to='/cart' className='text-dark'>
                      <BiArrowBack className='me-2' />
                      Return to Cart</Link>
                    <Link to='/cart' className='button'>Continue to Shipping</Link>
                  </div>
                </div>
            </div>
            <div className='col-5'>
              <div className='border-bottom py-4'>
                <div className='d-flex mb-2 gap-10 align-items-center justify-content-between'>
                  <div className='w-75 d-flex gap-10' >
                    <div className='w-25 position-relative'>
                      <span 
                      className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                      style={{top: '-20px', right: '2px'}}>1</span>
                      <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXJA2_AV4?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420176294' alt='' />
                    </div>
                    <div>
                      <h5 className='total-xl'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
                      <p className='total-price'>#jdfghksdfhg</p>
                    </div>
                  </div>
                  <div className='flex-grow-1 d-inline-block'>
                    <h5 className='total-xl '>$ 100.00</h5>
                  </div>
                </div>
              </div>
              <div className='border-bottom py-4'>
                
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0 total-price me-2'>Subtotal</p>
                    <p className='mb-0 total'>$ 100.00</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='mb-0 total-price'>Shipping</p>
                      <p className='mb-0 total'>$ 100.00</p>
                  </div>
                
              </div>
              <div className='d-flex justify-content-between align-items-center '>
                <h4 className='total-xl'>Total</h4>
                <h5 className='total-price-xl'>$ 100.00</h5>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  )
}

export default Checkout