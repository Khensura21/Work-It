import axios from 'axios';
import React, { Component } from 'react';



export default class CreateUser extends Component {
    constructor(props){
        super(props)
        

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        //send user to backend endpoint to enter user in database
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error)
            })

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type ="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value= "Create User" className="btn btn-primary" />
                    </div>
               </form>
            </div>
        )
    }
}