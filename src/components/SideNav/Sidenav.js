import React from 'react'
import "../SideNav/Sidenav.css"
import { Link } from 'react-router-dom'

function Sidenav() {
    const linkStyle = {
        marginTop: "1vmax",
        textDecoration: "none",
        color: 'black',
        fontFamily:'Product sans',
        fontSize:"1.3vmax"
      };
      
    return (
   <>
   <div className="sidenav">
<Link style={linkStyle} to='/'>Create</Link><br /><br />
<Link style={linkStyle} to='/delete'>Delete</Link><br /><br />
<Link style={linkStyle} to='/update'>Update</Link><br /><br />
<Link style={linkStyle} className='.links4' to='/trash'>Trash</Link><br /><br />
  </div>
   
   
   </>
  )
}

export default Sidenav