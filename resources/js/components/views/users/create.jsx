import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';
import {
    Button,
    Row,
    Col,
} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/UserActions';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const sexeData = [
    {value: 'H', label: 'Homme'},
    {value: 'F', label: 'Femme'},
];

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            sexe: '',
            birth: '2017-05-24',
            phone: '',
            password: null,
            password_confirmation: null,
            password_old: null,
            type: 0,

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

    handleNull = () => {
        this.setState({
            name: '',
            email: '',
            birth: '2017-05-24',
            sexe: '',
            phone: '',
            password: null,
            password_confirmation: null,
            password_old: null,
            type: 0,
        });
    }

    handleChange = (e) =>
    {
        this.setState({
            [e.target.name]:e.target.value,
            errors:null
        })
    }

    setValues = (res) =>{
        this.setState({
            name: res.name,
            email: res.email,
            sexe: res.sexe == "Homme" ? 'H' : 'F',
            birth: res.birth_date,
            phone: res.phone,
        })
    }

    get = () => {
        const {users, id} = this.props;
        if(id != null)
        {
            const reviver = users.find( v => v.id === id);
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

        const options = {
            name: this.state.name,
            email: this.state.email,
            birth: this.state.birth,
            sexe: this.state.sexe,
            phone: this.state.phone,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            password_old: this.state.password_old,
            type: 0,
        };

        if(id != null)
        {
            edit(id,options)
            .then(res => {
                dispatch({
                type:actions.EDIT_USER,
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
                type:actions.CREATE_USER,
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
        const {open, handleClose, id} = this.props;
        const { validing, errors } = this.state;
        return (
<div>
    <Dialog
        disableBackdropClick disableEscapeKeyDown
        open={open}
        TransitionComponent={Transition}
        onClose={ () => {handleClose(null)} }
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{id != null ? "Modifier l'utilisateur" :"Ajouter un Utilisateur"}</DialogTitle>
        <DialogContent>
            <Row>
                <Col xs="12" md="12">
                    <TextField
                        error={msg.is_msg(errors, 'name')}
                        autoFocus
                        margin="dense"
                        label="Nom Complet"
                        name="name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'name')}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </Col>
                <Col xs="12" md="12">
                    <TextField
                        error={msg.is_msg(errors, 'birth')}
                        margin="dense"
                        label="Date de naissance"
                        name="birth"
                        type="date"
                        fullWidth
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'birth')}
                        value={this.state.birth}
                        onChange={this.handleChange}
                    />
                </Col>
                <Col xs="12" md="12">
                    <TextField
                        error={msg.is_msg(errors, 'sexe')}
                        margin="dense"
                        select
                        label="Sexe"
                        name="sexe"
                        type="text"
                        fullWidth
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'sexe')}
                        value={this.state.sexe}
                        onChange={this.handleChange}
                    >
                        {sexeData.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Col>
                <Col xs="12" md="12">
                    <TextField
                        error={msg.is_msg(errors, 'phone')}
                        margin="dense"
                        label="Téléphone"
                        name="phone"
                        type="text"
                        fullWidth
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'phone')}
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </Col>
                <Col xs="12" md="12">
                    <TextField
                        error={msg.is_msg(errors, 'email')}
                        margin="dense"
                        label="Adresse mail"
                        name="email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'email')}
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </Col>

                {
                    id != null ?
                    <Col xs="12" md="12">
                    <TextField
                            margin="dense"
                            label="Ancien Mot de passe"
                            type="password"
                            name="password_old"
                            fullWidth
                            size="normal"
                            variant="outlined"
                            value={this.state.password_old}
                            onChange={this.handleChange}
                        />
                    </Col>
                    :null
                }

                <Col xs="12" md="6">
                    <TextField
                        error={msg.is_msg(errors, 'password')}
                        margin="dense"
                        label="Mot de passe"
                        type="password"
                        name="password"
                        fullWidth
                        size="normal"
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'password')}
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </Col>
                <Col xs="12" md="6">
                    <TextField
                        error={msg.is_msg(errors, 'password_confirmation')}
                        margin="dense"
                        id="name"
                        label="Confirmer mot de passe"
                        type="password"
                        name="password_confirmation"
                        fullWidth
                        size="normal"
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'password_confirmation')}
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                    />
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
        users: state.UserReducer.users,
        user: state.AuthReducer.user
    }
  }

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        store: (data) => actionsCreator.store(data),
        edit: (id, data) => actionsCreator.edit(id, data)
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Create));
