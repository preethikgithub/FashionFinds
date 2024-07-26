import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
      <div className='descriptionbox-nav-box'>Description</div>
      <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce website serves as a digital marketplace where businesses and consumers can buy and sell a wide range of products and services online. It offers a user-friendly interface that allows customers to browse through various categories, view detailed product descriptions, and make purchases with ease. Integrated with secure payment gateways, it ensures safe transactions while providing multiple payment options. The website often includes features such as customer reviews, wish lists, and personalized recommendations to enhance the shopping experience. Additionally, it supports efficient order management, tracking, and customer service to handle inquiries and returns. With mobile compatibility, the site ensures a seamless shopping experience across all devices.</p>
        <p>Furthermore, an e-commerce website leverages advanced analytics to understand customer behavior and optimize sales strategies. It incorporates marketing tools like email campaigns, discounts, and loyalty programs to attract and retain customers. Regular updates and maintenance ensure the platform remains secure, reliable, and user-friendly.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
