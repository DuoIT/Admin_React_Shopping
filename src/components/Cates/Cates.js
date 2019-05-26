import React, { Component } from 'react';
import Axios from 'axios';
import FormData from 'form-data'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Cates extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name : '',
    //         err: '',
    //         result: ''
    //     }
    // }
    // isChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({[name] : value});
    // }
    
    // submit = (e) => {        
    //     e.preventDefault();
    //     // this.setState({
    //     //     err: '',
    //     //     result: ''
    //     // });
    //     Axios.post('http://localhost:3000/admin/category', {name: this.state.name})
    //     .then(res => {
    //         console.log(res.data);
    //         this.setState({result: res.data})
    //         // window.location.reload();
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //         this.setState({err: err.response});
    //     })
    // }

    // render() {
    //     var message = undefined;
    //     if(this.state.result !== '') {
    //         message = (
    //             <div class="alert alert-success" role="alert">
    //                 Them cate {this.state.result} thanh cong
    //             </div>
    //         )
    //     }
    //     var err = undefined;
    //     if(this.state.err !== '') {
    //         err = (
    //             <div class="alert alert-danger" role="alert">
    //                 Co loi xay ra
    //                 <p> {this.state.err} </p>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div className="row">
    //             <form className="col-md-12 col-sm-6" >
    //                 {this.state.message}
    //                 {this.state.err}
    //                 <div className="form-group">
    //                     <label > Name</label>
    //                     <input onChange={(e) => this.isChange(e)} name ="name" type="text" className="form-control" placeholder="Enter Name " />
    //                     {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    //                 </div>
    //                 <button onClick={(e) => this.submit(e)} type="submit" className="btn btn-primary">Submit</button>
    //             </form>
    //         </div>
    //     );
    // }
    constructor(props) {
        super(props);
        this.state = {
            cates : [],
            products : [],
            cateId: '',
            filter : '',
            name: ''
        }
    }

    isChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        await this.setState({[name] : value});
    }
    
    submit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/admin/cate', {
            name : this.state.name,
            cateId : this.state.cateId
        })
        .then(async res => {
            console.log(res.data);            
            toast.success("Thêm category: "+res.data.cate.name+" thành công!", {
                position: toast.POSITION.TOP_LEFT
            });
            await this.cancel();
            return this.getCatesAndProduct();             
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }
    cancel = (e) => {
        return this.setState({
            name : ''
        });
    }
    getCatesAndProduct = () => {
        return Axios.get("http://localhost:3000/")
        .then(doc => {            
            return this.setState({
                cates: doc.data.cates
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillMount = async () => {
        await this.getCatesAndProduct();        
    }

    showDataCates = () => {
        console.log(this.state.filter);
        Axios.get('http://localhost:3000/search/cate?q='+this.state.filter)
        .then(doc => {
            console.log(doc.data);
            this.setState({ cates : doc.data.cates });
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleClick(event) {
        this.setState({ currentPage: Number(event.target.id) });
    }

    clickProduct = async (product) => {
        console.log(product);        
        await this.setState({
            name : product.name,
            cateId: product._id
        })
    }

    deleteCate = (cate) => {
        console.log(cate._id);
        return Axios.delete('http://localhost:3000/admin/delete/cate/'+cate._id)
        .then(async doc => {
            await console.log(doc.data);
            toast.success("Xóa category: "+doc.data.cate.name+" thành công!", {
                position: toast.POSITION.TOP_LEFT
            });
            return this.getCatesAndProduct();
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        
        return (
            <div className="content-page">
            <ToastContainer autoClose={2000} /> 
                {/* Start content */}
                <div className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="card-box">
                            <h4 className="m-t-0 header-title">Manage Category</h4>
                            <p className="text-muted m-b-30 font-14">
                            Thêm, sửa, xóa, cập nhật loại sản phẩm
                            </p>
                            <div className="row">
                            <div className="col-12">
                                <div className="p-20">
                                <form className="form-horizontal" role="form">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Tên loại</label>
                                        <div className="col-10">
                                            <input value={this.state.name} onChange={(e) => this.isChange(e)} type="text" name="name" className="form-control" placeholder="Nhập tên loại..." />
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
                                                await this.showDataCates();
                                            }
                                            } name="filter" className="form-control form-control-sm" aria-controls="responsive-datatable" type="search" placeholder />
                                    </label>
                                </div>
                            </div>

                            <table id="key-table" className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Tên</th>
                                    <th>Xóa</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    // filterProduct
                                    this.state.cates.map((cate, cur) => {
                                        return  (<tr>
                                                    <td>{cur+1}</td>                                                    
                                                    <td onClick={() =>  this.clickProduct(cate)} >{cate._id}</td>
                                                    <td onClick={() =>  this.clickProduct(cate)} >{cate.name}</td>
                                                    <td>
                                                        <button onClick={() => this.deleteCate(cate)} className="btn btn-icon waves-effect waves-light btn-danger m-b-5"> <i className="fa fa-remove" /> </button>
                                                    </td>
                                                </tr>)
                                    })
                                }
                                </tbody>
                            </table>
                            

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

export default Cates;