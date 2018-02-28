import React from 'react';
import Tags from './tags';

const FieldDetails = (props) => {
    let optionInput;
    let result;
    let options;
    if (props.options) {
        options = props.options.map((option, index) => {
            if (props.type === 'select') {
                return <option key={index} value='option'>{option}</option>
            } else if (props.type === 'radio') {
                return <label key={index}><input type='radio' value={option} checked={props.selectedOption === { option }} />{option}</label>
            }
        })
    }
    if (props.type === 'select' || props.type === 'radio') {
        optionInput = <div>
                        <label htmlFor='options'>Options seperated by ,</label>
                        <input type="text" name="options" placeholder="option1, option2, etc.." />
                      </div>
    }
    if (props.type) {
        if (props.type === 'radio') {
            result = <div>{options}</div>
        } else if (props.type === 'select') {
            result = <select>
                        {options}
                     </select>
        } else {
            result = <input type={props.type} placeholder={props.placeholder} />
        }
    }
    return (
        <div className='field-details'>
            <h2>Field Details</h2>
            <form onChange={props.onChange} className='form'>
                <div className='column1'>
                    <label htmlFor='label'>Display Label</label>
                    <input type='text' name='label' />
                    <label htmlFor='placeholder'>Placeholder</label>
                    <input type="text" name='placeholder' />
                    <label htmlFor='validation'>Custom Validation</label>
                    <input type="text" name='validation' />
                </div>
                <div className='column2'>
                    <label htmlFor='ref'>Reference Name</label>
                    <input type="text" name='ref' value={props.iref} />
                    {optionInput}
                </div>
            </form>
            <div className="result">
                <h3>Here is what the input will look like</h3>
                <label>{props.label}</label><br />
                {result}
            </div>
            <Tags />
        </div>
    );
};

export default FieldDetails;