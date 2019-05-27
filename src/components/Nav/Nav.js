import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
            <div className="left side-menu">
              <div className="sidebar-inner slimscrollleft">
                {/* User */}
                <div className="user-box">
                  <div className="user-img">
                    <img src="/assets/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail img-responsive" />
                    <div className="user-status offline"><i className="mdi mdi-adjust" /></div>
                  </div>
                  <h5><a href="#">Mat Helme</a> </h5>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="mdi mdi-settings" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-custom">
                        <i className="mdi mdi-power" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End User */}
                {/*- Sidemenu */}
                <div id="sidebar-menu">
                  <ul>
                    <li className="text-muted menu-title">Navigation</li>
                    <li>
                      <NavLink className="waves-effect" to="/products"><i className="fa fa-product-hunt"></i> <span>Products</span></NavLink>
                    </li>
                    <li>
                      <NavLink className="waves-effect" to="/cates"><i className="fa fa-list-alt"></i> <span>Categories</span></NavLink>
                    </li>
                    <li>
                      <NavLink className="waves-effect" to="/contact"><i className="mdi mdi-contact-mail"></i> <span>Contact</span></NavLink>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
                {/* Sidebar */}
                <div className="clearfix" />
              </div>
            </div>
    );
  }
}

export default Nav;