import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { toast } from 'react-toastify';
import api from "../axiosInstance";



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data, status } = await api.post('/api/user/signup', formData);

    // Guarda el token en localStorage
    localStorage.setItem('token', data.token);

    toast.info("Verification email sent. Please check your inbox.");

    if (status === 200 || status === 201) {
      navigate("/login");
    }
  } catch (error) {
    let errorMsg = "Something went wrong";

    if (error.response) {
      errorMsg = error.response.data.message || "Signup failed";
      console.log("Signup error:", error.response.data);
    } else if (error.request) {
      errorMsg = "No response from server";
      console.log("Request error:", error.request);
    } else {
      errorMsg = error.message;
      console.log("General error:", error.message);
    }

    toast.error(errorMsg);
  }
};



  return (
    <>
      <Meta title={'Sign Up'} />
      <BreadCrumb title='Sign Up' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Sign Up</h3>
              <form  onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input 
                    type='text' 
                    name='firstname' 
                    value={formData.name}
                    onChange={handleChange}
                    pattern='^[A-Za-z\s]{3,30}$'
                    placeholder ='First Name' className='form-control' />
                    <small className="form-text text-muted">
                      Only letters, 3–30 characters.
                    </small>
                </div>
                <div>
                  <input 
                    type='text' 
                    name='lastname' 
                    pattern='^[A-Za-z\s]{3,30}$'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder ='Last Name' className='form-control' />
                    <small className="form-text text-muted">
                      Only letters, 3–30 characters.
                    </small>
                </div>
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder ='email@example.com' className='form-control' />
                    <small className="form-text text-muted">
                      Enter a valid email address
                    </small>
                </div>
                <div>
                  <input 
                    type='tel' 
                    name='mobile' 
                    pattern='^\d{10}$'
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder ='Mobile Number' className='form-control' />
                    <small className="form-text text-muted">
                      Only include numbers, 9 digits
                    </small>
                </div>
                <div className='mt-1'>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    name='password' 
                    pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder ='••••••••' className='form-control' />
                     <span 
                                        className='eye-icon' 
                                        onClick={() => setShowPassword(!showPassword)} 
                                      >
                                        {showPassword ? <IoEye /> : <IoEyeOff />}
                                      </span>
                    <small className="form-text text-muted">  
                      Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.
                    </small>
                </div>
                <div>
                
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button'>Sign Up</button>
                  
                  </div>
                  <p className='mt-3 text-center'>Already have an account? <Link to='/login' className='text-orange fw-bold'>Login</Link></p>
                  {message && <p className="text-danger">{message}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  )
}


export default Signup