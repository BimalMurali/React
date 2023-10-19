import React from 'react'



const Footer = ({items}) => {
    const today= new Date();
    return (
        <footer>
            <p>{items} List {items===1 || items===0? "item" : "items" }</p>
            <p>Copyright &copy;{today.getFullYear()}</p>


            
        </footer>
    )
}

export default Footer
