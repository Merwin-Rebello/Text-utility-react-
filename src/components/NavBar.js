import React from 'react'
import PropTypes from 'prop-types'
import { Link }  from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          < Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">{props.about}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
        </div>
    </div>
  </div>
</nav>
  )
}

NavBar.propTypes={
    title: PropTypes.string.isRequired, // the is required works like values is not passed than it will give an error as it is compulsory
    about: PropTypes.string    //this is to define explicitly the datatypes of the props 
}

NavBar.defaultProps={
    title:"default title", //this will work when in the app.js if the values are not passed and it will take these as teh default value
    about:"default about"
}