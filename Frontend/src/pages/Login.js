import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login = () => {

  const [formData, setFormData] = useState({
      email: '',
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
      const response = await axios.post('http://localhost:4000/api/user/login', formData);
      localStorage.setItem('token', response.data.token);
      setMessage(response.data.message);
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        navigate("/");
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
      <Meta title={'Login'} />
      <BreadCrumb title='Login' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Login</h3>
              <form onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder ='Email' className='form-control' />
                </div>
                <div className='mt-1'>
                  <input 
                    type='password' 
                    name='password' 
                    value={formData.password}
                    onChange={handleChange}
                    placeholder ='Password' className='form-control' />
                </div>
                <div>
                  <Link to='/forgot-password'>Forgot Password</Link>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                    <button className='button' type='submit'>Login</button>
                    <Link to='/signup' className='button signup'>SignUp</Link>
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

export default Login