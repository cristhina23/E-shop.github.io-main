import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
import SuccessImg from '../images/successful.png'

const Successful = () => {
  return (
    <>
      <Meta title={'Verification Successful'} />
      <BreadCrumb title='Verification Successful' />
      <Container className='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='success-wrapper py-5 '>
              <img src={SuccessImg} className='img-fluid' alt='success' />
              <div>
                <h2>Thank You</h2>
                <p>
                  Your account has been successfully verified
                </p>
                <a href='/login' className='button'>Login Now</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Successful;