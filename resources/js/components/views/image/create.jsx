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

import Breadcrumbs from '../../components/breadcrumb';
import DropZone from '../../components/dropzone';

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/ImageActions';
import * as actionsAlbumCreator from '../../store/actions/AlbumActions';
import * as actionsCatCreator from '../../store/actions/CategorieActions';
import * as actionsTagCreator from '../../store/actions/TagActions';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';
import APIModel from "../../core";
import axios from "axios";


const navLinks = [
    {name:"Images", url:"/images"},
    {name:"Create", url:"/images/add"},
];

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            title: '',
            album_id:null,
            categories:[],
            tags:[],

            loading:false,
            validing:false,
            errors:null,
            progress:0,
        };
    }

    componentWillReceiveProps(nextProps) {
        let { match: {params} } = this.props;
        this.setState({album_id: params.album_id});
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        let { match: {params} } = this.props;
        this.setState({album_id: params.album_id});
    }

    componentDidMount()
    {
        this.all_cat();
        this.all_tag();
        this.all_album();
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
        this.createImage('images', file);
      }

      removeFile = (file) => {
          let images = this.state.images;
          images = images.filter(e => e.name !== file.name);
        this.setState({images});
      }

      createImage = (name, file) => {
          let reader = new FileReader();
          reader.onload = (e) =>{
              let images = this.state[name];
              if(!images.find(e => e.name === file.name))
              {
                images = [...images, {data : e.target.result, name:file.name, size:file.size, width:file.width, height:file.height, progress:0}]
                this.setState({
                    [name]: images
                });
              }
          }
          reader.readAsDataURL(file);
      }

      handleNull = () => {
        this.setState({
            title: '',
            images: [],
            categories:[],
            tags:[],
            progress:0,
        });
    }

    onLoadedMetadata = (e, i) =>{
        console.log(e.target);
        let images =  this.state.images;
        let v = images[i];
        if(v)
        {
            v = {...v, height:e.target.imageHeight, width:e.target.imageWidth};
            images[i] = v;
            this.setState({images:images});
        }

    }

    onUploadProgress = (progressEvent) => {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        this.setState({progress:percentCompleted})
      }

    handleSubmit = (e) => {
        this.setState({validing:true});

        let { match: {params}, store, dispatch, history } = this.props;
        let categories = [];
        let tags = [];

        this.state.categories.map((cat) => { categories.push(cat.id) } );
        this.state.tags.map((tag) => { tags.push(tag.id) } );

        const options = {
            title: this.state.title,
            categories: categories,
            tags: tags,
            images: this.state.images,
            album_id: this.state.album_id,
        };

        axios.post(APIModel.HOST+"/images", options, {
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
        const { match: {params}, categories, tags, albums } = this.props;
        const { validing, errors, progress, images } = this.state;
        return (
            <div>
                <Breadcrumbs data={navLinks} />
                <br /><br />
                <Card>
                    <CardHeader>
                        <CardTitle>Ajouter des images {params.album_id ? "( Album )" :null}</CardTitle>
                    </CardHeader>
                    <CardBody>
                    <Row>
                        <Col xs="12" md="8">
                            <Row>
                                <Col xs="12" md="12" style={{ marginBottom:15 }}>
                                    <DropZone
                                    handleFile={this.handleFile}
                                    removeFile={this.removeFile}
                                    />
                                </Col>

                                <Col xs="12" md="12" >
                                    <Row>
                                        {
                                            images.map((img,i) => {
                                                return (
                                                    <Col xs="12" md="4" key={i} style={{ marginBottom:15 }}>
                                                        <CardM >
                                                            <CardActionArea>
                                                                <img
                                                                src={img.data}
                                                                alt={img.name}
                                                                width="100%"
                                                                height="150"
                                                                onLoadedMetadataCapture={(e) => this.onLoadedMetadata(e,i)}
                                                                />
                                                                {/* <CardContent>
                                                                <LinearProgress variant="determinate" value={img.progress} />
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
                                <div className="form-group has-float-label">
                                    <TextField
                                        error={msg.is_msg(errors, 'album_id')}
                                        margin="dense"
                                        select
                                        label="Album"
                                        name="album_id"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        helperText={msg.fildsMsgHandler(errors, 'album_id')}
                                        value={this.state.album_id}
                                        onChange={this.handleChange}
                                    >
                                        {albums.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                            {option.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
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
        albums: state.AlbumReducer.albums,
        categories: state.CategorieReducer.categories,
        tags: state.TagReducer.tags,
    }
  }

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        all_album: () => actionsAlbumCreator.index(),
        all_cat: () => actionsCatCreator.index(),
        all_tag: () => actionsTagCreator.index(),
        store: (data) => actionsCreator.store(data),
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Create));
