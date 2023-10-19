import React from 'react'


const Header = (props) => {
    const headerStyles = { color: 'black',
backgroundColor: 'white'};
    return (
        <header style={headerStyles}>
            <h1>{props.title}</h1>

        </header>
    )
}
Header.defaultProps ={
    title:"Default title"
}

export default Header;
 