import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title='Cart' />

      <Container class1='cart-wrapper home-wrapper-2'>
        
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header d-flex justify-content-between align-itens-center py-3 mb-2'>
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className='cart-data  d-flex justify-content-between align-itens-center gap-15 py-3 mb-2'>
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX422_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420173783' alt=''/>
                  </div>
                  <div className='w-75'>
                    <p>dfhus</p>
                    <p>Color: red</p>
                    <p>Size: m</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className='price'>$ 100</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input 
                      className='form-control'
                      type='number'
                      name=''
                      min={1}
                      max={10}
                      id=''
                    />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger ' />
                  </div>
                </div>
                <div className='cart-col-4'>
                  <h5 className='price'>$ 100</h5>
                </div>
              </div>
              <div className='cart-data  d-flex justify-content-between align-itens-center gap-15 py-3 mb-2'>
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX422_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1580420173783' alt=''/>
                  </div>
                  <div className='w-75'>
                    <p>dfhus</p>
                    <p>Color: red</p>
                    <p>Size: m</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className='price'>$ 100</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input 
                      className='form-control'
                      type='number'
                      name=''
                      min={1}
                      max={10}
                      id=''
                    />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger ' />
                  </div>
                </div>
                <div className='cart-col-4'>
                  <h5 className='price'>$ 100</h5>
                </div>
              </div>
            </div>
            <div className='col-12 py-2 mt-4'>
              <div className='d-flex justify-content-between align-items-baseline'>
              <Link to='/product' className='button'>
                Continue to Shopping
              </Link>
              <div className='d-flex flex-column align-items-end'>
                <h4>Subtotal: $ 100</h4>
                <p>Taxes and shipping calculated al checkout</p>
                <Link to='/checkout' className='button'>Checkout</Link>
              </div>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  )
}

export default Cart