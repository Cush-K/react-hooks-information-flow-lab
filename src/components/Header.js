import React from "react"


function Header({ heading, onDarkModeClick, data, label }) {
    return (
        <header>
            <h2>{heading}</h2>
            <button onClick={onDarkModeClick}>
                {data} {label}
            </button>
        </header>
    )
}

export default Header;