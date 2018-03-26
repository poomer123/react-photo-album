import React, { Component } from "react"

class Signin extends Component {
    state = {
        username: '',
        password: '',
    }
    render() {
        return (
            <div>
                <h1>Signin</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        this.setState({
            [name]: value,
        })
        console.warn(name)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('access-token', true)
        this.props.history.push('/')
    }
}

export default Signin