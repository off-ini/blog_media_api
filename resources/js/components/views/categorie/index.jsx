import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withSnackbar } from 'notistack';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
} from 'reactstrap';
import Breadcrumbs from '../../components/breadcrumb';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import * as actions from '../../store/actions/type';
import * as actionsCatCreator from '../../store/actions/CategorieActions';
import * as actionsTagCreator from '../../store/actions/TagActions';
import APIModel from '../../core';
import * as msg from '../../utils/message';
import errorHandler from '../../utils/errors';

import CreateCat from './createCat';
import CreateTag from './createTag';

const navLinks = [
    {name:"Categories", url:"/categories"},
];

class Categorie extends Component {
    constructor(props){
        super(props);

        this.state = {
            loadingCat:false,
            deletingCat:false,
            openCatAdd:false,
            openCatDel:false,

            loadingTag:false,
            deletingTag:false,
            openTagAdd:false,
            openTagDel:false,

            idCat:null,
            idTag:null,

            activePage_cat: 0,
            itemsCountPerPage_cat: 0,
            totalItemsCount_cat: 1,

            activePage_tag: 0,
            itemsCountPerPage_tag: 0,
            totalItemsCount_tag: 1,
        }
    }

    componentDidMount()
    {
        this.allCat();
        this.allTag();
    }

    handleTagAddClose = (id) => {
        this.setState({idTag:id}, () => {
            this.setState({openTagAdd: !this.state.openTagAdd});
        })
    }

    handleCatAddClose = (id) => {
        this.setState({idCat:id}, () => {
            this.setState({openCatAdd: !this.state.openCatAdd});
        })
    }

    handleTagDelClose = (id) => {
        this.setState({idTag:id}, () => {
            this.setState({openTagDel: !this.state.openTagDel});
        });
    }

    handleCatDelClose = (id) => {
        this.setState({idCat:id}, () => {
            this.setState({openCatDel: !this.state.openCatDel});
        });
    }

    allCat()
    {
        let { allCat, dispatch, history } = this.props
        allCat().then(res => {
        dispatch({type:actions.ALL_CATEGORIES, payload:res.data.data});
        this.setState({
            activePage_cat: res.data.meta.current_page - 1,
            itemsCountPerPage_cat: res.data.meta.per_page,
            totalItemsCount_cat: res.data.meta.total
        })
        }).catch(e => errorHandler(e, dispatch, history))
    }

    allTag()
    {
        let { allTag, dispatch, history } = this.props
        allTag().then(res => {
        dispatch({type:actions.ALL_TAGS, payload:res.data.data});
        this.setState({
            activePage_tag: res.data.meta.current_page - 1,
            itemsCountPerPage_tag: res.data.meta.per_page,
            totalItemsCount_tag: res.data.meta.total
        })
        }).catch(e => errorHandler(e, dispatch, history))
    }

    handleCatDelete = (id) => {
        this.setState({deletingCat:true});
        let { removeCat, dispatch, history } = this.props
        removeCat(id).then(res => {
            dispatch({type:actions.DELETE_CATEGORIE, payload:res.data.id});
            msg.defaultSuccess(this.props);
            this.handleCatDelClose(null)
        }).catch(e => {
            errorHandler(e, dispatch, history)
            msg.defaultError(this.props);
        })
        .finally(() => {
            this.setState({deletingCat:false});
        })
    }

    handleTagDelete = (id) => {
        this.setState({deletingTag:true});
        let { removeTag, dispatch, history } = this.props
        removeTag(id).then(res => {
            dispatch({type:actions.DELETE_TAG, payload:res.data.id});
            msg.defaultSuccess(this.props);
            this.handleTagDelClose(null)
        }).catch(e => {
            errorHandler(e, dispatch, history)
            msg.defaultError(this.props);
        })
        .finally(() => {
            this.setState({deletingTag:false});
        })
    }

    handleCatPageChange = (event,pageNumber) => {
        let { allCat, dispatch, history } = this.props
        allCat(pageNumber+1)
        .then(res => {
          dispatch({type:actions.ALL_CATEGORIES, payload:res.data.data});
          this.setState({
            activePage_cat: res.data.meta.current_page - 1,
            itemsCountPerPage_cat: res.data.meta.per_page,
            totalItemsCount_cat: res.data.meta.total
          })
        })
        .catch(e => errorHandler(e, dispatch, history))
    }

    handleTagPageChange = (event,pageNumber) => {
        let { allTag, dispatch, history } = this.props
        allTag(pageNumber+1)
        .then(res => {
          dispatch({type:actions.ALL_TAGS, payload:res.data.data});
          this.setState({
            activePage_cat: res.data.meta.current_page - 1,
            itemsCountPerPage_cat: res.data.meta.per_page,
            totalItemsCount_cat: res.data.meta.total
          })
        })
        .catch(e => errorHandler(e, dispatch, history))
    }

    render() {
        const {categories, tags} = this.props;
        const {deletingCat, deletingTag,} = this.state;
        return (
            <div>
                <Breadcrumbs data={navLinks} /><br/> <br/>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Categories</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="text-right">
                                    <Button outline color="info" onClick={ () => {this.handleCatAddClose(null)} }><i className="mdi mdi-plus" /> Ajouter</Button> {' '}
                                    <Button outline color="success" onClick={ () => {this.allCat()} }><i className="mdi mdi-refresh" /> </Button>
                                </div><br/> <br/>
                                <div style={{ width: '100%' }}>
                                <Paper>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table" size="small">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Libelle</TableCell>
                                                <TableCell align="center">Actions</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {categories.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell align="center" component="th" scope="row">{row.label}</TableCell>
                                                    <TableCell align="center">
                                                        <Button outline color="info" onClick={ () => {this.handleCatAddClose(row.id)} }><i className="mdi mdi-pencil" /></Button>{' '}
                                                        <Button outline color="danger" onClick={ () => {this.handleCatDelClose(row.id)} }><i className="mdi mdi-close" /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10]}
                                        component="div"
                                        count={this.state.totalItemsCount_cat}
                                        rowsPerPage={this.state.itemsCountPerPage_cat}
                                        page={this.state.activePage_cat}
                                        onChangePage={this.handleCatPageChange}
                                        onChangeRowsPerPage={this.handleCatPageChange}
                                    />
                                </Paper>
                                </div>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Tags</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="text-right">
                                    <Button outline color="info" onClick={ () => {this.handleTagAddClose(null)} }><i className="mdi mdi-tag-outline" /> Ajouter</Button> {' '}
                                    <Button outline color="success" onClick={ () => {this.allTag()} }><i className="mdi mdi-refresh" /> </Button>
                                </div><br/> <br/>
                                <div style={{ width: '100%' }}>
                                <Paper>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table" size="small">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Libelle</TableCell>
                                                <TableCell align="center">Actions</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {tags.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell align="center" component="th" scope="row">{row.label}</TableCell>
                                                    <TableCell align="center">
                                                        <Button outline color="info" onClick={ () => {this.handleTagAddClose(row.id)} }><i className="mdi mdi-pencil" /></Button>{' '}
                                                        <Button outline color="danger" onClick={ () => {this.handleTagDelClose(row.id)} }><i className="mdi mdi-close" /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10]}
                                        component="div"
                                        count={this.state.totalItemsCount_tag}
                                        rowsPerPage={this.state.itemsCountPerPage_tag}
                                        page={this.state.activePage_tag}
                                        onChangePage={this.handleTagPageChange}
                                        onChangeRowsPerPage={this.handleTagPageChange}
                                    />
                                </Paper>
                                </div>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>

                <CreateCat
                    open={this.state.openCatAdd}
                    handleClose={this.handleCatAddClose}
                    id={this.state.idCat}
                />

                <CreateTag
                    open={this.state.openTagAdd}
                    handleClose={this.handleTagAddClose}
                    id={this.state.idTag}
                />

                <Dialog
                    open={this.state.openCatDel}
                    onClose={() => {this.handleCatDelClose(null)}}
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
                    <Button onClick={() => {this.handleCatDelClose(null)}} color="dedault">
                        Retour
                    </Button>
                    {
                    deletingCat ?
                    <CircularProgress color="secondary" size={30} />
                    :
                    <Button onClick={ () => {this.handleCatDelete(this.state.idCat)} } color="danger" autoFocus>
                        Supprimer
                    </Button>
                    }

                    </DialogActions>
                </Dialog>

                <Dialog
                open={this.state.openTagDel}
                onClose={() => {this.handleTagDelClose(null)}}
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
                    <Button onClick={() => {this.handleTagDelClose(null)}} color="dedault">
                        Retour
                    </Button>
                    {
                    deletingTag ?
                    <CircularProgress color="secondary" size={30} />
                    :
                    <Button onClick={ () => {this.handleTagDelete(this.state.idTag)} } color="danger" autoFocus>
                        Supprimer
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
        categories: state.CategorieReducer.categories,
        tags: state.TagReducer.tags,
        user: state.AuthReducer.user
    }
}

const mapDispatchToProsps = dispatch => {
    return {
        dispatch:dispatch,
        allCat: (n) => actionsCatCreator.padding(n, 10),
        removeCat: (id) => actionsCatCreator.remove(id),
        allTag: (n) => actionsTagCreator.padding(n, 10),
        removeTag: (id) => actionsTagCreator.remove(id),
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProsps)(Categorie));
