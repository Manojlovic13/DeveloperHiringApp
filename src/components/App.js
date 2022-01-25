import React from "react"
import { v4 as uuidv4 } from "uuid"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Header from "./Header"
import DeveloperList from "./DeveloperList"
import AddDeveloper from "./AddDeveloper"
import UpdateDeveloper from "./UpdateDeveloper"

class App extends React.Component {
    state = {
        developers: [
            {
                id: uuidv4(),
                name: "Dusan",
                email: "dusanmanojlovic@protonmail.com",
                phone: "061/212/9859",
                location: "Pirot",
                profilePicture: "https://media-exp1.licdn.com/dms/image/C5603AQGdZ_SiyG6f_w/profile-displayphoto-shrink_800_800/0/1634043782222?e=1648684800&v=beta&t=bJPs8733LfveenYco7JDQaJaILxAqtnVWZSRj2DF7Tw",
                pricePerHour: "3",
                technology: "Javascript",
                description: "Birthday 11.2.1999.",
                yearsOfExp: "0",
                nativeLang: "Serbian",
                linkedInLink: "https://www.linkedin.com/in/du%C5%A1an-manojlovi%C4%87-813388223/",
                checked: false,
                hiredFrom: "",
                hiredTo: "",
            },
            {
                id: uuidv4(),
                name: "Aleksej",
                email: "aleksej@gmail.com",
                phone: "061/435/9859",
                location: "Sofia",
                profilePicture: "",
                pricePerHour: "8",
                technology: "Flutter",
                description: "",
                yearsOfExp: "4",
                nativeLang: "Bulgarian",
                linkedInLink: "",
                checked: false,
                hiredFrom: "",
                hiredTo: "",
            },
            {
                id: uuidv4(),
                name: "Ljiljana",
                email: "ljiljana5000@yahoo.com",
                phone: "060/443/0999",
                location: "Beograd",
                profilePicture: "",
                pricePerHour: "13",
                technology: "Java",
                description: "",
                yearsOfExp: "12",
                nativeLang: "Serbian",
                linkedInLink: "",
                checked: false,
                hiredFrom: "",
                hiredTo: "",
            }
        ]
    }

    addDeveloper = developer => {
        this.setState({ developers: [...this.state.developers, developer] })
    }
    deleteDeveloper = id => {
        this.setState({
            developers: [
                ...this.state.developers.filter(developer => {
                    return developer.id !== id
                })
            ]
        })
    }
    handleChange = (id) => {
        this.setState(prevState => ({
            developers: prevState.developers.map(developer => {
                if (developer.id === id) {
                    return {
                        ...developer,
                        checked: !developer.checked,
                    }
                }

                return developer;
            })
        }))
    }
    validateDates = (from, to) => {
        const fromArr = from.split("-")
        const toArr = to.split("-")

        const hireFrom = new Date(fromArr[0], fromArr[1] - 1, fromArr[2])
        const hireTo = new Date(toArr[0], toArr[1] - 1, toArr[2])

        if (hireFrom > hireTo || hireFrom < new Date() || from === "" || to === "") {
            return false
        }

        return true
    }
    hireDevelopers = (from, to) => {
        if (!this.validateDates(from, to)) {
            return "Please enter valid dates!"
        }
        let message = "Please check at least one developer!"
        this.setState({
            developers: [...this.state.developers.map(developer => {
                if (developer.checked === true) {
                    developer.checked = false;
                    developer.hiredFrom = from;
                    developer.hiredTo = to;
                    message = "Developer/s hired!"
                }
                return developer;
            })]
        })

        return message
    }
    findDeveloper = id => {
        let dev = {}

        this.state.developers.forEach(developer => {
            if (developer.id === id) {
                dev = developer
            }
        })

        return dev
    }
    updateDeveloper = developer => {
        this.setState(prevState => ({
            developers: prevState.developers.map(dev => {
                if (dev.id === developer.id) {
                    return dev = developer
                }
                return dev
            })
        }))
    }
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<> <DeveloperList developers={this.state.developers}
                                handleChangeProps={this.handleChange}
                                deleteDeveloperProps={this.deleteDeveloper}
                                hireDevelopersProps={this.hireDevelopers} />
                                <AddDeveloper addDeveloperProps={this.addDeveloper} /> </>}
                            />
                            <Route path="/update/:id" element={<UpdateDeveloper findDeveloperProps={this.findDeveloper} updateDeveloperProps={this.updateDeveloper} />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App