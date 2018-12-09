import React, { Component } from 'react'
import {Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    border:"1px solid #000",
    minHeight:"100px"
  }
})


class Footer extends Component {
  render() {
    const {classes} = this.props;
    return (
      <section className={classes.root}>
        <Typography variant="h5">Footer</Typography>
      </section>
    )
  }
}
export default withStyles(styles)(Footer)