import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';
import {
    Button,
    Row,
    Col,
} from 'reactstrap';
import Select from "react-select";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slider from '@material-ui/core/Slider';
import VideoThumbnail from 'react-video-thumbnail';

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/VideoActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            url:'',
            duration:null,
            width:null,
            height:null,
            thumnail:null,
            categories:[],
            tags:[],
            snapshot:25,

            loading:false,
            validing:false,
            errors:null,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.get();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.get();
    }

    handleChange = (e) =>
    {
        this.setState({
            [e.target.name]:e.target.value,
            errors:null
        })
    }

    handleSnapshot = (e, val) => {
        console.log(val);
        this.setState({
            snapshot:val
        })
    }

    handleThumbnail = (t) => {
        console.log(t);
        this.setState({
            thumnail:t
        })
    }

    handleChangeLabelOver = (data,e) => {
        this.setState({ [e.name]:data, errors:null });
    };

    handleNull = () => {
        this.setState({
            title: '',
            url:'',
            duration:null,
            width:null,
            height:null,
            thumnail:null,
            categories:[],
            tags:[],
            snapshot:2,
        });
    }

    setValues = (res) =>{
        this.setState({
            title: res.title,
            url:res.url,
            duration:Math.round(res.duration),
            width:res.width,
            height:res.height,
            thumnail: res.thumbnail,
            categories:res.categories,
            tags:res.tags,
        })
    }

    get = () => {
        const {videos, id} = this.props;
        if(id != null)
        {
            const reviver = videos.find( v => v.id === id);
            if(reviver)
            {
                this.setValues(reviver)
            }
        }else{
            this.handleNull();
        }
    }

    handleSubmit = (e) => {
        this.setState({validing:true});

        let { store, edit, dispatch, history, handleClose, id } = this.props
        let categories = [];
        let tags = [];

        this.state.categories.map((cat) => { categories.push(cat.id) } );
        this.state.tags.map((tag) => { tags.push(tag.id) } );

        const options = {
            title: this.state.title,
            thumnail: this.state.thumnail,
            categories:categories,
            tags:tags,
            flag:1,
        };

        if(id != null)
        {
            edit(id,options)
            .then(res => {
                dispatch({
                type:actions.EDIT_VIDEO,
                payload:res.data
                });
                this.handleNull();
                msg.defaultSuccess(this.props);
                handleClose(null);
            })
            .catch(e => {
                errorHandler(e, dispatch, history);
                msg.defaultError(this.props);
                this.setState({errors:e});
            })
            .finally(() => this.setState({validing:false}));

        }else{
            store(options)
            .then(res => {
                dispatch({
                type:actions.CREATE_VIDEO,
                payload:res.data
                });
                this.handleNull();
                msg.defaultSuccess(this.props);
                handleClose(null);
            })
            .catch(e => {
                errorHandler(e, dispatch, history);
                msg.defaultError(this.props);
                this.setState({errors:e});
            })
            .finally(() => this.setState({validing:false}));
            }
      }

    render() {
        const {open, handleClose, id, categories, tags} = this.props;
        const { validing, errors, url, width, height, duration, snapshot, thumnail } = this.state;
        return (
<div>
    <Dialog
        scroll='body'
        disableBackdropClick disableEscapeKeyDown
        open={open}
        TransitionComponent={Transition}
        onClose={ () => {handleClose(null)} }
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{id != null ? "Modifier Video" :"Ajouter un Video"}</DialogTitle>
        <DialogContent>
            <Row>
                <Col xs="12" md="12">
                    <div className="form-group has-float-label">
                        <TextField
                            error={msg.is_msg(errors, 'title')}
                            autoFocus
                            margin="dense"
                            label="Titre"
                            name="title"
                            type="text"
                            fullWidth
                            variant="outlined"
                            helperText={msg.fildsMsgHandler(errors, 'title')}
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                </Col>
                <Col xs="12" md="12">
                    <div className="form-group has-float-label">
                        <Select
                            isMulti
                            className="react-select"
                            classNamePrefix="react-select"
                            name="categories"
                            value={this.state.categories}
                            onChange={this.handleChangeLabelOver}
                            options={categories}
                            placeholder="Categories"
                        />
                        {
                        msg.fildsMsgHandler(this.state.errors,'categories')
                        }
                    </div>
                    </Col>
                    <Col xs="12" md="12">
                    <div className="form-group has-float-label">
                        <Select
                            isMulti
                            className="react-select"
                            classNamePrefix="react-select"
                            name="tags"
                            value={this.state.tags}
                            onChange={this.handleChangeLabelOver}
                            options={tags}
                            placeholder="Tags"
                        />
                        {
                        msg.fildsMsgHandler(this.state.errors,'tags')
                        }
                    </div>
                </Col>
                <Col xs="12" md="12">
                <div className="form-group has-float-label">
                {/* <img src={thumnail} /> */}
                <VideoThumbnail
                    videoUrl={`${APIModel.VIDEOS_URL}/${url}`}
                    thumbnailHandler={(thumbnail) => this.handleThumbnail(thumbnail)}
                    // renderThumbnail={false}
                    snapshotAtTime={snapshot}
                    // width={width}
                    // height={height}
                />
                {/* <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider-small-steps"
                    valueLabelDisplay="auto"
                    marks
                    min={1}
                    max={duration != null ? duration : 1}
                    onChange={this.handleSnapshot}
                /> */}
                </div>
                </Col>

            </Row>

        </DialogContent>

        <DialogActions>
          <Button onClick={ () => {handleClose(null)} } color="info" outline>
            Retour
          </Button>
          {
              validing ?
              <CircularProgress color="primary" size={30} />
              :
              <Button onClick={this.handleSubmit} color="primary">
                {id != null ? 'Modifier' : 'Ajouter'}
              </Button>
          }
        </DialogActions>
      </Dialog>
</div>
        )
    }
}


const mapStateToProps = state => {
    return {
        videos: state.VideoReducer.videos,
        user: state.AuthReducer.user,
        categories: state.CategorieReducer.categories,
        tags: state.TagReducer.tags,
    }
  }

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        store: (data) => actionsCreator.store(data),
        edit: (id, data) => actionsCreator.edit(id, data)
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Edit));
