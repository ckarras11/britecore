import {
    SET_TAG_GROUP,
    SET_TAG,
    SET_FILTER,
    SET_FIELD_TYPE,
    SET_LABEL,
    SET_PLACEHOLDER,
    SET_VALIDATION,
    SET_OPTIONS,
} from './actions';


const initialState = {
    selectedTagGroup: '',
    selectedTag: '',
    filter: '',
    type: '',
    label: '',
    placeholder: '',
    validation: '',
    ref: '',
    options: [],
    selectedOption: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === SET_TAG_GROUP) {
        state = Object.assign({}, state, {
            selectedTagGroup: action.tag,
        });
        return state;
    }
    if (action.type === SET_TAG) {
        state = Object.assign({}, state, {
            selectedTag: action.tag,
        });
        return state;
    }
    if (action.type === SET_FILTER) {
        state = Object.assign({}, state, {
            filter: action.filter,
        });
        return state;
    }
    if (action.type === SET_FIELD_TYPE) {
        state = Object.assign({}, state, {
            type: action.field,
        });
        return state;
    }
    if (action.type === SET_LABEL) {
        const ref = action.label.toLowerCase().replace(/\s/g, '-');
        state = Object.assign({}, state, {
            label: action.label,
            ref,
        });
        return state;
    }
    if (action.type === SET_PLACEHOLDER) {
        state = Object.assign({}, state, {
            placeholder: action.placeholder,
        });
        return state;
    }
    if (action.type === SET_VALIDATION) {
        state = Object.assign({}, state, {
            validation: action.validation,
        });
        return state;
    }
    if (action.type === SET_OPTIONS) {
        state = Object.assign({}, state, {
            options: action.options,
        });
        return state;
    }
    return state;
};

export default reducer;
