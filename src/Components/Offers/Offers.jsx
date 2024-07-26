import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className="offers">
      <div className='offers-left'>
        <h2>Exclusive</h2>
        <h3>Offers For You</h3>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
