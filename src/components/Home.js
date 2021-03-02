import React, {useState, useEffect} from 'react';
import { getStock } from './apiCore';
import Card from './Card';



const Home = (req, res) => {
    const [stock, setStock] = useState([]);
    const [error, setError] = useState(false);

    const loadStock = () => {
        getStock().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setStock(data);
                console.log(data);
            }
        })
    }

    useEffect(() => {
        loadStock();
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {stock.map((stock, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
                            <Card stock={stock} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Home;
