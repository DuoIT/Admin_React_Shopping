import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      // <div>
      //   <ul className="nav justify-content-center">
      //     <li className="nav-item">
      //       <Link className="nav-link active" to="/addProduct">Thêm Product</Link>
      //     </li>
      //     <li className="nav-item">
      //       <Link className="nav-link active" to="/addCates">Thêm Category</Link>
      //     </li>
      //     {/* <li className="nav-item">
      //       <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
      //     </li> */}
      // </ul>
      // </div>
      <div className="left side-menu">
        <div className="sidebar-inner slimscrollleft">
          {/* User */}
          <div className="user-box">
            <div className="user-img">
              <img src="assets/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-thumbnail img-responsive" />
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
                <NavLink className="waves-effect" to="/products"><i className="mdi mdi-view-dashboard" /> <span>Products</span></NavLink>
              </li>
              <li>
                <NavLink className="waves-effect" to="/cates"><i className="mdi mdi-view-dashboard" /> <span>Categories</span></NavLink>
              </li>
              {/* <li>
                <a href="typography.html" className="waves-effect"><i className="mdi mdi-format-font" /> <span> Typography </span> </a>
              </li>
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-invert-colors" /> <span> User Interface </span> <span className="menu-arrow" /></a>
                <ul className="list-unstyled">
                  <li><a href="ui-buttons.html">Buttons</a></li>
                  <li><a href="ui-cards.html">Cards</a></li>
                  <li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
                  <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                  <li><a href="ui-material-icons.html">Material Design Icons</a></li>
                  <li><a href="ui-font-awesome-icons.html">Font Awesome</a></li>
                  <li><a href="ui-dripicons.html">Dripicons</a></li>
                  <li><a href="ui-themify-icons.html">Themify Icons</a></li>
                  <li><a href="ui-modals.html">Modals</a></li>
                  <li><a href="ui-notification.html">Notification</a></li>
                  <li><a href="ui-range-slider.html">Range Slider</a></li>
                  <li><a href="ui-components.html">Components</a>
                  </li><li><a href="ui-sweetalert.html">Sweet Alert</a>
                  </li><li><a href="ui-treeview.html">Tree view</a>
                  </li><li><a href="ui-widgets.html">Widgets</a></li>
                </ul>
              </li>
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-texture" /><span className="badge badge-warning pull-right">7</span><span> Forms </span> </a>
                <ul className="list-unstyled">
                  <li><a href="form-elements.html">General Elements</a></li>
                  <li><a href="form-advanced.html">Advanced Form</a></li>
                  <li><a href="form-validation.html">Form Validation</a></li>
                  <li><a href="form-wizard.html">Form Wizard</a></li>
                  <li><a href="form-fileupload.html">Form Uploads</a></li>
                  <li><a href="form-wysiwig.html">Wysiwig Editors</a></li>
                  <li><a href="form-xeditable.html">X-editable</a></li>
                </ul>
              </li>
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-view-list" /> <span> Tables </span> <span className="menu-arrow" /></a>
                <ul className="list-unstyled">
                  <li><a href="tables-basic.html">Basic Tables</a></li>
                  <li><a href="tables-datatable.html">Data Table</a></li>
                  <li><a href="tables-responsive.html">Responsive Table</a></li>
                  <li><a href="tables-editable.html">Editable Table</a></li>
                  <li><a href="tables-tablesaw.html">Tablesaw Table</a></li>
                </ul>
              </li>
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-chart-donut-variant" /><span> Charts </span> <span className="menu-arrow" /></a>
                <ul className="list-unstyled">
                  <li><a href="chart-flot.html">Flot Chart</a></li>
                  <li><a href="chart-morris.html">Morris Chart</a></li>
                  <li><a href="chart-chartist.html">Chartist Charts</a></li>
                  <li><a href="chart-chartjs.html">Chartjs Chart</a></li>
                  <li><a href="chart-other.html">Other Chart</a></li>
                </ul>
              </li>
              <li>
                <a href="calendar.html" className="waves-effect"><i className="mdi mdi-calendar" /><span> Calendar </span></a>
              </li>
              <li>
                <a href="inbox.html" className="waves-effect"><i className="mdi mdi-email" /><span className="badge badge-purple pull-right">New</span><span> Mail </span></a>
              </li>
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-google-pages" /><span> Pages </span> <span className="menu-arrow" /></a>
                <ul className="list-unstyled">
                  <li><a href="page-starter.html">Starter Page</a></li>
                  <li><a href="page-login.html">Login</a></li>
                  <li><a href="page-register.html">Register</a></li>
                  <li><a href="page-recoverpw.html">Recover Password</a></li>
                  <li><a href="page-lock-screen.html">Lock Screen</a></li>
                  <li><a href="page-confirm-mail.html">Confirm Mail</a></li>
                  <li><a href="page-404.html">Error 404</a></li>
                  <li><a href="page-500.html">Error 500</a></li>
                </ul>
              </li>
              <li className="has_sub">
                <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-layers" /><span>Extra Pages </span> <span className="menu-arrow" /></a>
                <ul className="list-unstyled">
                  <li><a href="extras-projects.html">Projects</a></li>
                  <li><a href="extras-tour.html">Tour</a></li>
                  <li><a href="extras-taskboard.html">Taskboard</a></li>
                  <li><a href="extras-taskdetail.html">Task Detail</a></li>
                  <li><a href="extras-profile.html">Profile</a></li>
                  <li><a href="extras-maps.html">Maps</a></li>
                  <li><a href="extras-contact.html">Contact list</a></li>
                  <li><a href="extras-pricing.html">Pricing</a></li>
                  <li><a href="extras-timeline.html">Timeline</a></li>
                  <li><a href="extras-invoice.html">Invoice</a></li>
                  <li><a href="extras-faq.html">FAQ</a></li>
                  <li><a href="extras-gallery.html">Gallery</a></li>
                  <li><a href="extras-email-template.html">Email template</a></li>
                  <li><a href="extras-maintenance.html">Maintenance</a></li>
                  <li><a href="extras-comingsoon.html">Coming soon</a></li>
                </ul>
              </li> */}
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