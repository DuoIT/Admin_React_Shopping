import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="topbar">
                {/* LOGO */}
                <div className="topbar-left">
                    <a href="index.html" className="logo"><span>Admin<span>to</span></span><i className="mdi mdi-layers" /></a>
                </div>
                {/* Button mobile view to collapse sidebar menu */}
                <div className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                    {/* Page title */}
                    <ul className="nav navbar-nav list-inline navbar-left">
                        <li className="list-inline-item">
                        <button className="button-menu-mobile open-left">
                            <i className="mdi mdi-menu" />
                        </button>
                        </li>
                        <li className="list-inline-item">
                        <h4 className="page-title">Dashboard</h4>
                        </li>
                    </ul>
                    <nav className="navbar-custom">
                        <ul className="list-unstyled topbar-right-menu float-right mb-0">
                        <li>
                            {/* Notification */}
                            <div className="notification-box">
                            <ul className="list-inline mb-0">
                                <li>
                                <a href="javascript:void(0);" className="right-bar-toggle">
                                    <i className="mdi mdi-bell-outline noti-icon" />
                                </a>
                                <div className="noti-dot">
                                    <span className="dot" />
                                    <span className="pulse" />
                                </div>
                                </li>
                            </ul>
                            </div>
                            {/* End Notification bar */}
                        </li>
                        <li className="hide-phone">
                            <form className="app-search">
                            <input type="text" placeholder="Search..." className="form-control" />
                            <button type="submit"><i className="fa fa-search" /></button>
                            </form>
                        </li>
                        </ul>
                    </nav>
                    </div>{/* end container */}
                </div>{/* end navbar */}
            </div>
        );
    }
}

export default Header;