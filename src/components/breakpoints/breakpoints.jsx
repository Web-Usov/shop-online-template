import React, { Component } from 'react'
import {Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    border:"1px solid #000",
    marginTop:15,
    marginBottom:15,
  }
})

class Breakpoints extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h5">Breakpoints</Typography>
        
      </div>
    )
  }
}
export default withStyles(styles)(Breakpoints)