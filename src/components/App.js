import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav';
import MainCard from './main-card';
import Modal from './modal';

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
  };
}

const App = (props) => {
  let modal;
  if (props.showModal) {
    modal = <Modal />;
  }
  return (
    <div className="App">
      <Nav />
      <h1>Create Custom Form</h1>
      <MainCard />
      {modal}
    </div>
  );
};

export default connect(mapStateToProps)(App);
