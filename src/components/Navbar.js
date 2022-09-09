import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand px-3" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abouttext}</Link>
            </li>

          </ul>
          <div className="button1">

            <label className="switch">
              <input type="checkbox" onClick={props.toggleMode} />
              <span className="slider round">Dark Mode</span>
            </label>
          </div>
          {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}

        </div>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  abouttext: PropTypes.string
}
Navbar.defaultProps = {
  title: "set title here",
  aboutus: "about us"
}