import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const state = {
    developer: {
        id: "",
        name: "",
        phone: "",
        location: "",
        profilePicture: "",
        pricePerHour: "",
        technology: "",
        description: "",
        yearsOfExp: "",
        nativeLang: "",
        linkedInLink: ""
    }
}




export default function (props) {
    const { id } = useParams()
    const developer = props.findDeveloperProps(id)
    const [state, setState] = useState(developer)

    const handleSubmit = e => {
        e.preventDefault()
        if (state.name.trim() && state.location.trim()) {
            props.updateDeveloperProps(state)
        }
    }

    const onChange = e => {
        setState(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const showMenu = () => {
        document.getElementById("menu").style.display = "block"
    }



    return (
        <div>
            <Link to="/" onClick={showMenu}><img src="https://cdn-icons-png.flaticon.com/512/0/340.png" className="back-img"></img></Link>
            <h1 className="title">Update {developer.name}'s profile</h1>

            <form onSubmit={handleSubmit} className="add-and-update-form card">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={state.name} onChange={onChange} required />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" defaultValue={state.email} onChange={onChange} required />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}/[0-9]{3}/[0-9]{4}" placeholder="000/000/0000" defaultValue={state.phone} onChange={onChange} required /><br></br>
                </div>

                <div className="form-group">
                    <label>Location:</label>
                    <input type="text" name="location" defaultValue={state.location} onChange={onChange} required />
                </div>

                <div className="form-group">
                    <label>Profile picture (url):</label>
                    <input type="url" name="profilePicture" defaultValue={state.profilePicture} onChange={onChange} />
                </div>


                <div className="form-group">
                    <label>Price per hour:</label>
                    <input type="range" name="pricePerHour" defaultValue={state.pricePerHour} onChange={onChange} required />
                    <div>${state.pricePerHour}</div>
                </div>

                <div className="form-group">
                    <label>Technology:</label>
                    <select name="technology" defaultValue={state.technology} onChange={onChange}>
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
                    <textarea name="description" defaultValue={state.description} onChange={onChange} />
                </div>

                <div className="form-group">
                    <label>Years of expiriance:</label>
                    <input type="range" name="yearsOfExp" defaultValue={state.yearsOfExp} min="0" max="70" required onChange={onChange} />
                    <div>{state.yearsOfExp}</div>
                </div>

                <div className="form-group">
                    <label>Native language:</label>
                    <select name="nativeLang" defaultValue={state.nativeLang} onChange={onChange}>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Serbian">Serbian</option>
                        <option value="English">English</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Linked In:</label>
                    <input type="url" name="linkedInLink" defaultValue={state.linkedInLink} onChange={onChange} />
                </div>

                <div className="form-group">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}