import React, { Component } from 'react';
import Axios from 'axios';
import FormData from 'form-data'

class AddCates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            err: '',
            result: ''
        }
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name] : value});
    }
    
    submit = (e) => {        
        e.preventDefault();
        // this.setState({
        //     err: '',
        //     result: ''
        // });
        Axios.post('http://localhost:3000/admin/category', {name: this.state.name})
        .then(res => {
            console.log(res.data);
            this.setState({result: res.data})
            // window.location.reload();
        })
        .catch(err => {
            console.log(err.response);
            this.setState({err: err.response});
        })
    }

    render() {
        var message = undefined;
        if(this.state.result !== '') {
            message = (
                <div class="alert alert-success" role="alert">
                    Them cate {this.state.result} thanh cong
                </div>
            )
        }
        var err = undefined;
        if(this.state.err !== '') {
            err = (
                <div class="alert alert-danger" role="alert">
                    Co loi xay ra
                    <p> {this.state.err} </p>
                </div>
            )
        }
        return (
            <div className="row">
                <form className="col-md-12 col-sm-6" >
                    {this.state.message}
                    {this.state.err}
                    <div className="form-group">
                        <label > Name</label>
                        <input onChange={(e) => this.isChange(e)} name ="name" type="text" className="form-control" placeholder="Enter Name " />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <button onClick={(e) => this.submit(e)} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddCates;