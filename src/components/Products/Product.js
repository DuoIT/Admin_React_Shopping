import React, { Component } from 'react';
import Axios from 'axios';
import FormData from 'form-data'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cates : [],
            products : [],
            productId: '',
            name : '',
            img : [],
            des : '',
            price : undefined,
            cate : '',
            quantity : undefined,
            filter : '',
            currentPage: 1,
            todosPerPage: 5
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
    }
    isChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        await this.setState({[name] : value});
    }
    
    isChangeImage = async (e) => {        
        const name = e.target.name;
        const value = e.target.files[0]; 
        await this.setState({ [name] : value });        
        console.log(this.state.img);
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
        var data = new FormData();
        data.append('img', this.state.img);
        data.append('productId', this.state.productId);
        data.append('name', this.state.name);
        data.append('des', this.state.des);
        data.append('price', this.state.price);
        data.append('cate', this.state.cate);
        data.append('quantity', this.state.quantity);

        Axios.post('http://localhost:3000/admin/product', data)
        .then(async res => {
            console.log(res.data);            
            toast.success("Thêm sản phẩm: "+res.data.Product.name+" thành công!", {
                position: toast.POSITION.TOP_LEFT
            });
            await this.cancel();
            return this.getCatesAndProduct();             
        })
        .catch(err => {
            console.log(err.response);
        })
    }
    cancel = (e) => {
        return this.setState({
            name : '',
            img : [],
            des : '',
            price : 0,
            cate : '',
            quantity : 0,
        });
    }
    getCatesAndProduct = () => {
        return Axios.get("http://localhost:3000/")
        .then(doc => {            
            return this.setState({
                products : doc.data.products,
                cates: doc.data.cates
            })
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }

    componentWillMount = async () => {
        await this.getCatesAndProduct();        
    }

    showDataProducts = () => {
        console.log(this.state.filter);
        Axios.get('http://localhost:3000/search?q='+this.state.filter)
        .then(doc => {
            console.log(doc.data.products);
            this.setState({ products : doc.data.products });
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }

    handleClick(event) {
        this.setState({ currentPage: Number(event.target.id) });
    }

    clickProduct = async (product) => {
        console.log(product);        
        await this.setState({
            name : product.name,
            img : [],
            des : product.des,
            price : product.price,
            cate : product.cate,
            quantity : product.quantity,
            productId: product._id
        })
    }

    handleClickPrevious(event) {
        if(this.state.currentPage > 1) {
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }

    handleClickNext(event) {
        const maxLength = Math.ceil(this.state.products.length / this.state.todosPerPage)
        if(this.state.currentPage < maxLength) {
            this.setState({ currentPage: this.state.currentPage + 1 });
        }
    }

    deleteProduct = (product) => {
        console.log(product._id);
        return Axios.delete('http://localhost:3000/admin/delete/product/'+product._id)
        .then(async doc => {
            await console.log(doc.data);
            toast.success("Xóa sản phẩm: "+doc.data.Product.name+" thành công!", {
                position: toast.POSITION.TOP_LEFT
            });
            return this.getCatesAndProduct();
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }

    render() {
        const { products, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }        

        const renderPageNumbers = pageNumbers.map(number => {
            if(number === this.state.currentPage) 
            return (
                <li className="page-item active">
                    <Link key={number} id={number} onClick={this.handleClick} className="page-link" to="#">  {number}  </Link> 
                </li>
            )
            else  return (
                <li className="page-item">
                    <Link key={number} id={number} onClick={this.handleClick} className="page-link" to="#">  {number}  </Link> 
                </li>
            );
        });
        var imageProduct = <img style={{maxWidth: '100px', height: '100px'}} src="assets/images/add-product-icon.png" className="img-responsive rounded-circle" alt="user" />
        if(this.state.img !== undefined && this.state.img.length !== 0) {
            const path = URL.createObjectURL(this.state.img);
            console.log(path);
            imageProduct = <img style={{maxWidth: '100px', height: '100px'}}  src={path} className="img-responsive rounded-circle" alt="user" />
        } else {
            imageProduct = <img style={{maxWidth: '100px', height: '100px'}} src="assets/images/add-product-icon.png" className="img-responsive rounded-circle" alt="user" />
        }
        return (
            <div className="content-page">
            <ToastContainer autoClose={2000} /> 
                {/* Start content */}
                <div className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="m-t-0 header-title">Manage Product</h4>
                            <p className="text-muted m-b-30 font-14">
                            Thêm, sửa, xóa, cập nhật thông tin sản phẩm
                            </p>
                            <div className="row">
                            <div className="col-12">
                                <div className="p-20">
                                <form className="form-horizontal" role="form">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Tên sản phẩm</label>
                                        <div className="col-10">
                                            <input value={this.state.name} onChange={(e) => this.isChange(e)} type="text" name="name" className="form-control" placeholder="Nhập tên sản phẩm..." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Ảnh</label>
                                        <div className="col-10">
                                            <div className="card-box widget-user">
                                                <div  style={{display: 'flex', alignItems: 'center'}}>
                                                    <div style={{width: '20%'}}>
                                                        {imageProduct}                  
                                                    </div>
                                                    <div style={{width: '80%'}}>
                                                        <input id="imgUpload" onChange={(e) => this.isChangeImage(e)} type="file" name="img" className="form-control" />
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Mô tả</label>
                                        <div className="col-10">
                                            <textarea value={this.state.des} onChange={(e) => this.isChange(e)} name="des"  className="form-control" rows={5} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Giá sản phẩm</label>
                                        <div className="col-10">
                                            <input value={this.state.price} onChange={(e) => this.isChange(e)} name="price" min="0" type="number" className="form-control" placeholder="Nhập giá sản phẩm" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Số lượng trong kho</label>
                                        <div className="col-10">
                                            <input value={this.state.quantity} onChange={(e) => this.isChange(e)} name="quantity" min="0" type="number" className="form-control" placeholder="Số lượng hiện có trong kho" />
                                        </div>
                                    </div>   
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Loại sản phẩm</label>
                                        <div className="col-10">
                                            <select value={this.state.cate} onChange={(e) => this.isChange(e)} name="cate" className="custom-select">
                                                <option selected>Mở menu này</option>
                                                {
                                                    this.state.cates.map(cate => {
                                                        return <option value={cate.name}>{cate.name}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <button onClick={(e) => this.submit(e)} className="btn btn-primary btn-rounded w-md waves-effect waves-light m-b-5" type="button">Save</button>                                 
                                    <button style={{marginLeft: '10px'}} onClick={(e) => this.cancel(e)} className="btn btn-danger btn-rounded w-md waves-effect waves-light m-b-5" type="button">Cancel</button>                                 
                                </form>
                                </div>
                            </div>
                            </div>
                            {/* end row */}
                        </div> {/* end card-box */}
                        </div>{/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card-box table-responsive">
                                
                            <div className="col-sm-12 col-md-6">
                                <div className="dataTables_filter" id="responsive-datatable_filter">
                                    <label>Search:
                                        <input onChange={
                                            async (e) => {
                                                await this.isChange(e);
                                                await this.showDataProducts();
                                            }
                                            } name="filter" className="form-control form-control-sm" aria-controls="responsive-datatable" type="search" placeholder />
                                    </label>
                                </div>
                            </div>

                            <table id="key-table" className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ảnh</th>
                                    <th>Tên SP</th>
                                    <th>Mô tả</th>
                                    <th>Giá</th>
                                    <th>SL trong kho</th>
                                    <th>Loại</th>
                                    <th>Xóa</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    // filterProduct
                                    currentTodos.map((product, cur) => {
                                        return  (<tr>
                                                    <td>{cur+1}</td>
                                                    <td><img src={product.img} style={{width: '150px', height: '100px'}} /></td>
                                                    <td  onClick={() =>  this.clickProduct(product)} >{product.name}</td>
                                                    <td>{product.des}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.cate}</td>
                                                    <td>
                                                        <button onClick={() => this.deleteProduct(product)} className="btn btn-icon waves-effect waves-light btn-danger m-b-5"> <i className="fa fa-remove" /> </button>
                                                    </td>
                                                </tr>)
                                    })
                                }
                                </tbody>
                            </table>
                            <nav>
                                <ul className="pagination pagination-split">
                                    <li className="page-item">
                                        <NavLink onClick={this.handleClickPrevious} className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </NavLink>
                                    </li>

                                    {renderPageNumbers}

                                    <li className="page-item">
                                        <NavLink onClick={this.handleClickNext} className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>

                            </div>
                        </div>
                        </div> {/* end row */}
 
                    
                    </div> {/* container */}
                </div> {/* content */}
                <footer className="footer text-right">
                Lê Phước Hoài - Nguyễn Thị Thùy duong  © Đại học Duy Tân
                </footer>
                </div>
        );
    }
}

export default Product;