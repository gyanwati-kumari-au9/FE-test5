import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Components/header';
import Footer from '../Components/footer';
// import {Nav, Navbar} from 'react-bootstrap'


class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        mssg: ''
       
    }
     
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
   
    render() {
      return (
        <div className="container-fluid">
            <Header/>
          <div className="container" style={{marginTop:"20px"}}>
            <div className="row justify-content-center">
                <div className="col col-5">
                    <form onSubmit={this.handleSubmit}>
                       
                        <div className="form-group">
                            <label htmlFor="emailInput">Email address</label>
                            <input type="text" className="form-control" placeholder="username"  id="emailInput" aria-describedby="emailHelp"
                              onChange={event => this.setState({email: event.target.value})}
                            />
                            <small id="emailHelp" className="form-text text-muted">Please enter your Email.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Message</label>
                            <input type="mssg" className="form-control" id="exampleInputPassword1" placeholder="mssg" 
                              onChange={event => this.setState({mssg: event.target.value})}
                            />
                            <small id="emailHelp" className="form-text text-muted">Please enter your message.</small>
                        </div>
                       
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>
          </div>
          <Footer/>
        </div>
          
      )
    }
  }




export default ContactForm;