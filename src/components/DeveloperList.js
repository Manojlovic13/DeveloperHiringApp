import React from "react"

import Developer from "./Developer"
import HireDate from "./HireDate"

class DeveloperList extends React.Component {
    render() {
        return (
            <div className="list-container" id="list-container">
                <div className="list">
                    <ul>
                        {
                            this.props.developers.map(developer => (
                                <Developer key={developer.id}
                                    developer={developer}
                                    deleteDeveloperProps={this.props.deleteDeveloperProps}
                                    handleChangeProps={this.props.handleChangeProps}
                                />
                            ))
                        }

                    </ul>
                </div>
                <HireDate hireDevelopersProps={this.props.hireDevelopersProps} />
            </div>
        )
    }
}

export default DeveloperList