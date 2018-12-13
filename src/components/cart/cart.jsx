import React, { Component } from 'react'
import {Grid, Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

const styles = theme => ({
  root:{
  }
})


class Cart extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  componentDidMount(){
  }
  render() {
    const {classes} = this.props;
    return (
      <section className={classes.root}>
        <Typography variant="h1">HOHO</Typography>
      </section>
    )
  }
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({})

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Cart))