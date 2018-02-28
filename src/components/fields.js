import React from 'react';
import SingleField from './field';
import fieldTypes from './field-types';


class Fields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        };
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(e) {
        this.setState({
            filter: e.currentTarget.value,
        });
    }
    render() {
        const filteredItems = fieldTypes.filter(item => item.type.includes(this.state.filter));
        const fieldItems = filteredItems.map((field, index) => {
            const firstLetter = field.type.charAt(0).toUpperCase();
            const title = `${firstLetter}${field.type.slice(1)}`;
            return <li onClick={this.props.onClick} id={field.type} key={index}><SingleField type={title} definition={field.definition} /></li>;
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

export default Fields;
