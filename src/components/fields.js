import React from 'react';
import { connect } from 'react-redux';
import SingleField from './field';
import fieldTypes from './field-types';
import { setFilter, setFieldType } from '../actions';

function mapStateToProps(state) {
    return {
        filter: state.filter,
    };
  }

class Fields extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
        this.fieldSelect = this.fieldSelect.bind(this);
    }
    handleFilter(e) {
        const query = e.currentTarget.value.toLowerCase();
        this.props.dispatch(setFilter(query));
    }
    fieldSelect(e) {
        this.props.dispatch(setFieldType(e.currentTarget.id));
    }
    render() {
        const filteredItems = fieldTypes.filter(item => item.type.includes(this.props.filter));
        const fieldItems = filteredItems.map((field, index) => {
            const firstLetter = field.type.charAt(0).toUpperCase();
            const title = `${firstLetter}${field.type.slice(1)}`;
            return <li onClick={this.fieldSelect} id={field.type} key={index}><SingleField type={title} definition={field.definition} /></li>;
        });
        return (
          <div className="field-container">
            <h2>Field Types</h2>
            <label className="filter-label" htmlFor="filter">Filter Types</label>
            <input onChange={e => this.handleFilter(e)}className="filter-input" type="text" name="filter" />
            <ul>
              {fieldItems}
            </ul>
          </div>
        );
    }
}

export default connect(mapStateToProps)(Fields);
