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
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/AlbumActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

import img from '../../assets/images/users/avatar.png';

import Create from './create';

const navLinks = [
    {name:"Albums", url:"/albums"},
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

class Album extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading:false,
            deleting:false,
            openAdd:false,
            openDel:false,

            id:null,

            activePage: 0,
            itemsCountPerPage: 0,
            totalItemsCount: 1,
        }
    }

    componentDidMount()
    {
        this.all();
    }

    handleAddClose = (id) => {
        this.setState({id:id}, () => {
            this.setState({openAdd: !this.state.openAdd});
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
        axios.get(APIModel.HOST + "/albums/active/"+id)
              .then(res => {
                dispatch({
                  type:actions.EDIT_ALBUM,
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
        dispatch({type:actions.ALL_ALBUMS, payload:res.data.data});
        this.setState({
            activePage: res.data.meta.current_page - 1,
            itemsCountPerPage: res.data.meta.per_page,
            totalItemsCount: res.data.meta.total
        })
        }).catch(e => errorHandler(e, dispatch, history))
    }

    handleDelete = (id) => {
        this.setState({deleting:true});
        let { remove, dispatch, history } = this.props
        remove(id).then(res => {
            dispatch({type:actions.DELETE_ALBUM, payload:res.data.id});
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
          dispatch({type:actions.ALL_ALBUMS, payload:res.data.data});
          this.setState({
            activePage: res.data.meta.current_page - 1,
            itemsCountPerPage: res.data.meta.per_page,
            totalItemsCount: res.data.meta.total
          })
        })
        .catch(e => errorHandler(e, dispatch, history))
    }

  render() {
    const {albums, classes} = this.props;
    const {deleting} = this.state;
    return (
    <div>
        <Breadcrumbs data={navLinks} />
        <div className="text-right">
            <Button outline color="info" onClick={ () => {this.handleAddClose(null)} }><i className="mdi mdi-plus" /> Ajouter</Button>{' '}
            <Button outline color="success" onClick={ () => {this.all()} }><i className="mdi mdi-refresh" /> </Button>
        </div>
        <br /><br />
        <Row>
        {
            albums.map((album,i) => {
                return(
                <Col xs="12" md="3" key={i} style={{ padding:2 }}>
                    <Card className={classes.root}>
                        <CardActionArea onClick={ () => {this.handleShowClose(i)} }>
                            {
                                album.thumnail ?
                                <img src={`${APIModel.IMAGES_URL}/${album.thumnail}`} alt={album.title} height={300} width="100%" />
                                :
                                <Skeleton variant="rect" height={300} />
                            }
                        </CardActionArea>
                        <CardActions>
                            <Typography gutterBottom variant="h6" component="h5" noWrap={true}>
                                {album.title}
                            </Typography>
                            <Link to={`/images/add/${album.id}`}>
                                <IconButton aria-label={`info about ${album.title}`} className={classes.icon}>
                                    <AddIcon />
                                </IconButton>
                            </Link>
                            <IconButton onClick={ () => {this.handleAddClose(album.id)} } aria-label={`info about ${album.title}`} className={classes.icon}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={ () => {this.handleDelClose(album.id)} } aria-label={`info about ${album.title}`} className={classes.icon}>
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

        <Create
            open={this.state.openAdd}
            handleClose={this.handleAddClose}
            id={this.state.id}
        />

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
        albums: state.AlbumReducer.albums,
    }
}

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        all: (n) => actionsCreator.padding(n, 44),
        remove: (id) => actionsCreator.remove(id)
    }
}

export default withStyles(styles, {withTheme:true})(withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Album)));
