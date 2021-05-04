import React, { Component } from 'react'
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';
import {
    Card,
    CardImg,
    CardBody,
    CardHeader,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from 'reactstrap';
import Select from "react-select";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardM from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';

import Breadcrumbs from '../../components/breadcrumb';
import DropZone from '../../components/dropzone';

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/VideoActions';
import * as actionsAlbumCreator from '../../store/actions/AlbumActions';
import * as actionsCatCreator from '../../store/actions/CategorieActions';
import * as actionsTagCreator from '../../store/actions/TagActions';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';
import APIModel from "../../core";
import axios from "axios";


const navLinks = [
    {name:"Videos", url:"/videos"},
    {name:"Create", url:"/videos/add"},
];

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            title: '',
            categories:[],
            tags:[],

            loading:false,
            validing:false,
            errors:null,
            progress:0,
        };
    }

    componentDidMount()
    {
        this.all_cat();
        this.all_tag();
    }

    all_cat()
    {
        let { all_cat, dispatch, history } = this.props
        all_cat().then(res => {
        dispatch({type:actions.ALL_CATEGORIES, payload:res.data.data});
        }).catch(e => errorHandler(e, dispatch, history))
    }

    all_tag()
    {
        let { all_tag, dispatch, history } = this.props
        all_tag().then(res => {
        dispatch({type:actions.ALL_TAGS, payload:res.data.data});
        }).catch(e => errorHandler(e, dispatch, history))
    }

    all_album()
    {
        let { all_album, dispatch, history } = this.props
        all_album().then(res => {
        dispatch({type:actions.ALL_ALBUMS, payload:res.data.data});
        }).catch(e => errorHandler(e, dispatch, history))
    }

    handleChange = (e) =>
    {
        this.setState({
            [e.target.name]:e.target.value,
            errors:null
        })
    }

    handleChangeLabelOver = (data,e) => {
        this.setState({ [e.name]:data, errors:null });
    };

    handleFile = (file) => {
        console.log(file);
        this.createFile('videos', file);
      }

      removeFile = (file) => {
          let videos = this.state.videos;
          videos = videos.filter(e => e.name !== file.name);
        this.setState({videos});
      }

      createFile = (name, file) => {
          let reader = new FileReader();
          reader.onload = (e) =>{
              let videos = this.state[name];
              if(!videos.find(e => e.name === file.name))
              {
                videos = [...videos, {data : e.target.result, name:file.name, size:file.size, width:file.width, height:file.height, duration: file.duration, progress:0,}]
                this.setState({
                    [name]: videos
                });
              }
          }
          reader.readAsDataURL(file);
      }

      handleNull = () => {
        this.setState({
            title: '',
            videos: [],
            categories:[],
            tags:[],
            progress:0,
        });
    }

    onUploadProgress = (progressEvent) => {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        this.setState({progress:percentCompleted})
      }

    onLoadedMetadata = (e, i) =>{
        let videos =  this.state.videos;
        let v = videos[i];
        if(v)
        {
            v = {...v, height:e.target.videoHeight, width:e.target.videoWidth, duration:e.target.duration};
            videos[i] = v;
            this.setState({videos:videos});
        }

    }

    handleSubmit = (e) => {
        this.setState({validing:true});

        let { store, dispatch, history } = this.props;
        let categories = [];
        let tags = [];

        this.state.categories.map((cat) => { categories.push(cat.id) } );
        this.state.tags.map((tag) => { tags.push(tag.id) } );

        const options = {
            title: this.state.title,
            categories: categories,
            tags: tags,
            videos: this.state.videos,
        };

        axios.post(APIModel.HOST+"/videos", options, {
            onUploadProgress: this.onUploadProgress
        }).then(res => {
            this.handleNull();
            msg.defaultSuccess(this.props);
        })
        .catch(e => {
            errorHandler(e, dispatch, history);
            msg.defaultError(this.props);
            this.setState({errors:e});
        })
        .finally(() => this.setState({validing:false}));

      }

    render() {
        const {  categories, tags } = this.props;
        const { validing, errors, progress, videos } = this.state;
        return (
            <div>
                <Breadcrumbs data={navLinks} />
                <br /><br />
                <Card>
                    <CardHeader>
                        <CardTitle>Ajouter des videos </CardTitle>
                    </CardHeader>
                    <CardBody>
                    <Row>
                        <Col xs="12" md="8">
                            <Row>
                                <Col xs="12" md="12" style={{ marginBottom:15 }}>
                                    <DropZone
                                    handleFile={this.handleFile}
                                    removeFile={this.removeFile}
                                    acceptFile=".mp4,.avi,.webm,.wmv,.mov,.avi,.ogg,.flv"
                                    message="Glisser déposer des videos"
                                    />
                                </Col>

                                <Col xs="12" md="12" >
                                    <Row>
                                        {
                                            videos.map((img,i) => {
                                                return (
                                                    <Col xs="12" md="6" key={i} style={{ marginBottom:15 }}>
                                                        <CardM >
                                                            <CardActionArea>
                                                                <video
                                                                controls
                                                                width="100%"
                                                                height="150"
                                                                onLoadedMetadata={(e) => {this.onLoadedMetadata(e,i)}}
                                                                >
                                                                    <source src={img.data} type="video/mp4"/>
                                                                </video>
                                                                {/* <CardContent>
                                                                <Slider
                                                                    defaultValue={0}
                                                                    aria-labelledby="discrete-slider-small-steps"
                                                                    valueLabelDisplay="auto"
                                                                    // step={10}
                                                                    marks
                                                                    min={0}
                                                                    max={100}
                                                                />
                                                                </CardContent> */}
                                                            </CardActionArea>
                                                        </CardM>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" md="4">
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
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="default"
                                    >
                                        Retour
                                    </Button>
                                    {'   '}
                                    {
                                        validing ?
                                        <LinearProgress variant="buffer" value={progress} />
                                        :
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleSubmit}
                                        >
                                            Envoyer
                                        </Button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.AuthReducer.user,
        categories: state.CategorieReducer.categories,
        tags: state.TagReducer.tags,
    }
  }

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        all_cat: () => actionsCatCreator.index(),
        all_tag: () => actionsTagCreator.index(),
        store: (data) => actionsCreator.store(data),
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Create));
