import React from 'react'
import {  Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
 

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
const NavBar= (props)=> {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            <MenuIcon />
              PixaBay finder
            </Typography>
            <Button color="inherit"><Link to="/login" style={{color:'#f5f6fa',textDecoration:'none'}} >Login</Link>  </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavBar);