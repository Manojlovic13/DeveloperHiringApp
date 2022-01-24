import React from "react"
import {v4 as uuidv4} from "uuid"

const initialState = {
    name: "",
    email: "",
    phone: "",
    location: "",
    profilePicture: "",
    pricePerHour: "50",
    technology: "Javascript",
    description: "",
    yearsOfExp: "0",
    nativeLang: "English",
    linkedInLink: "",
    inputError: "",
    requiredFields: "",
}

class AddDeveloper extends React.Component {
    state = initialState

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        if (this.state.name.trim() &&
            this.state.location.trim()) {

            const developer = {
                id: uuidv4(),
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                location: this.state.location,
                profilePicture: this.state.profilePicture,
                pricePerHour: this.state.pricePerHour,
                technology: this.state.technology,
                description: this.state.description,
                yearsOfExp: this.state.yearsOfExp,
                nativeLang: this.state.nativeLang,
                linkedInLink: this.state.linkedInLink,
                checked: false,
                hiredFrom: "",
                hiredTo: "",
            }

            this.props.addDeveloperProps(developer)

            this.setState(initialState)
        } else {
            this.setState({
                ...this.state, inputError: "Please fill in all the fields!",
                requiredFields: "*",
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>{this.state.requiredFields}Name:</label>
                <input type="text" name="name" onChange={this.onChange} required /><br></br>

                <label>Email:</label>
                <input type="email" name="email" onChange={this.onChange} required /><br></br>

                <label>Phone:</label>
                <input type="tel" name="phone" pattern="[0-9]{3}/[0-9]{3}/[0-9]{4}" placeholder="000/000/0000" onChange={this.onChange} required /><br></br>

                <label>{this.state.requiredFields}Location:</label>
                <input type="text" name="location" onChange={this.onChange} required /><br></br>

                <label>Profile picture (url to pic):</label>
                <input type="url" name="profilePicture" onChange={this.onChange} /><br></br>

                <label>Price per hour:</label>
                <input type="range" name="pricePerHour" min="0" max="100" onChange={this.onChange} required /><br></br>
                <div>${this.state.pricePerHour}</div>

                <label>Technology:</label>
                <select name="technology" defaultValue="Javascript" onChange={this.onChange}>
                    <option value="Javascript">Javascript</option>
                    <option value="Java">Java</option>
                    <option value=".NET">.NET</option>
                    <option value="Flutter">Flutter</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                </select><br></br>

                <label>Description:</label>
                <textarea name="description" onChange={this.onChange} /><br></br>

                <label>Years of expiriance:</label>
                <input type="range" name="yearsOfExp" defaultValue="0" min="0" max="70" onChange={this.onChange} required /><br></br>
                <div>{this.state.yearsOfExp}</div>

                <label>Native language:</label>
                <select name="nativeLang" defaultValue="English" onChange={this.onChange}>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Serbian">Serbian</option>
                    <option value="English">English</option>
                </select><br></br>

                <label>Linked In:</label>
                <input type="url" name="linkedInLink" onChange={this.onChange} /><br></br>

                <button>Submit</button>
                <div style={{ fontSize: 12, color: 'red' }}>
                    {this.state.inputError}
                </div>
            </form>
        )
    }
}

export default AddDeveloper