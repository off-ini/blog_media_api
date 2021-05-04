import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
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

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/UserActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

import img from '../../assets/images/users/avatar.png';

import Create from './create';

const navLinks = [
    {name:"Users", url:"/users"},
];

class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading:false,
            deleting:false,
            openAdd:false,
            openDel:false,

            id:null,
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
        let { dispatch, history, enqueueSnackbar } = this.props;
        axios.get(APIModel.HOST + "/users/active/"+id)
              .then(res => {
                dispatch({
                  type:actions.EDIT_USER,
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
        dispatch({type:actions.ALL_USERS, payload:res.data.data});
        }).catch(e => errorHandler(e, dispatch, history))
    }

    handleDelete = (id) => {
        this.setState({deleting:true});
        let { remove, dispatch, history } = this.props
        remove(id).then(res => {
            dispatch({type:actions.DELETE_USER, payload:res.data.id});
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

  render() {
    const {users} = this.props;
    const {deleting} = this.state;
    return (
    <div>
        <Breadcrumbs data={navLinks} />
        <div className="text-right">
            <Button outline color="info" onClick={ () => {this.handleAddClose(null)} }><i className="mdi mdi-account-plus" /> Ajouter</Button>
        </div>
        <br /><br />
        <Row>
        {
            users.map((user,i) => {
                return(
                <Col xs="12" md="4" key={i}>
                    <Card>
                        <CardImg top width="100%" height="250" src={img} />
                        <CardBody>
                            <CardTitle>{user.name}</CardTitle>
                            <CardSubtitle>{user.email}</CardSubtitle>
                            <Row>
                                <Col xs="12" sm="12" md="6">
                                    <Button outline color="info" onClick={ () => {this.handleAddClose(user.id)} }><i className="mdi mdi-pencil" /></Button>{' '}
                                    <Button outline color="danger" onClick={ () => {this.handleDelClose(user.id)} }><i className="mdi mdi-close" /></Button>
                                </Col>
                                <Col xs="12" sm="12" md="6" >
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Switch checked={user.flag == "ENABLE" ? true : false} onChange={() => {this.handleActive(user.id)}}  />}
                                            label={user.flag}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                </Col>
                )
            })
        }
        </Row>

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
        users: state.UserReducer.users,
        user: state.AuthReducer.user
    }
}

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        all: () => actionsCreator.index(),
        remove: (id) => actionsCreator.remove(id)
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Users));
