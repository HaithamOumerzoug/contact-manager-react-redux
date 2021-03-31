import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getContactByID , updateContact } from '../../actions/contactActions'
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {

  componentDidMount(){
    const {id}=this.props.match.params;
    this.props.getContactByID(id)
  }

  componentWillReceiveProps(nextProps,nextState){
    const {name,email,phone}=nextProps.contact;
  
    this.setState({
      name,
      email,
      phone
    })
  }
  //My State
  state={
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  //On Sumbit
  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    ///Update Contact
    const { id } = this.props.match.params;
    const updContact = {
      id,
      name,
      email,
      phone
    };

    this.props.updateContact(updContact)

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    //Back Home
    this.props.history.push('/contact-manager-react-redux');
  };

  //On Change Form Value
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
      return {
        contact : state.mycontact.contact
      }
} 

//Connect Redux and Component
export default connect(mapStateToProps,{getContactByID,updateContact})(EditContact);
