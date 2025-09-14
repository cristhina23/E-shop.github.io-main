import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import axios from 'axios';


const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/user/forgot-password", { email });
      setMessage(res.data.message); // Backend should return {message: "..."}
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title='forgot Password ' />

      <Container class1='login-wrapper py-5 home-wrapper-2'>
       
       <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Reset Your Password| </h3>
              <p className='text-center mt-2 mb-3'>We wil send you an email to reset your password</p>
              <form onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input 
                    type='email' 
                    name='email' 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder ='Email' className='form-control' />
                </div>
              
                <div>
                  <div className='mt-3 d-flex justify-content-center flex-column align-items-center gap-15'>
                    <button className='button' type='submit'>Submit</button>
                    <Link to='/login'>Cancel</Link>
                  </div>
                </div>
              </form>
              {message && <p className="text-center mt-3">{message}</p>}
            </div>
          </div>
        </div>
       
      </Container>
    </>
  )
}

export default Forgotpassword