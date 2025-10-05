import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { IoEyeOff, IoEye } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useAuth } from "../Contexts/AuthContext";
import api from "../axiosInstance";


const Login = () => {
  const { setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
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
    // Hacemos la petición al backend
    const response = await api.post("/api/user/login", formData);

    // Guardamos el token en localStorage
    localStorage.setItem("token", response.data.token);

    // Actualizamos el contexto con los datos del usuario devueltos por el backend
    setUser({
      _id: response.data.user._id,
      name: response.data.user.name,
      email: response.data.user.email,
    });

    toast.success("Login successful");

    // Redirigir si todo fue correcto
    if (response.status === 200 || response.status === 201) {
      navigate("/");
    }
  } catch (error) {
    let errorMsg = "Something went wrong";

    if (error.response) {
      errorMsg = error.response.data.message || "Login failed";
      console.log(error.response.data);
    } else if (error.request) {
      errorMsg = "No response from server";
      console.log(error.request);
    } else {
      errorMsg = error.message;
      console.log(error.message);
    }

    toast.error(errorMsg);
  }
};


  return (
    <>
      <Meta title={'Login'} />
      <BreadCrumb title='Login' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
        
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Login</h3>
              <form onSubmit={handleSubmit} className='d-flex flex-column gap-15 relative'>
                <div className='mt-1'>
                  <input 
                    type='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    
                    placeholder ='Email' className='form-control' />
                    
                </div>
                <div className='mt-1 relative' >
                  <input 
                    type={showPassword ? 'text' : 'password'}  
                    name='password' 
                    value={formData.password}
                    onChange={handleChange}
                    
                    placeholder ='••••••••' className='form-control relative' />
                    <span 
                      className='eye-icon' 
                      onClick={() => setShowPassword(!showPassword)} 
                    >
                      {showPassword ? <IoEye /> : <IoEyeOff />}
                    </span>
                </div>
                <div>
                  <Link to='/forgot-password' className=' text-orange hover'>Forgot Password?</Link>
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