import React from 'react';
import * as authActions from "../store/actions/type";

const errorHandler = (error, dispatch,  history) => {
    const { response } = error;

    if (response) {

        if (response.status === 401) {
            dispatch({
                type: authActions.LOGOUT
            });

            if(history)
            {
                history.push('/login');
            }
            return;
        }
    }
}
export default errorHandler;
