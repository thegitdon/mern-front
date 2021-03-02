import React, { Component } from 'react'
import ax from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        //fetch()
        //const res = await ax.get('http://localhost:4000/api/users');
        //console.log(res)
        //this.setState({users: res.data});
        this.getUsers();
        console.log(this.state.users)

    }

    getUsers = async () => {
        const res = await ax.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    onChangeUserName = (e) => {
        //console.log(e.target.value)
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await ax.post('http://localhost:4000/api/users', {
            username: this.state.username
        })
        //console.log(res)
        this.setState({username: ''});
        this.getUsers();
    }

    deleteUser = async (id) => {
        //console.log(id)
        await ax.delete('http://localhost:4000/api/users/' + id)
        this.getUsers();
    }

    render() {
        return (
            <div className="row">
                {//Create User
                }
                <div className="col-md-4">
                    {//Form
                    }
                    <div className="card card-body">
                        <h3>Create</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" value={this.state.username} onChange={this.onChangeUserName}/>
                            </div>
                            <div>
                                <button type="submit">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                            <li className="list-group-item list-group-item-action" 
                            key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                {user.username}
                            </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
