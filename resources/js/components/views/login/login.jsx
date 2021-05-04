import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import * as actions from '../../store/actions/type';
import * as actionsCreator from '../../store/actions/AuthActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Media
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function LoginForm({email, password, loading, error, handleChande, onSubmit, handleErrorState}) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connectez-vous !!!
          </Typography>
          {
              error ?
                <Alert
                severity="error"
                onClose={handleErrorState}
                >
                    <AlertTitle>Error</AlertTitle>
                    <strong>Email ou Mot de passe incorrect!</strong>
                </Alert>
              :null
          }

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChande}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChande}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <br/>
            <Grid container alignItems="center" alignContent="center" justify="center">
            {
                loading ?
                <CircularProgress color="default" />
                :
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onSubmit}
                >Login</Button>
            }
            </Grid>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          loading:false,
          error:false,
        };
        //msg.appTitle('Connexion');
    }
    componentDidMount()
    {
        if(this.props.user)
        {
            this.props.history.push('/');
        }
    }

    handleChande = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
        this.setState({error: false});
    }

    handleErrorState = ()  => {
        this.setState({error: false});
    }

    login = e => {
        e.preventDefault();
        this.setState({loading:true});
        let {dispatch, login, history} = this.props;
        const params = this.state;

        login(params).then(res => {
        dispatch({type:actions.LOGIN, payload:res.data});
        this.setState({loading:false});
        history.push('/');
        }).catch(err => {
            this.setState({loading:false, error: true});
        });
    }
    render() {
      const { password, email, loading, error } = this.state;
      return (
        <LoginForm
            email={email}
            password={password}
            loading={loading}
            error={error}
            handleChande={this.handleChande}
            onSubmit={this.login}
            handleErrorState={this.handleErrorState}
        />
      );
    }
  }

const mapStateToProps = state => {
    return {
        user: state.AuthReducer.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch:dispatch,
        login: params => actionsCreator.login(params)
    }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
