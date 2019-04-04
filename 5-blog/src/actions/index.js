import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().posts, 'userId'));
        userIds.forEach(id => dispatch(fetchUser(id)));
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}

// Action Creator without memoization
export const fetchUser = (userId) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
}

// Action Creator with memoization
// export const fetchUser = function(userId) {
//     return function(dispatch) {
//         _fetchUser(userId, dispatch);
//     }
// }

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });

