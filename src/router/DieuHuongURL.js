import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AddProduct from '../components/Products/Product';
import AddCates from '../components/Cates/Cates';

class DieuHuongURL extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/products" component={AddProduct} />
                <Route path="/cates" component={AddCates} />
            </div>
        );
    }
}

export default DieuHuongURL;