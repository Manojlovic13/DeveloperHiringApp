import React from "react"
import { v4 as uuidv4 } from "uuid"

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
            document.getElementById("add-developer-form").reset()
            this.setState(initialState)

            this.setState({
                ...this.state, inputError: "Developer added successfully!"
            })
        } else {
            this.setState({
                ...this.state, inputError: "Please fill in all the fields!",
                requiredFields: "*",
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} id="add-developer-form" className="add-and-update-form card">
                <div className="form-group">
                    <label>{this.state.requiredFields}Name:</label>
                    <input type="text" name="name" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}/[0-9]{3}/[0-9]{4}" placeholder="000/000/0000" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>{this.state.requiredFields}Location:</label>
                    <input type="text" name="location" onChange={this.onChange} required />
                </div>

                <div className="form-group">
                    <label>Profile picture (url to pic):</label>
                    <input type="url" name="profilePicture" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Price per hour:</label>
                    <input type="range" name="pricePerHour" min="0" max="100" onChange={this.onChange} required />
                    <div>${this.state.pricePerHour}</div>
                </div>

                <div className="form-group">
                    <label>Technology:</label>
                    <select name="technology" defaultValue="Javascript" onChange={this.onChange}>
                        <option value="Javascript">Javascript</option>
                        <option value="Java">Java</option>
                        <option value=".NET">.NET</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Python">Python</option>
                        <option value="PHP">PHP</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea name="description" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Years of expiriance:</label>
                    <input type="range" name="yearsOfExp" defaultValue="0" min="0" max="70" onChange={this.onChange} required />
                    <div>{this.state.yearsOfExp}</div>
                </div>

                <div className="form-group">
                    <label>Native language:</label>
                    <select name="nativeLang" defaultValue="English" onChange={this.onChange}>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Serbian">Serbian</option>
                        <option value="English">English</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Linked In:</label>
                    <input type="url" name="linkedInLink" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Submit</button>
                </div>
                <div className="form-group">
                    {this.state.inputError}
                </div>
            </form>
        )
    }
}

export default AddDeveloper