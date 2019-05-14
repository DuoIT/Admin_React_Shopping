import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AddProduct from '../components/Add Product/AddProduct';

class DieuHuongURL extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/addProduct" component={AddProduct} />
            </div>
        );
    }
}

export default DieuHuongURL;