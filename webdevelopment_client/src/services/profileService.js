const TWEET_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(profile => {
            dispatch({
                type: 'curren-profile',
                profile
            })
        }
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(TWEET_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile => {
            dispatch({
                type: 'edit-profile',
                profile
            })
        }
        );

