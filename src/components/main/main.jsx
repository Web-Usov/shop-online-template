import React, { Component } from 'react'
import {Sidebar,Breakpoints, Banner,ShopList,MainFooter} from 'components'
import {Grid} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { categoriesActions } from 'store/actions'
import { categoriesApi } from 'api'

const styles = theme => ({
  root:{
    border:"1px solid #000",
  }
})

const categories = [
  {
    name:"Mobile",
    id:"1",
    count:10,
    active:false,
    categories:[]
  },
  {
    name:"Tablet",
    id:"2",
    count:10,
    active:false,
    categories:[]
  },
  {
    name:"Audio",
    id:"3",
    count:20,
    active:false,
    categories:[
      {
        name:"MP3",
        id:"3_1",
        count:10,
        active:false,
        categories:[]
      },
      {
        name:"BIG MUSIC",
        id:"3_2",
        count:10,
        active:false,
        categories:[]
      }
    ]
  },
]
const totalCountItemsOnCat = 40;
class Main extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  componentWillMount(){
    const {setCategories} = this.props    
    categoriesApi.getCategories((error,data)=>{
      if(error) return console.log("getCategories-Error: ",error)
      return console.log("getCategories-Data: ",data)      
    })
    // setCategories(categories,totalCountItemsOnCat)
  }
  render() {
    const {classes} = this.props;
    return (
      <section className={classes.root}>
        <Breakpoints/>
        <Grid container >
          <Grid item sm={4} md={3} xs={12}>
            <Sidebar categories={this.props.categories}/>
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
const mapStateToProps = state => ({
	categories: state.categories
})
const mapDispatchToProps = dispatch => bindActionCreators(categoriesActions, dispatch)


export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Main))