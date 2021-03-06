import history from '../history';
import streams from '../apis/streams';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

// Create
export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', { ...formValues, userId });
        dispatch({ type: 'CREATE_STREAM', payload: response.data });
        history.push('/');
    }
}

// Read all
export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: 'FETCH_STREAMS', payload: response.data });
    }
}

// Read single
export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({ type: 'FETCH_STREAM', payload: response.data });
    }
}

// Update
export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({ type: 'EDIT_STREAM', payload: response.data });
        history.push('/');
    }
}

// Delete
export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({ type: 'DELETE_STREAM', payload: id });
        history.push('/');
    }
}
