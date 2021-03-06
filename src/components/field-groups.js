import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, addInput } from '../actions';

function mapStateToProps(state) {
  return {
    groups: state.groups,
  };
}

class FieldGroups extends React.Component {
  showModal(e) {
    e.preventDefault();
    this.props.dispatch(toggleModal());
  }
  addInput(e, result) {
    this.props.dispatch(addInput(e.currentTarget.id, result));
  }
  render() {
    const grouplist = this.props.groups.map(group => (
      <li onClick={e => this.addInput(e, this.props.result)} className="field groups" id={group.name} key={group.name}>
        <div className="single-group">
          <h3>{group.name}</h3>
          <p>{group.inputs.length} other inputs</p>
        </div>
      </li>));
    return (
      <div className="field-groups">
        <h3>Field Groups</h3>
        <p>Choose a group for this input</p>
        <div className="list-container">
          <ul>
            {grouplist}
          </ul>
        </div>
        <div className="button-container">
          <button className="button" onClick={e => this.showModal(e)}>Add a New Group</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FieldGroups);
