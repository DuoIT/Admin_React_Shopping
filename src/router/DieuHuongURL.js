import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Product from '../components/Products/Product';
import Cates from '../components/Cates/Cates';
import Contact from '../components/Contact/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/products" component={Product} />
                <Route path="/cates" component={Cates} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default DieuHuongURL;