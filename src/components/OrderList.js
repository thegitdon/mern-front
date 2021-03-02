import React, { Component } from 'react'
import ax from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default class OrderList extends Component {

    state = {
        orders: []
    }

    /*async*/ componentDidMount(){
        this.getOrders();
    }

    async getOrders() {
        const res = await ax.get('http://localhost:4000/api/orders')
        this.setState({orders: res.data})
    }

    deleteOrder = async (id) => {
        //console.log(id)
        await ax.delete('http://localhost:4000/api/orders/' + id);
        this.getOrders();

    }
    render() {
        return (
            /*<div>
                Order List          
            </div>*/
            <div className="row">
                {
                    this.state.orders.map(order =>(
                        <div key={order._id}>
                            <div className="card">
                    <div className="card-header"><h5>{order.title}</h5>
                    <Link to={"/edit/" + order._id}>
                    Editar
                    </Link>
                    </div>
                                <div className="card-body">
                    <p>{order.content}</p>
                    <p>{order.author}</p>
                    <p>{order.date}</p>
                    <p>{format(order.date)}</p>

                                </div>
                                <div className="card-footer">
                                    <button onClick={() => this.deleteOrder(order._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
