
export const GET_FIRST_DATA = 'GET_FIRST_DATA';
export const GET_PAGE = 'GET_PAGE';


export const getFirstData = (url) => dispatch => {
    fetch(url)
        .then(response => response.json())
        .then(data => dispatch({
            type: 'GET_FIRST_DATA',
            payload: data
        }))
};