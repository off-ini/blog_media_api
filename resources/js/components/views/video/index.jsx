import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import {
    Button,
    Row,
    Col,
} from 'reactstrap';
import Breadcrumbs from '../../components/breadcrumb';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'


import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/VideoActions';
import * as actionsCatCreator from '../../store/actions/CategorieActions';
import * as actionsTagCreator from '../../store/actions/TagActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

import Edit from './edit';
import Show from './show';

const navLinks = [
    {name:"Videos", url:"/videos"},
];

const styles = theme => ({
    gridList: {
      width: 'auto',
      height: 650,
    },
    icon: {
      color: 'rgba(100, 100, 100, 0.54)',
    },
    list: {
        listStyle: 'none',
    },
    title: {
        color: theme.palette.primary,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
  });

class Video extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading:false,
            deleting:false,
            openAdd:false,
            openShow:false,
            openDel:false,

            id:null,
            video:null,

            activePage: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 1,
        }
    }

    componentDidMount()
    {
        this.all();
        this.all_cat();
        this.all_tag();
    }

    handleAddClose = (id) => {
        this.setState({id:id}, () => {
            this.setState({openAdd: !this.state.openAdd});
        })
    }

    handleShowClose = (v) => {
        this.setState({video:v}, () => {
            this.setState({openShow: !this.state.openShow});
        })
    }

    handleDelClose = (id) => {
        this.setState({id:id}, () => {
            this.setState({openDel: !this.state.openDel});
        });
    }

    handleActive = (id) => {
        this.setState({loading:true});
        let { dispatch, history } = this.props;
        axios.get(APIModel.HOST + "/videos/active/"+id)
              .then(res => {
                dispatch({
                  type:actions.EDIT_VIDEO,
                  payload:res.data
                });
              })
              .catch(e => {
                errorHandler(e, dispatch, history)
                msg.defaultError(this.props);
              })
              .finally(() => this.setState({loading:false}));
      }

    all()
    {
        let { all, dispatch, history } = this.props
        all().then(res => {
        dispatch({type:actions.ALL_VIDEOS, payload:res.data.data});
        this.setState({
            activePage: res.data.meta.current_page - 1,
            itemsCountPerPage: res.data.meta.per_page,
            totalItemsCount: res.data.meta.total
        })
        }).catch(e => errorHandler(e, dispatch, history))
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

    handleDelete = (id) => {
        this.setState({deleting:true});
        let { remove, dispatch, history } = this.props
        remove(id).then(res => {
            dispatch({type:actions.DELETE_VIDEO, payload:res.data.id});
            msg.defaultSuccess(this.props);
            this.handleDelClose(null)
        }).catch(e => {
            errorHandler(e, dispatch, history)
            msg.defaultError(this.props);
        })
        .finally(() => {
            this.setState({deleting:false});
        })
    }

    handlePageChange = (event,pageNumber) => {
        let { all, dispatch, history } = this.props
        all(pageNumber+1)
        .then(res => {
          dispatch({type:actions.ALL_VIDEOS, payload:res.data.data});
          this.setState({
            activePage: res.data.meta.current_page - 1,
            itemsCountPerPage: res.data.meta.per_page,
            totalItemsCount: res.data.meta.total
          })
        })
        .catch(e => errorHandler(e, dispatch, history))
    }

  render() {
    const {videos, classes} = this.props;
    const {deleting} = this.state;
    return (
    <div>
        <Breadcrumbs data={navLinks} />
        <div className="text-right">
            <Link to="/videos/add">
                <Button outline color="info"><i className="mdi mdi-plus" /> Ajouter</Button>
            </Link>
            {' '}
            <Button outline color="success" onClick={ () => {this.all()} }><i className="mdi mdi-refresh" /> </Button>
        </div>
        <br /><br />
        <Row>
        {
            videos.map((video,i) => {
                return(
                <Col xs="12" md="3" key={i} style={{ padding:2 }}>
                    <Card className={classes.root}>
                        <CardActionArea onClick={ () => {this.handleShowClose(video)} }>
                            {
                                video.thumbnail ?
                                <img src={`${APIModel.THUMNAILS_VIDEO_URL}/${video.thumbnail}`} alt={video.title} height={200} width="100%"  />
                                :
                                <Skeleton variant="rect" height={200} />
                            }
                        </CardActionArea>
                        <CardActions>
                            <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
                                { video.title }
                            </Typography>
                            <IconButton onClick={ () => {this.handleAddClose(video.id)} } aria-label={`info about ${video.title}`} className={classes.icon}>
                                <EditIcon />
                            </IconButton>
                            {' '}
                            <IconButton onClick={ () => {this.handleDelClose(video.id)} } aria-label={`info about ${video.title}`} className={classes.icon}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Col>
                )
            })
        }
        </Row>
        <br />
        <div className="text-center">
            <TablePagination
                rowsPerPageOptions={[9]}
                component="div"
                count={this.state.totalItemsCount}
                rowsPerPage={this.state.itemsCountPerPage}
                page={this.state.activePage}
                onChangePage={this.handlePageChange}
                onChangeRowsPerPage={this.handlePageChange}
            />
        </div>

        <Edit
            open={this.state.openAdd}
            handleClose={this.handleAddClose}
            id={this.state.id}
        />

        {
           this.state.video ?
            <Show
                open={this.state.openShow}
                handleClose={this.handleShowClose}
                video={this.state.video}
            />
           :null
        }


        <Dialog
            open={this.state.openDel}
            onClose={() => {this.handleDelClose(null)}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Confirmer la suppression</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Etes-vous certain de vouloir supprimer cet enregistrement ?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => {this.handleDelClose(null)}} color="dedault">
                Retour
            </Button>
            {
              deleting ?
              <CircularProgress color="secondary" size={30} />
              :
              <Button onClick={ () => {this.handleDelete(this.state.id)} } color="danger" autoFocus>
                Supprimer
              </Button>
            }

            </DialogActions>
        </Dialog>

    </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.AuthReducer.user,
        videos: state.VideoReducer.videos,
    }
}

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        all_cat: () => actionsCatCreator.index(),
        all_tag: () => actionsTagCreator.index(),
        all: (n) => actionsCreator.padding(n, 44),
        remove: (id) => actionsCreator.remove(id)
    }
}

export default withStyles(styles, {withTheme:true})(withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Video)));
