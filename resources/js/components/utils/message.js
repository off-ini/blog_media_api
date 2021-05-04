import React from 'react';
import Zoom from '@material-ui/core/Zoom';

export const msgHandler = (props, message, type, options) => {
    props.enqueueSnackbar(message, {
        variant: type,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        TransitionComponent: Zoom,
        ...options
    })
}

export const success = (props, msg) => {
    msgHandler(props, msg, 'success')
}

export const defaultSuccess = (props) => {
    success(props, 'Traitement réussie')
}

export const info = (props, msg) => {
    msgHandler(props, msg, 'info')
}


export const error = (props, msg) => {
    msgHandler(props, msg, 'error')
}

export const defaultError = (props) => {
    error(props, 'Erreur lors du traitement')
}



export const is_msg = (error, props) => {
    if(error)
    {
        const { response } = error;
        const {data} = response;
        if(typeof(data[props]) != "undefined")
        {
            return true;
        }
        return false;
    }
    return false;
}

export const fildsMsgHandler = (error, props) => {
    try{
        if(error)
        {
            const { response } = error;
            const {data} = response;
            if(typeof(data[props]) != "undefined")
            {
            return (
                <>
                    {
                    data[props].map((msg, idx) => {
                            return msg
                    })
                    }
                </>
                );
            }
            return null;
        }
    }catch(e)
    {
        return;
    }

}
