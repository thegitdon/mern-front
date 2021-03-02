import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
//import './Card.css';
import ShowImage from './ShowImage';

const Card = ({stock}) => {
  const [count, setCount] = useState(stock.count)

  return (
    <div className="card m-10 card-cont">
      <div>
        <ShowImage className="img" item={stock} url="stock"/>
        <p>{stock.name}</p>
        <p>${stock.price}</p>
        <p>{stock.description}</p>
          {/*<Link to={'/stock/${stock._id}'}>
            <button className="btn btn-success">Ver Más</button>
  </Link>*/}
      </div>
    </div>
  )
}

export default Card;