import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, createGroup } from '../actions';


export class Modal extends React.Component {

    hide(e) {
        e.preventDefault();
        this.props.dispatch(toggleModal());
    }
    createGroup(e) {
        e.preventDefault();
        const groupName = e.currentTarget.children[1].value
        if (groupName === '') {
            alert('Please enter a group name')
        } else {
            this.props.dispatch(createGroup(groupName));
        }
        
    }
    render() {
        return (
            <div className='modal-overlay'>
                <div className='modal width-50'>
                    <span onClick={e => this.hide(e)} className='close' id='item-close'>&times;</span>
                    <form onSubmit={e => this.createGroup(e)} className="modal-content">
                        <label htmlFor="groupName">Group Name</label>
                        <input type="text" id="groupName" name="groupName"/>
                        <input className="button" type="submit" value="Create Group"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(Modal);