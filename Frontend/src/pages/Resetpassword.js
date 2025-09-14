import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { IoEyeOff, IoEye } from "react-icons/io5";

const Resetpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  
  return (
    <>
      <Meta title={'Reset Password'} />
      <BreadCrumb title='Reset Password' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Reset Password</h3>
              <form action='' className='d-flex flex-column gap-15 relative'>
                
                <div className='mt-1 relaive'>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    name='password' 
                    id='password'
                    placeholder ='Password' className='form-control' />
                    <span 
                    className='eye-icon' 
                    onClick={() => setShowPassword(!showPassword)} 
                  >
                    {showPassword ? <IoEye /> : <IoEyeOff />}
                  </span>
                </div>
                <div className='mt-1 relative'>
                  <input 
                    type={showConfirmPassword ? 'text' : 'password'}
                    name='confpassword' 
                    id='confpassword'
                    placeholder ='Confirm Password' className='form-control' />
                    <span 
                    className='eye-icon' 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    
                  >
                    {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
                  </span>
                </div>
                <div>
                
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button'>Ok</button>
                  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  )
}

export default Resetpassword