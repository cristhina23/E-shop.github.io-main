import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Container from '../components/Container';
import { IoEyeOff, IoEye } from "react-icons/io5";
import axios from 'axios';

const Resetpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confpassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`http://localhost:4000/api/user/reset-password/${token}`, {password });
      setMessage(res.data.message); // Backend should return {message: "..."}
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };
  
  
  return (
    <>
      <Meta title={'Reset Password'} />
      <BreadCrumb title='Reset Password' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Reset Password</h3>
              <form onSubmit={handleSubmit} className='d-flex flex-column gap-15 relative'>
                
                <div className='mt-1 relaive'>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    name='password' 
                    id='password'
                    value={password}
                    placeholder ='New Password' 
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                    className='form-control' />
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
                    value={confpassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    className="form-control"
                    required
                    placeholder ='Confirm Password'  />
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