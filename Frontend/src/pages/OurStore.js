import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import  Watch from '../images/watch.jpg';   
import Headphones from '../images/headphones-blue.jpg';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Gr from '../images/gr.svg';
import Gr2 from '../images/gr2.svg';
import Gr3 from '../images/gr3.svg';
import Gr4 from '../images/gr4.svg';
import Container from '../components/Container';



const OurStore = () => {
  const [grid, setGrid] = useState(4);
  
  const ratingChanged = () => {

  }
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />
      <Container class1='store-wrapper home-wrapper-2 py-3'>
        
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categorias</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Avialablity</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-chech-label' htmlFor=''>In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value='' id=''  />
                      <label className='form-chech-label' htmlFor=''>Our of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input 
                      type="email" className="form-control" id="floatingInput" 
                      placeholder="name@example.com" />
                      <label htmlFor="From">From</label>
                    </div>
                    <div className="form-floating">
                      <input 
                      type="email" className="form-control" id="floatingInput"
                       placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                    <div>
                      <div className='d-flex '>
                        <Color />
                      </div>
                    </div>
                    <h5 className='sub-title'>Size</h5>
                    <div>
                      <div className='form-check'>
                        <input 
                          className='form-check-input' type='checkbox' 
                          value='' 
                          id='color-1' />
                        <label 
                        className='form-chech-label' htmlFor='color-1'>
                          S (2)
                        </label>
                      </div>
                      <div className='form-check'>
                        <input 
                          className='form-check-input' type='checkbox' 
                          value='' 
                          id='color-2' />
                        <label 
                        className='form-chech-label' htmlFor='color-2'>
                          M (2)
                        </label>
                      </div>
                    </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Headphone
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Laptop
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Mobile
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Oppo
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Speaker
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Tablet
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      wire
                    </span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                      Vivo
                    </span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div>
                  <div className='random-products d-flex mb-3'>
                    <div className='r1'>
                      <img src={Headphones} alt='watch'
                      className='img-fluid' />
                    </div>
                    <div className='r2'>
                      <h5>
                        Kids headphones bulk 10 pack multi colored for studests
                      </h5>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        value='3'
                        edit={false}
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                  <div className='random-products d-flex '>
                    <div className='r1'>
                      <img src={Watch} alt='watch'
                      className='img-fluid' />
                    </div>
                    <div className='r2'>
                      <h5>
                        Kids watch bulk 10 pack multi colored for studests
                      </h5>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        value='3'
                        edit={false}
                      />
                      <b>$100.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block' style={{width: '100px'}}>Sort By:</p>
                    <select name='' className='form-control form-select' id=''>
                      <option value='manual'>Featured</option>
                      <option value='best-selling'>Best Selling</option>
                      <option value='title-ascending'>Alphabetically A-Z</option>
                      <option value='title-ascending'>Alphabetically Z-A</option>
                      <option value='price-ascending'>Price, low to high</option>
                      <option value='price-descending'>Price, high to low</option>
                      <option value='created-ascending'>Date, old to new</option>
                      <option value='created-descending'>Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totlaproducts mb-0'>21 products</p>
                    <div className='d-flex gap-10 align-items grid'>
                     <img onClick={() =>{setGrid(3)}} src={Gr4} alt='grid' className='d-block img-fluid' />
                     <img onClick={() =>{setGrid(4)}} src={Gr3} alt='grid' className='d-block img-fluid' />
                      <img onClick={() =>{setGrid(6)}} src={Gr2} alt='grid' className='d-block img-fluid' />
                      <img onClick={() =>{setGrid(12)}} src={Gr} alt='grid' className='d-block img-fluid' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </>
  )
}

export default OurStore
                      
                    