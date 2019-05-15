import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/addProduct">Thêm Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/addCates">Thêm Category</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li> */}
      </ul>
      </div>
    );
  }
}

export default Nav;