import React from "react"

function Header(){
    function showDevelopers(){
        document.getElementById("list-container").style.display = "block"
        document.getElementById("add-developer-form").style.display = "none"
    }

    function showAddDeveloper(){
        document.getElementById("list-container").style.display = "none"
        document.getElementById("add-developer-form").style.display = "block"
    }

    return (
        <header className="header">
            <h1 className="title">Prime Hiring</h1>
            <div className="menu" id="menu">
                <button type="button" onClick={showDevelopers} className="btn btn-menu">Browse developers</button>
                <button type="button" onClick={showAddDeveloper} className="btn btn-menu">Add developer</button>
            </div>
        </header>
    )
}

export default Header