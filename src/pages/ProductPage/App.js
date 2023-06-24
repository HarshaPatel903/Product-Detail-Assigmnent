import './App.css';
import React, { useState } from 'react';
import ImageSlider from '../../components/ImageSlider/imageSlider.js'
import Header from '../../components/Header/Header.js'
import ProductInfo from '../../components/ProductInfo/ProductInfo.js'
import II1 from '../../assets/ii1.jpeg'
import II2 from '../../assets/i2.jpg'
import II3 from '../../assets/i3.jpg'
import II4 from '../../assets/i4.jpg'



function App() {
  let images = [II4,II2,II3,II1];
  const [count, setCount] = useState(1);
  const[adddToCart, setAdddToCart] = useState(false);


  const addToCart = () => {
    setCount(count + 1);
    setAdddToCart(true);
  };

  return (
    <div>
       <Header count={count} adddToCart={adddToCart} setAdddToCart={setAdddToCart} />
       <div className='row-product-info'>
       <ImageSlider images={images} />
       <ProductInfo addToCart={addToCart}/>
       </div>

    </div>
  );
}

export default App;
