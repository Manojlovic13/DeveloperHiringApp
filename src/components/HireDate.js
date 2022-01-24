import React from "react"

class HireDate extends React.Component {
    state = {
        from: "",
        to: "",
        message: "",
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const message = this.props.hireDevelopersProps(this.state.from, this.state.to)
        this.setState({
            message: message,
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>From:</label>
                    <input type="date" name="from" onChange={this.onChange} /><br></br>

                    <label>To:</label>
                    <input type="date" name="to" onChange={this.onChange} /><br></br>

                    <button>Hire</button>
                </form>
                {this.state.message}
            </div>
        )
    }
}

export default HireDate