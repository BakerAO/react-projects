import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_STREAMS':
            // Lodash mapKeys() takes an array and creates a new object
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case 'CREATE_STREAM' || 'FETCH_STREAM' || 'EDIT_STREAM':
            // Spread operator with key interpolation syntax
            return {...state, [action.payload.id]: action.payload}
        case 'DELETE_STREAM':
            // Lodash omit() returns a new object, no need to spread
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
