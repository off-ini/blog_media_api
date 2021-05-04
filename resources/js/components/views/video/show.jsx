import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import ReactPlayer from 'react-player'

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/VideoActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class Show extends Component {
    constructor(props){
        super(props);

        this.state = {
            index:0,
        }
    }


    render() {
        const {open, handleClose, video} = this.props;
        return (
            <div>
                <Dialog
                    scroll='body'
                    open={open}
                    TransitionComponent={Transition}
                    onClose={ () => {handleClose(null)} }
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url={`${APIModel.VIDEOS_URL}/${video.url}`}
                        controls={true}
                        width='100%'
                        height='100%'
                        />
                    </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.AuthReducer.user,
    }
}

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        all: (n) => actionsCreator.padding(n, 44),
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Show));
