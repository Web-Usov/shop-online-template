import React, { Component } from 'react'
import {Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width:"100%",
    border:"1px solid #000",
    minHeight:"100px"
  }
})


class ShopList extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h5">ShopList</Typography>
        
      </div>
    )
  }
}
export default withStyles(styles)(ShopList)