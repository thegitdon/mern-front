import React, { Component } from 'react'
import ax from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateOrder extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        console.log(this.props.match.params)
        const res = await ax.get('http://localhost:4000/api/users');
        this.setState({
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username
        })
        //console.log(this.state.users)
        if (this.props.match.params.id) {
            const res = await ax.get('http://localhost:4000/api/orders/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                //date: res.data.date,
                date: new Date(res.data.date),
                //userSelected: res.data.author,
                editing: true,
                _id: this.props.match.params.id
            })

        }
    }

    onSubmit = async (e) => {
        //console.log(this.state.title, this.state.content)
        e.preventDefault();
        const newOrder = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        };
        if (this.state.editing) {
            await ax.put('http://localhost:4000/api/orders/' + this.state._id, newOrder);

        } else {
            await ax.post('http://localhost:4000/api/orders', newOrder);

        }
        /*const newOrder = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        };*/

        //await ax.post('http://localhost:4000/api/orders', newOrder);
        window.location.href = '/';
    }


    onInputChange = e => {
        //console.log(e.target.value, e.target.value)
        this.setState({
            //userSelected: e.target.value
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }
    render() {
        return (
            /*<div>
                Create Order
            </div>*/
            <div className="col-md-6">
                <div className="card card-body">
                    <h4>Create Order</h4>

                    <div className="form-group">
                        <select
                            name="userSelected"
                            onChange={this.onInputChange}
                            value={this.state.userSelected}>
                            {
                                this.state.users.map(user =>
                                    <option key={user} value={user}>{/** user._id*/}
                                        {user}{/**user.username */}

                                    </option>)

                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="xxx" name="title" onChange={this.onInputChange} value={this.state.title} required />
                    </div>
                    <div className="form-group">
                        <textarea name="content" onChange={this.onInputChange} value={this.state.content} required></textarea>
                    </div>
                    <div className="form-group">
                        <DatePicker selected={this.state.date} onChange={this.onChangeDate}></DatePicker>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit">Order</button>

                    </form>
                </div>
            </div>
        )
    }
}
