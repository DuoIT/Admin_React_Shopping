import React, { Component } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            status : 0,
            contact : {},
            search: ''
        }
    }

    getContact = () =>  {
        return Axios.get('http://localhost:3000/admin/contact')
        .then(doc => {
            return this.setState({
                contacts : doc.data.contacts
            });
        })
    }

    componentWillMount() {
        this.getContact();
    }
    
    loadDetailContact = (contact) => {
        this.setState({
            status: 1,
            contact: contact
        });
    }

    back = () => {
        return this.setState({status: 0});
    }

    delete = () => {
        return Axios.delete('http://localhost:3000/admin/contact/'+this.state.contact._id)
        .then(doc => {
            console.log(doc.data);
            this.getContact();
            return this.setState({status: 0});
        })
        .catch(err => {
            console.log(err);
        })
    }

    isChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;

        await this.setState({[name]: value});
        return Axios.get('http://localhost:3000/admin/search/contact?q='+this.state.search)
        .then(doc => {
            console.log(doc.data);
            return this.setState({contacts: doc.data.contacts});
            // return this.getContact();
        })
        .catch(err => {
            console.log(err.response.data);
        })
    }
 
    render() {
        var load = undefined;
        if(this.state.status === 0) {
            load = <main id="main" style={{maxWidth: '80%', left: '270px'}}>
                        <header className="header">
                            <h1 className="page-title"><a className="sidebar-toggle-btn trigger-toggle-sidebar"><span className="line" /><span className="line" /><span className="line" /><span className="line line-angle1" /><span className="line line-angle2" /></a></h1>
                            <div className="search-box pull-left">
                                <input onChange={(e) => this.isChange(e)} name="search" placeholder="Search subject..." /><span className="icon fa fa-search" />
                            </div>
                            <div className="clearfix" />
                        </header>
                        <div id="main-nano-wrapper" className="nano has-scrollbar">                    
                            <div className="nano-content" tabIndex={0} style={{right: '-17px'}}>
                                <ul className="message-list">
                                    {
                                        this.state.contacts.map(contact => {
                                            return <li className="unread active">
                                                        <div className="mail-col mail-col-1"><span className="dot" />
                                                            <p><a onClick={() => this.loadDetailContact(contact)} className="title">{contact.subject}</a></p>
                                                            </div>
                                                            <div className="mail-col mail-col-2">
                                                            <div className="subject">{contact.name} @ {contact.email}
                                                            </div>
                                                            <div className="date">{(new Date(contact.time).getDate())}/{(new Date(contact.time).getMonth())}/{(new Date(contact.time).getFullYear())}</div>
                                                        </div>
                                                    </li>
                                        })
                                    }  
                                </ul>
                                <a href="#" className="load-more-link">Show more messages</a>
                            </div>
                        </div>    
                    </main>
             
        } else {
            load = <div>
                    <main id="main" style={{maxWidth: '80%', left: '270px', height: '85px'}}>
                        <header className="header">
                            <h1 className="page-title"><a className="sidebar-toggle-btn trigger-toggle-sidebar"><span className="line" /><span className="line" /><span className="line" /><span className="line line-angle1" /><span className="line line-angle2" /></a></h1>
                            <div className="action-bar pull-left">
                                <ul className="list-inline mb-0">
                                    <li onClick={() => this.back()} className="list-inline-item">
                                        <a className="icon circle-icon"><i className="fa fa-chevron-left" /></a>
                                    </li>
                                    <li onClick={() => this.delete()} className="list-inline-item">
                                        <a className="icon circle-icon red"><i className="mdi mdi-close text-danger" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix" />
                        </header>
                    </main>
                    <div className="row" style={{backgroundColor: '#fff', marginTop: '100px'}}>
                <div className="col-12">
                    <div className="p-20">
                    <form className="form-horizontal" role="form">
                        <div className="form-group row">
                        <label className="col-2 col-form-label">Tên</label>
                        <div className="col-10">
                            <input disabled type="text" value={this.state.contact.name} className="form-control"/>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="col-2 col-form-label" htmlFor="example-email">Email</label>
                        <div className="col-10">
                            <input disabled value={this.state.contact.email} type="email" id="example-email" name="example-email" className="form-control"/>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="col-2 col-form-label">Tiêu đề</label>
                        <div className="col-10">
                            <input disabled value={this.state.contact.subject} type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="col-2 col-form-label">Thời gian gởi</label>
                        <div className="col-10">
                            <input disabled value={(new Date(this.state.contact.time)).getHours() +":"+ (new Date(this.state.contact.time)).getMinutes() +":"+ (new Date(this.state.contact.time)).getSeconds() +" "+ (new Date(this.state.contact.time)).getDate() +"/"+ (new Date(this.state.contact.time)).getMonth() +"/"+ (new Date(this.state.contact.time)).getFullYear()} type="text" className="form-control"  />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label className="col-2 col-form-label">Message</label>
                        <div className="col-10">
                            <textarea disabled value={this.state.contact.message} className="form-control" rows={5} defaultValue={""} />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                {/* </main> */}
                </div>
        }
        return (
            <div>
                <div className="content-page">
                    {/* Start content */}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="inbox-app-main">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {load}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End row */}
                        </div> {/* container */}
                    </div> {/* content */}
                </div>
            </div>

        );
    }
}

export default Contact;