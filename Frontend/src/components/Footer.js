import React from 'react';
import Newsletter from '../images/newsletter.png';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import Marquee from "react-fast-marquee";




function Footer() {
  return (
    <>
      <footer className='py-4'>
      <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={Newsletter} alt='newsletter'/>
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input 
                  type='text'
                  className='form-control py-1'
                  placeholder='Your email address'
                  aria-label='Your email address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2'>Suscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4 '>
        <div className='container-xxl'>
          <div className='col-4 colum'>
            <h4 className='text-white mb-4 '>Contact Us</h4>
            <div className='li'>
              <address className='text-white '>
                Hno: 277 Near Vill chopal, <br /> Sonipat, Haryana <br /> PinCode: 131103
              </address>
              <a href='tel: +51 949807845' className='text-white mt-3 d-block mb-1'>+51 949807845</a>
              <a href='mailto: viszellechacon@gmail.com' className='text-white mt-2 d-block mb-0'>viszellechacon@gmail.com</a>
              <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href='#'>
                  <AiFillLinkedin className='fs-4' />
                </a>
                <a className='text-white' href='#'>
                  <AiOutlineInstagram className='fs-4' />
                </a>
                <a className='text-white' href='#'>
                  <AiFillGithub className='fs-4' />
                </a>
                <a className='text-white' href='#'>
                  <AiFillYoutube className='fs-4' />
                </a>
              </div>
            </div>

          </div>
          <div className='col-3 colum'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-police' className='li text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='refund-police' className='li text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='/shipping-policy' className='li text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='term-conditions' className='li text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link to='/blogs' className='li text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-3 colum'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='' className='li text-white py-2 mb-1'>About</Link>
              <Link to='' className='li text-white py-2 mb-1'>Faq</Link>
              <Link to='' className='li text-white py-2 mb-1'>Contact</Link>
              
            </div>
          </div>
          <div className='col-2 colum'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='' className='li text-white py-2 mb-1'>Laptops</Link>
              <Link to='' className='li text-white py-2 mb-1'>Headphones</Link>
              <Link to='' className='li text-white py-2 mb-1'>Tablets</Link>
              <Link to='' className='li text-white py-2 mb-1'>Watch</Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 texte-white'>&copy; {new Date().getFullYear()}; Powered by Cristhina Chacon</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer