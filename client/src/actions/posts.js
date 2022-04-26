import * as api from '../api/';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'POST', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

//All functions above are action creators.
//Instead of returning, actions have to be dispatched.
//The api makes requests to the server side and then actions are dispatched to reducers.

//The double arrow functions in the above functions are possible because of redux-thunk.