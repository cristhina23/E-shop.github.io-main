import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
import UnsuccessImg from '../images/unsuccessfull.png'

const Successful = () => {
  return (
    <>
      <Meta title={'Verification Failed'} />
      <BreadCrumb title='Verification Failed' />
      <Container className='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='success-wrapper py-5 '>
              <img src={UnsuccessImg} className='img-fluid' alt='verification falied' />
              <div>
                <h2>Verification Failed</h2>
                <p>
                  The verification link is invalid, expired, or has already been used.
                </p>
                  <p> Please check your email for the correct link or try signing up again.</p>
                <a href='/signup' className='button'>Go to Signup</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Successful;