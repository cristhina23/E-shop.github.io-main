import React from 'react';
import  Banner1 from '../images/main-banner-1.jpg';
import { Link } from 'react-router-dom';
import Catbanner1 from '../images/catbanner-01.jpg';
import Catbanner2 from '../images/catbanner-02.jpg';
import Catbanner3 from '../images/catbanner-03.jpg';
import Catbanner4 from '../images/catbanner-04.jpg';
import Service1 from '../images/service.png';
import Service2 from '../images/service-02.png';
import Service3 from '../images/service-03.png';
import Service4 from '../images/service-04.png';
import Service5 from '../images/service-05.png';
import Camera from '../images/camera.jpg'
import TV from '../images/tv.jpg';
import Headphones from '../images/headphone.jpg'; 
import Marquee from "react-fast-marquee";
import Brand1 from '../images/brand-01.png'; 
import Brand2 from '../images/brand-02.png';
import Brand3 from '../images/brand-03.png';
import Brand4 from '../images/brand-04.png';
import Brand5 from '../images/brand-05.png';
import Brand6 from '../images/brand-06.png';
import Brand7 from '../images/brand-07.png';
import Brand8 from '../images/brand-08.png';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import subbanner1 from '../images/subbanner-01.jpg';
import subbanner2 from '../images/subbanner-02.jpg';
import subbanner3 from '../images/subbanner-03.jpg';
import subbanner4 from '../images/subbanner-04.jpg';
import Container from '../components/Container';


function Home () {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
      <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative '>
                <img 
                  src={Banner1} 
                  alt='banner main'
                  className='img-fluid rounded-3'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br/>or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>

              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap  gap-10 align-items-center'>
                <div className='small-banner position-relative p-1'>
                  <img 
                    src={Catbanner1} 
                    alt='banner main'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                
                  </div>

                </div>
                <div className='small-banner position-relative p-1'>
                  <img 
                    src={Catbanner2} 
                    alt='banner main'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>But iPad Air</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                
                  </div>

                </div>
                <div className='small-banner position-relative p-1'>
                  <img 
                    src={Catbanner3} 
                    alt='banner main'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>But iPad Air</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                
                  </div>

                </div>
                <div className='small-banner position-relative p-1'>
                  <img 
                    src={Catbanner4} 
                    alt='banner main'
                    className='img-fluid rounded-3'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>But iPad Air</h5>
                    <p>From $999.00 or <br/> $41.62/mo.</p>
                
                  </div>

                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='home-wrapper-2 py-4'>
      <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src={Service1} alt='services' />
                  <div className='parra' >
                    <h6>Free Shipping</h6>
                    <p className=' mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={Service2} alt='services' />
                  <div className='parra'>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={Service3} alt='services' />
                  <div className='parra'>
                    <h6>Support 24/7</h6>
                    <p className=' mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={Service4} alt='services' />
                  <div className='parra'>
                    <h6>Affodable Prices</h6>
                    <p className='mb-0'>Get  Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={Service5} alt='services' />
                  <div  className='parra'>
                    <h6>Secure Payment</h6>
                    <p className=' mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
      <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap-15  align-items-center'>
                  <div className='ms-2'>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Camera} alt='camera' />
                </div>
                <div className='d-flex gap-15  align-items-center'>
                  <div className='ms-2'>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={TV} alt='camera' />
                </div>
                <div className='d-flex gap-15  align-items-center'>
                  <div className='ms-2'>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Headphones} alt='camera' />
                </div>
                <div className='d-flex   align-items-center'>
                  <div className=''>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Camera} alt='camera' />
                </div>
                <div className='d-flex gap-15  align-items-center'>
                  <div className='ms-2'>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Camera} alt='camera' />
                </div>
                <div className='d-flex gap-15  align-items-center'>
                  <div className='ms-2'>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={TV} alt='camera' />
                </div>
                <div className='d-flex gap-15  align-items-center'>
                  <div className='ms-2'>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Headphones} alt='camera' />
                </div>
                <div className='d-flex   align-items-center'>
                  <div className=' '>
                    <h6 className=''>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={Camera} alt='camera' />
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='featured-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Feature Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1='famous-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={subbanner1} className='img-fluid' alt='subbanner'/>
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399 or $16.62/mo. for 24 mo*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={subbanner2} className='img-fluid' alt='subbanner'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness</h6>
                  <p className='text-dark'>27-inch 5k Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={subbanner3} className='img-fluid' alt='subbanner'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Smartphone</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro</h6>
                  <p className='text-dark'>Now in Green. From $999.00 or 41.62/mo. for 24mo. Footnote</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src={subbanner4} className='img-fluid' alt='subbanner'/>
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>home speakers</h5>
                  <h6 className='text-dark'>Roo,-filling sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='special-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            
          </div>
          <div className='row'>
            
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1='marque-wrapper home-wrapper-2 py-3'>
      <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper'>
                <Marquee>
                  <div className='hijo mx-4 '>
                    <img src={Brand1} alt='brand' />
                  </div>
                  <div className='hijo mx-4 '>
                    <img src={Brand2} alt='brand' />
                  </div>
                  <div className='hijo mx-4 '>
                    <img src={Brand3} alt='brand' />
                  </div>
                  <div className='mx-4 '>
                    <img src={Brand4} alt='brand' />
                  </div>
                  <div className='mx-4 '>
                    <img src={Brand5} alt='brand' />
                  </div>
                  <div className='mx-4 '>
                    <img src={Brand6} alt='brand' />
                  </div>
                  <div className='mx-4 '>
                    <img src={Brand7} alt='brand' />
                  </div>
                  <div className='mx-4 '>
                    <img src={Brand8} alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <div className='row'>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
            </div>
          </div>
      </Container>
     

    </>
  )
}

export default Home