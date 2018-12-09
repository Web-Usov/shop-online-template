import React, { Component } from 'react'
import {Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width:"100%",
    height: 0,
    paddingBottom: '23%',
    backgroundColor:"#c7c7c7",
    // border:"1px solid #000",
    borderRadius:"4px",
    marginBottom:15,
  },
  title:{
    color:"#ffffff",
    paddingLeft:"3%",
    fontWeight:300,
  }
})


class Banner extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" className={classes.title} style={{paddingTop:"10%"}}>Banner</Typography>
        <Typography variant="h3" className={classes.title}>880 x 208px</Typography>
      </div>
    )
  }
}
export default withStyles(styles)(Banner)