import React from 'react';
//import {API} from '../config';
//import './ShowImage.css';

const ShowImage = ({item, url}) => (
  <div className="product-img">
    <img
      src={`http://localhost:4000/api/stock/photo/${item._id}`} //http://localhost:4000/api/stock
      alt={item.name}
      className="mb-3 img-cont"
      style={{maxHeight: "600px", maxWidth:"300px"}}/>
  </div>
)

export default ShowImage;