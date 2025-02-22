import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiOutlineHome} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';


function Contact ()  {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26484.273711543487!2d-76.97165684686041!3d-12.209817708417583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbf189328807%3A0xad2f53fac9580198!2sClub%20Zonal%20Hu%C3%A1scar!5e0!3m2!1ses-419!2spe!4v1685581034427!5m2!1ses-419!2spe" 
                width="600" 
                height="450" 
                className='border-0 w-100' 
                allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type='text' className='form-control'
                        placeholder='Name' />
                    </div>
                    <div>
                      <input 
                        type='email' className='form-control'
                        placeholder='Email' />
                    </div>
                    <div>
                      <input 
                       type='tel' className='form-control'
                       placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea  
                        className='w-100 form-control'
                        name=''
                        id=''
                        cols='30'
                        rows='4'
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us.</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome style={{color: '#777777'}} className='fs-5'/>
                        <address className='mb-0'>Q39C+8P4, Villa EL Salvador 15837</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall style={{color: '#777777'}} className='fs-5'/>
                        <a href='tel:+51949807845'> +51 949807845</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail style={{color: '#777777'}} className='fs-5'/>
                        <a href='mailto:viszellechacon@gmail.com'>viszellechacon@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoCircle style={{color: '#777777'}} className='fs-5'/>
                        <p className='mb-0' > Monday - Friday 10 AM - 8 PM</p>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact