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
                    <div>
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit">Signin</button>
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