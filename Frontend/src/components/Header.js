import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Compare from '../images/compare.svg';
import Wishlist from '../images/wishlist.svg';
import User from '../images/user.svg';
import Cart from '../images/cart.svg';
import Menu from '../images/menu.svg';
import { useAuth } from '../Contexts/AuthContext';


function Header() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      {/* HEADER SUPERIOR */}
      <header className='header-top-strip py-1'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
              <p className=' text-white mb-0'>
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:{" "}
                <a className='text-white' href='tel:+51 949807845'>
                  +51 949807845
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER MEDIO */}
      <header className='header-upper py-2'>
        <div className='container-xl'>
          <div className='row  align-items-center w-100 '>
            <div className='col-2 '>
              <h2>
                <Link className='text-white'>Dev Corner</Link>
              </h2>
            </div>
            <div className='col-5 ms-5 gap-20'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control '
                  placeholder='Search Product Here...'
                  aria-label='Search Product Here...'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text ' id='basic-addon2'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5 icons'>
              <div className='header-upper-links d-flex align-items-center gap-20'>
                <div>
                  <Link
                    to='/compare-product'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src={Compare} alt='compare' />
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/wishlist'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src={Wishlist} alt='wishlist' />
                    <p className='mb-0'>
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>

                {/* USER / LOGIN / LOGOUT */}
                <div className='dropdown'>
                  {user ? (
                    <>
                      <button
                        className='btn bg-transparent border-0 text-white d-flex align-items-center gap-10 dropdown-toggle'
                        type='button'
                        id='dropdownUser'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <img src={User} alt='user' />
                        
                        <span>{ user.firstname  || "My Account"}</span>
                      </button>
                      <ul
                        className='dropdown-menu dropdown-menu-end'
                        aria-labelledby='dropdownUser'
                      >
                        <li>
                          <Link to='/profile' className='dropdown-item'>
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            className='dropdown-item'
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Link
                      to='/login'
                      className='d-flex align-items-center gap-10 text-white'
                    >
                      <img src={User} alt='user' />
                      <p className='mb-0'>
                        Login <br /> My Account
                      </p>
                    </Link>
                  )}
                </div>

                {/* CART */}
                <div className='cart'>
                  <Link
                    to='/cart'
                    className='d-flex align-items-center  text-white'
                  >
                    <img src={Cart} alt='cart' />
                    <div className='noti d-flex flex-column align-items-center gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='price  '>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER INFERIOR */}
      <header className='header-bottom py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30 '>
                <div className='dropdown'>
                  <button
                    className='btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <img src={Menu} />
                    <span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'
                  >
                    <li>
                      <Link to='' className='dropdown-item text-white'>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link to='' className='dropdown-item text-white'>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link to='' className='dropdown-item text-white'>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
