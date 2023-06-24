import React, { useState } from 'react';
import './ProductInfo.css';
import QuantityPicker from './subComponents/quantityPicker/QuantityPicker.js';
import ModalDialog from './subComponents/popUp.js'
import I1 from '../../assets/i1.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const ProductInfo = (props) => {

  const handleQuantityChange = (value) => {
    console.log('Quantity changed:', value);
  };
  const [uploaded, setUploaded] = useState(false);
  const [showPopup, setshowPopup] = useState(false);
  const [popUpData, setData] = useState('');
  setTimeout(() => {
    setshowPopup(false);
  }, 2000);
  const handleUpload = (e) => {
    const file = e?.target?.files[0];
    setData(file?.name);
    setUploaded(!uploaded);
    setshowPopup(true);
    setTimeout(() => {
      setshowPopup(false);
    }, 2000);
  };

  const [selectedSize, setSelectedSize] = useState('12kg');
  let sizes = ['12kg', '100g', '1kg', '3kg', '9kg']
  return (
    <div className="main_div">
      {
        showPopup &&   <ModalDialog popUpData={popUpData}/>
      }
      <div className="product_title">
        Henlo Baked Dry Food for Adult Dogs | 100% human-grade ingredients
      </div>
      <div className="product_size">
        Size
      </div>
      <div className='rowcss'>
        {sizes.map((size, index) => (
          <div
          key={index}
          onClick={() => {
            setSelectedSize(size)
          }} className="product_size_box" style={{ border: selectedSize === size ? '3px solid green' : '1px solid black' }}>
            {size}
          </div>
        ))}
      </div>
      <div className="product_size">
        Quantity
      </div>
      <QuantityPicker min={1} max={10} initialValue={1} onQuantityChange={handleQuantityChange} />
      <div className="rowcssPI">
        <div className="product_price">
          ₹799
        </div>
        <div className="product_mrp_price">
          MRP ₹999
        </div>
      </div>
      {!uploaded ?
        <div className='upload-btn-main'>
          <input
            className='upload-btn'
            type="file"
            accept=".png,.jpeg,.pdf"
            onChange={handleUpload}
          />
          <div className='upload-prec'
          >
            UPLOAD PRESCRIPTION

          </div>
        </div>
        :
        <div
          onClick={props.addToCart}
          className='upload-prec' style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          ADD TO CART
        </div>}
      <img className='product-icon-wraper' src={I1} />
    </div>
  );
};

export default ProductInfo;


