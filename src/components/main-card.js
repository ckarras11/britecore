import React from 'react';
import Fields from './fields';
import FieldDetails from './field-details';
import FieldGroups from './field-groups';

class MainCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: undefined,
            label: '',
            placeholder: '',
            validation: '',
            ref: '',
            options: [],
            selectedOption: undefined,
        };
        this.fieldSelect = this.fieldSelect.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    fieldSelect(e) {
        this.setState({
            type: e.currentTarget.id,
        });
    }
    handleForm(e) {
        const form = document.getElementsByClassName('form')[0];
        const inputs = form.elements;
        const formData = {};
        for (let i = 0; i < inputs.length; i++) {
            formData[inputs[i].name] = inputs[i].value;
        }
        let options;
        const ref = formData.label.toLowerCase().replace(/\s/g, '-');
        if (formData.options) {
            options = formData.options.split(', ');
        }
        this.setState({
            label: formData.label,
            ref,
            placeholder: formData.placeholder,
            validation: formData.validation,
            options,
        });
    }

    render() {
        return (
          <div className="main-card">
            <Fields onClick={this.fieldSelect} />
            <FieldDetails placeholder={this.state.placeholder} options={this.state.options} iref={this.state.ref} onChange={this.handleForm} label={this.state.label} type={this.state.type} />
            <FieldGroups />
          </div>
        );
    }
}

export default MainCard;
