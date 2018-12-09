import React, { Component } from 'react'
import {Sidebar,Breakpoints, Banner,ShopList,MainFooter} from 'components'
import axios from 'axios'
import {SERVER} from 'config'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    border:"1px solid #000",
  }
})


class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      list:null
    }
  }
  componentDidMount(){
    // axios.get(SERVER+'/api/categories')
    //   .then(res => res.json())
    //   .then(data => alert(data))
    //   .catch(error => alert("ERROR: "+error));
  }
  render() {
    const {classes} = this.props;
    return (
      <section className={classes.root}>
        <Breakpoints/>
        <Grid container >
          <Grid item sm={4} md={3} xs={12}>
            <Sidebar/>
          </Grid>
          <Grid item sm={8} md={9} xs={12}>
            <Banner/>
            <ShopList/>
          </Grid>
        </Grid>
        <MainFooter/>
      </section>
    )
  }
}
export default withStyles(styles)(Main)