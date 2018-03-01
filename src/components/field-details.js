import React from 'react';
import { connect } from 'react-redux';
import Tags from './tags';
import {setLabel, setPlaceholder, setValidation, setOptions} from '../actions';

function mapStateToProps(state) {
    return {
        placeholder: state.placeholder,
        options: state.options,
        label: state.label,
        type: state.type,
        iref: state.ref,
    };
}

class FieldDetails extends React.Component{
    constructor(props) {
        super(props);

        this.setLabel = this.setLabel.bind(this);
        this.setPlaceholder = this.setPlaceholder.bind(this);
        this.setValidation = this.setValidation.bind(this);
        this.setOptions = this.setOptions.bind(this);

    }
    setLabel(e) {
        this.props.dispatch(setLabel(e.currentTarget.value))
    }
    setPlaceholder(e) {
        this.props.dispatch(setPlaceholder(e.currentTarget.value))
    }
    setValidation(e) {
        this.props.dispatch(setValidation(e.currentTarget.value))
    }
    setOptions(e) {
        const options = e.currentTarget.value.split(', ');
        this.props.dispatch(setOptions(options))        
    }
    render () {
        let optionInput;
        let result;
        let options;
        if (this.props.options) {
            options = this.props.options.map((option, index) => {
                if (this.props.type === 'select') {
                    return <option key={index} value='option'>{option}</option>
                } else if (this.props.type === 'radio') {
                    return <label key={index}><input type='radio' value={option} checked={this.props.selectedOption === { option }} />{option}</label>
                }
            })
        }
        if (this.props.type === 'select' || this.props.type === 'radio') {
            optionInput = <div>
                            <label htmlFor='options'>Options seperated by ,</label>
                            <input onChange={this.setOptions} type="text" name="options" placeholder="option1, option2, etc.." />
                        </div>
        }
        if (this.props.type) {
            if (this.props.type === 'radio') {
                result = <div>{options}</div>
            } else if (this.props.type === 'select') {
                result = <select>
                            {options}
                        </select>
            } else {
                result = <input type={this.props.type} placeholder={this.props.placeholder} />
            }
        }
        return (
            <div className='field-details'>
                <h2>Field Details</h2>
                <form className='form'>
                    <div className='column1'>
                        <label htmlFor='label'>Display Label</label>
                        <input onChange={this.setLabel} type='text' name='label' />
                        <p>For display purposes, spaces allowed</p>
                        <label htmlFor='placeholder'>Placeholder</label>
                        <input onChange={this.setPlaceholder} type="text" name='placeholder' />
                        <label htmlFor='validation'>Custom Validation</label>
                        <input onChange={this.setValidation} type="text" name='validation' />
                        <p>Any regex pattern can be used for custom input validation</p>
                    </div>
                    <div className='column2'>
                        <label htmlFor='ref'>Reference Name</label>
                        <input type="text" name='ref' value={this.props.iref} />
                        <p>Used to reference in calculations, no spaces allowed</p>
                        {optionInput}
                    </div>
                </form>
                <div className="result">
                    <h3>Here is what the input will look like</h3>
                    <label>{this.props.label}</label><br />
                    {result}
                </div>
                <Tags />
            </div>
        );
    }
};

export default connect(mapStateToProps)(FieldDetails);