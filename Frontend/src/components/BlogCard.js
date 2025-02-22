import React from 'react';
import Blog from '../images/blog-1.jpg';
import { Link } from 'react-router-dom';


function BlogCard() {
  return (
    
      <div className='blog-car'>
        <div className='card-image'>
          <img src={Blog} alt='blog' className='img-fluid w-100' />
        </div>
        <div className='blog-content'>
          <p className='date'> 1 Dec, 2022</p>
          <h5 className='title'>
            A Beatiful Sunday Renaissance
            </h5>
          <p className='desc'>
            You To Only As Your Last Collection, Which is An Enormous Pressure. !Think There is Something About...
          </p>
          <Link to='/blog/:id' className='button' >
            Read More
          </Link>
        </div>
      </div>
    
  )
}

export default BlogCard