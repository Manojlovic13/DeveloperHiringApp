import React from "react"

import Developer from "./Developer"
import HireDate from "./HireDate"

class DeveloperList extends React.Component {
    render() {
        return (
            <div>
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
                <HireDate hireDevelopersProps={this.props.hireDevelopersProps} />
            </div>
        )
    }
}

export default DeveloperList