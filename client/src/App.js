import React, { Component } from 'react';
import AppNabar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {

componentDidMount() {
  store.dispatch(loadUser());
}

render() {
  return(
    <Provider store={store}>
      <div className="App">
        <AppNabar/>
        <Container>
          <ItemModal />
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}}

export default App;