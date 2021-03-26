import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import storeContact from './storeContact'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={storeContact}>
          <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/contact-manager-react-redux/" component={Contacts} />
                <Route exact path="/contact-manager-react-redux/contact/add" component={AddContact} />
                <Route exact path="/contact-manager-react-redux/contact/edit/:id" component={EditContact} />
                <Route exact path="/contact-manager-react-redux/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
