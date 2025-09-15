import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import Account from '../components/Account';
import Security from '../components/Security';
import Privacy from '../components/Privacy';
import Orders from '../components/Orders';
import WishList from '../components/Wishlist';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <Account />;
      case "security":
        return <Security />;
      case "privacy":
        return <Privacy />;
      case "orders":
        return <Orders />;
      case "wishlist":
        return <WishList />;
      default:
        return <Account />;
    }
  };


  return (
    <>
      <Meta title={'User Dashboard'} />
      <BreadCrumb title='User Dashboard' />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        
           <div className='row'>
            
            <div className='col-12 profile-settings'>
              <div className='filter-sort-grid mb-4 text-center'>
                <h2 className='text-center'> Update Your Profile</h2>
                </div>

               {/* Botones */}
               <div className='ps-3'>
                <div className="d-flex gap-30 align-items-center  mb-4">
                <button
                  className={`profile-btn ${activeTab === "account" ? "active" : ""}`}
                  onClick={() => setActiveTab("account")}
                >
                  Account
                </button>
                <button
                  className={`profile-btn ${activeTab === "security" ? "active" : ""}`}
                  onClick={() => setActiveTab("security")}
                >
                  Security
                </button>
                <button
                  className={`profile-btn ${activeTab === "privacy" ? "active" : ""}`}
                  onClick={() => setActiveTab("privacy")}
                >
                  Privacy
                </button>
                <button
                  className={`profile-btn ${activeTab === "orders" ? "active" : ""}`}
                  onClick={() => setActiveTab("orders")}
                >
                  Orders
                </button>
                <button
                  className={`profile-btn ${activeTab === "wishlist" ? "active" : ""}`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  WishList
                </button>
              </div>

              {/* Contenido dinámico */}
              <div className="profile-content ">{renderContent()}</div>
               </div>
            </div>
                      
            </div>
          
      </Container>
    </>
  )
}

export default UserDashboard