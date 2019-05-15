import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AddProduct from '../components/Add Product/AddProduct';
import AddCates from '../components/AddCates/AddCates';

class DieuHuongURL extends Component {
    render() {
        return (
            <div className="container">
                <Route exact path="/addProduct" component={AddProduct} />
                <Route path="/addCates" component={AddCates} />
            </div>
        );
    }
}

export default DieuHuongURL;