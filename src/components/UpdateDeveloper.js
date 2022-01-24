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
        if (state.name.trim() && state.location.trim()){
            props.updateDeveloperProps(state)
        }
    }

    const onChange = e => {
            setState(prevState => {
                return {...prevState, [e.target.name]: e.target.value }
            })
    }



    return (
        <div>
            <Link to="/">Back</Link>
            <h1>Update {developer.name}'s profile</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" defaultValue={state.name} onChange={onChange} required /><br></br>

                <label>Email:</label>
                <input type="email" name="email" defaultValue={state.email} onChange={onChange} required /><br></br>

                <label>Phone</label>
                <input type="tel" name="phone" pattern="[0-9]{3}/[0-9]{3}/[0-9]{4}" placeholder="000/000/0000" defaultValue={state.phone} onChange={onChange} required /><br></br>

                <label>Location:</label>
                <input type="text" name="location" defaultValue={state.location} onChange={onChange} required /><br></br>

                <label>Profile picture (url):</label>
                <input type="url" name="profilePicture" defaultValue={state.profilePicture} onChange={onChange} /><br></br>

                <label>Price per hour:</label>
                <input type="range" name="pricePerHour" defaultValue={state.pricePerHour} onChange={onChange} required /><br></br>
                <div>${state.pricePerHour}</div>


                <label>Technology:</label>
                <select name="technology" defaultValue={state.technology} onChange={onChange}>
                    <option value="Javascript">Javascript</option>
                    <option value="Java">Java</option>
                    <option value=".NET">.NET</option>
                    <option value="Flutter">Flutter</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                </select><br></br>

                <label>Description:</label>
                <textarea name="description" defaultValue={state.description} onChange={onChange} /><br></br>

                <label>Years of expiriance:</label>
                <input type="range" name="yearsOfExp" defaultValue={state.yearsOfExp} min="0" max="70" required onChange={onChange} /><br></br>
                <div>{state.yearsOfExp}</div>

                <label>Native language:</label>
                <select name="nativeLang" defaultValue={state.nativeLang} onChange={onChange}>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Serbian">Serbian</option>
                    <option value="English">English</option>
                </select><br></br>

                <label>Linked In:</label>
                <input type="url" name="linkedInLink" defaultValue={state.linkedInLink} onChange={onChange}/><br></br>

                <button>Submit</button>
            </form>
        </div>
    )
}