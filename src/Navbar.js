import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg "style={{backgroundColor:"#D24545", color:"#F8F4EC",}}>
    <div className="container-fluid">
    <NavLink to="/" className="nav-link">
  <a className="navbar-brand text-decoration-none" href="/">Todo list</a>
</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <NavLink to="/"><a className="nav-link text-decoration-none" aria-current="page" href='/'>Home</a></NavLink>  
          </li>
          <li className="nav-item">
            <NavLink to="/todos"><a className="nav-link text-decoration-none" href="/">Todo's</a></NavLink>  
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
