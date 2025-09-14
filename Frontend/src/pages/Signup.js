import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { IoEyeOff, IoEye } from "react-icons/io5";




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
      const response = await axios.post('http://localhost:4000/api/user/signup', formData);
      localStorage.setItem('token', response.data.token);
      setMessage(response.data.message);
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        setMessage('Error: ' + error.response.data.message);
        console.log(error.response.data);
      } else if (error.request) {
        setMessage('Error: ' + error.request);
        console.log(error.request);
      } else {
        setMessage('Error: ' + error.message);
        console.log(error.message);
      }
    }
  }


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
                    placeholder ='First Name' className='form-control' />
                </div>
                <div>
                  <input 
                    type='text' 
                    name='lastname' 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder ='Last Name' className='form-control' />
                </div>
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder ='Email' className='form-control' />
                </div>
                <div>
                  <input 
                    type='tel' 
                    name='mobile' 
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder ='Mobile Number' className='form-control' />
                </div>
                <div className='mt-1'>
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    name='password' 
                    value={formData.password}
                    onChange={handleChange}
                    placeholder ='Password' className='form-control' />
                     <span 
                                        className='eye-icon' 
                                        onClick={() => setShowPassword(!showPassword)} 
                                      >
                                        {showPassword ? <IoEye /> : <IoEyeOff />}
                                      </span>
                </div>
                <div>
                
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button'>Sign Up</button>
                  
                  </div>
                  <p className='mt-3 text-center'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
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