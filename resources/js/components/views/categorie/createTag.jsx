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
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/TagActions';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: '',

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
            label: '',
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
            label: res.label,
        })
    }

    get = () => {
        const {tags, id} = this.props;
        if(id != null)
        {
            const reviver = tags.find( v => v.id === id);
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
            label: this.state.label,
        };

        if(id != null)
        {
            edit(id,options)
            .then(res => {
                dispatch({
                type:actions.EDIT_TAG,
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
                type:actions.CREATE_TAG,
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
        <DialogTitle id="alert-dialog-slide-title">{id != null ? "Modifier Tag" :"Ajouter un Tag"}</DialogTitle>
        <DialogContent>
            <Row>
                <Col xs="12" md="12">
                    <TextField
                        error={msg.is_msg(errors, 'label')}
                        autoFocus
                        margin="dense"
                        label="Libelle"
                        name="label"
                        type="text"
                        fullWidth
                        variant="outlined"
                        helperText={msg.fildsMsgHandler(errors, 'label')}
                        value={this.state.label}
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
        tags: state.TagReducer.tags,
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
