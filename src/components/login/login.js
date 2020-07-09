import React from 'react';
import NavBar from '../navbar/navbar'

import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBqDimQ5hgf4LYG6XumIwmC8OgqfxbSFg",
    authDomain: "reactmovies-81331.firebaseapp.com",
    databaseURL: "https://reactmovies-81331.firebaseio.com",
    projectId: "reactmovies-81331",
    storageBucket: "reactmovies-81331.appspot.com",
    messagingSenderId: "578612212078"
  };
  firebase.initializeApp(config);

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state={
            email : "",
            password : "",
            remember : false 
        }
    }
    _hanleSubmit(e){
      e.preventDefault()
      let that = this 
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code
        let errorMessage = error.message

        console.log(`${errorCode} : ${errorMessage}`)

        // ...
      })

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          (that.props.history.push(`/user/${12}`))
        } else {
          // No user is signed in.
        }
      })
    }
    hanleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }
  
  render() {
    const { classes } = this.props

    

      return (
        <div>
            <NavBar />
    
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <form  className={classes.form} onSubmit={(e)=>this._hanleSubmit(e) } >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" onChange ={(e)=>this.hanleChange(e)} autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" onChange ={(e)=>this.hanleChange(e)} type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        name = "remember"
                        onChange ={(e)=>this.hanleChange(e)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                    </form>
                </Paper>
            </main>
        </div>
      );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);