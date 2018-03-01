export const SET_TAG_GROUP = 'SET_TAG_GROUP';
export const setTagGroup = tag => ({
    type: SET_TAG_GROUP,
    tag,
});

export const SET_TAG = 'SET_TAG';
export const setTag = tag => ({
    type: SET_TAG,
    tag,
});

export const SET_FILTER = 'SET_FILTER';
export const setFilter = filter => ({
    type: SET_FILTER,
    filter,
});

export const SET_FIELD_TYPE = 'SET_FIELD_TYPE';
export const setFieldType = field => ({
    type: SET_FIELD_TYPE,
    field,
});

export const SET_LABEL = 'SET_LABEL';
export const setLabel = label => ({
    type: SET_LABEL,
    label,
});

export const SET_PLACEHOLDER = 'SET_PLACEHOLDER';
export const setPlaceholder = placeholder => ({
    type: SET_PLACEHOLDER,
    placeholder,
});

export const SET_VALIDATION = 'SET_VALIDATION';
export const setValidation = validation => ({
    type: SET_VALIDATION,
    validation,
});

export const SET_OPTIONS = 'SET_OPTIONS';
export const setOptions = options => ({
    type: SET_OPTIONS,
    options,
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
    type: TOGGLE_MODAL,
});

export const CREATE_GROUP = 'CREATE_GROUP';
export const createGroup = (groupName) => ({
    type: CREATE_GROUP,
    groupName
});