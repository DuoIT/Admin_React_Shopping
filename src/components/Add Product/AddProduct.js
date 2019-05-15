import React, { Component } from 'react';
import Axios from 'axios';
import FormData from 'form-data'

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            img : [],
            des : '',
            price : 0,
            cate : '',
            quantity : 0,
            message : undefined
        }
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name] : value});
    }
    
    isChangeImage = (e) => {
        console.log(e.target.files[0]);
        const name = e.target.name;
        const value = e.target.files[0]; 
        this.setState({ [name] : value });
    }

    submit = (e) => {
        e.preventDefault();
        var data = new FormData();
        // , this.state.img.name
        data.append('img', this.state.img);
        data.append('name', this.state.name);
        data.append('des', this.state.des);
        data.append('price', this.state.price);
        data.append('cate', this.state.cate);
        data.append('quantity', this.state.quantity);

        Axios.post('http://localhost:3000/admin/products', data)
        .then(res => {
            console.log(res.data);
            window.location.reload();
            return this.setState({message: 
                <div class="alert alert-success" role="alert">
                    Them product thanh cong
                </div>
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {

        console.log(this.state);
        return (
            <div className="row">
                <form className="col-md-12 col-sm-6" >
                    {this.state.message}
                    <div className="form-group">
                        <label > Name</label>
                        <input onChange={(e) => this.isChange(e)} name ="name" type="text" className="form-control" placeholder="Enter Name " />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        <label > Image </label>
                        <input accept="image/*" onChange={(e) => this.isChangeImage(e)} name="img" type="file" className="form-control" placeholder=" Input Image" />                        
                    </div>
                    <div className="form-group">
                        <label > Price</label>
                        <input onChange={(e) => this.isChange(e)} name="price" type="number" className="form-control" placeholder=" Enter Price" />                        
                    </div>
                    <div className="form-group">
                        <label > Enter Category </label>
                        <select onChange={(e) => this.isChange(e)} name="cate" class="form-control" id="exampleFormControlSelect1">
                            <option></option>
                            <option>HDD</option>
                            <option>RAM</option>
                            <option>Nguồn</option>
                            <option>GPU</option>
                            <option>CPU</option>
                        </select>                        
                    </div>
                    <div className="form-group">
                        <label > Des </label>
                        <textarea onChange={(e) => this.isChange(e)} name="des" type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                        
                    </div>
                    <div className="form-group">
                        <label > Quantity</label>
                        <input onChange={(e) => this.isChange(e)} name="quantity" type="number" className="form-control" placeholder=" Nhap So Luong Trong Kho" />                        
                    </div>
                    <button onClick={(e) => this.submit(e)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;