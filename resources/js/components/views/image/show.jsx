import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import ImageGallery from 'react-image-gallery';

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/ImageActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

import "react-image-gallery/styles/css/image-gallery.css";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class Show extends Component {
    constructor(props){
        super(props);

        this.state = {
            images:[],
            index:0,
            activePage: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 1,
            last_page:1,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.all();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.all();
    }

    // componentDidMount()
    // {
    //     this.all();
    // }

    all()
    {
        let { all, dispatch, history, page, index } = this.props
        all(page).then(res => {
        let d = res.data.data;
        let images = [];

        d.map((image) => {
            images.push(
                {
                    original: `${APIModel.IMAGES_URL}/${image.url}`,
                    thumbnail: `${APIModel.IMAGES_URL}/${image.url}`,
                }
            )
        });

        this.setState({
            images: images,
            activePage: res.data.meta.current_page - 1,
            itemsCountPerPage: res.data.meta.per_page,
            totalItemsCount: res.data.meta.total,
            last_page: res.data.meta.last_page,
            index:index,
        })
        }).catch(e => errorHandler(e, dispatch, history))
    }

    onSlide = currentIndex => {
        console.log(currentIndex)
        const { activePage, images } = this.state;
        this.setState({index:currentIndex});
        if(currentIndex  == images.length - 5)
        {
            this.handlePageChange(null, activePage + 1);
        }
    }

    handlePageChange = (event,pageNumber) => {
        let { all, dispatch, history } = this.props
        all(pageNumber+1)
        .then(res => {
          let d = res.data.data;
          let images = [];
            d.map((image) => {
                images.push(
                    {
                        original: `${APIModel.IMAGES_URL}/${image.url}`,
                        thumbnail: `${APIModel.IMAGES_URL}/${image.url}`,
                    }
                )
            });
          let imgs = [...this.state.images, ...images];
          this.setState({
            images: imgs,
            activePage: res.data.meta.current_page - 1,
            itemsCountPerPage: res.data.meta.per_page,
            totalItemsCount: res.data.meta.total,
            last_page: res.data.meta.last_page,
          })
        })
        .catch(e => errorHandler(e, dispatch, history))
    }

    render() {
        const {open, handleClose} = this.props;
        const { images, index } = this.state;
        return (
            <div>
                <Dialog
                    scroll='body'
                    open={open}
                    TransitionComponent={Transition}
                    onClose={ () => {handleClose(0)} }
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <ImageGallery
                        items={images}
                        startIndex={index}
                        onSlide={this.onSlide}
                    />;
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
        all: (n) => actionsCreator.padding(n, 60),
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Show));
