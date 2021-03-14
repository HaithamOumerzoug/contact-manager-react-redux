import React, { Component } from 'react';
import { connect } from 'react-redux'

import Contact from './Contact';
import { getContacts } from '../../actions/contactActions'

class Contacts extends Component {

  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-warning">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    contacts : state.mycontact.contacts
  }
}
/*const mapDispatchToProps=(dispatch)=>{
  return{
    getContacts:()=>{
      dispatch({
        type:"GET_CONTACTS",
      })
    }
  }
}*/

//Connect Redux and Component
export default connect(mapStateToProps,{getContacts})(Contacts);
