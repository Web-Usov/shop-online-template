import React, { Component } from 'react'
import {Typography, Checkbox} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    border:"1px solid #000",
    minHeight:"100px",
    margin:"0 20px",
  },
  title:{
    backgroundColor:"#e0e0e0",
    padding:"5px 20px",
  },
  subtitle:{
    padding:"5px 20px",
    fontWeight:500,
  },
  ul:{
    padding:"0 0 0 20px"
  },
  hr:{
    margin:"5px 20px"
  },
  li:{
    margin:"12px 0",    
    cursor:"pointer",
  },
  li_a:{
    color:"#222222 !important",
    '&:hover':{
      fontWeight:500
    }
  },
  color_ul:{
    padding:"0 20px"
  },
  color_li:{
    padding:0,
    margin:0,
    display:"inline-block",
    width:20,
    height:20,
    cursor:"pointer",
    position:"relative"
  },
  color_li_active:{
    '&:before':{
      position:'absolute',
      width:'100%',
      height:'100%',
      border:"solid 2px #fff",
      // margin: "0 -2px -2px -2px",
      boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
      boxSizing: "unset",
      content: `""`,
      top: -2,
      left: -2,
      zIndex: 10,

    },
  }
})

let categories = [
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
let brands = [
  {
    name:"Kanma",
    id:"1",
    count:50,
    active:false,
  },
  {
    name:"Ideos",
    id:"2",
    count:50,
    active:false,
  },
]
const colors = [
  {
    name:"red",
    value:"#da0000",
    id:"1",
    active:false,
  },
  {
    name:"orange",
    value:"#ffa200",
    id:"2",
    active:true,
  },
  {
    name:"yellow",
    value:"#f6ff00",
    id:"3",
    active:false,
  },
  {
    name:"green",
    value:"#6cb700",
    id:"4",
    active:false,
  },
  {
    name:"lime",
    value:"#00da43",
    id:"5",
    active:false,
  },
  {
    name:"lightBlue",
    value:"#00f6ff",
    id:"6",
    active:false,
  },
  {
    name:"blue",
    value:"#008aff",
    id:"7",
    active:false,
  },
  {
    name:"darkBlue",
    value:"#0011b7",
    id:"8",
    active:false,
  },
  {
    name:"purple",
    value:"#5e00df",
    id:"9",
    active:false,
  },
  {
    name:"lightPurple",
    value:"#9f00da",
    id:"10",
    active:false,
  },
  {
    name:"black",
    value:"#000000",
    id:"11",
    active:false,
  },
  {
    name:"white",
    value:"#ffffff",
    id:"12",
    active:false,
  },
]
class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state={
      categories,
      brands,
      colors
    }
  }
  viewCategories = (list) => {
    const {classes} = this.props;
    
    return (<ul className={classes.ul}>
      {list.map(item => (
        <li key={item.id} className={classes.li}>
          <Typography variant="caption" ><a href='#' className={classes.li_a}>{item.name} ({item.count})</a></Typography>
          {item.categories.length !== 0 ? this.viewCategories(item.categories) : undefined}
        </li>
      ))}
    </ul>)
  }
  viewBrands = (list) => {
    const {classes} = this.props
    return (<ul style={{padding:"0 0 0 10px"}}>
      {list.map(item => (
        <li key={item.id}  className={classes.li}>
         <Typography><label style={{cursor:"pointer"}}><Checkbox id={item.id} style={{padding:"10px 10px"}}/>{item.name} ({item.count})</label></Typography>
        </li>
      ))}
    </ul>)
  }
  viewColors = (list) => {
    const {classes} = this.props
    return (<ul className={classes.color_ul}>
      {list.map(color => {
        let cn = classes.color_li
        if(color.active) cn=cn+" "+classes.color_li_active
        return (
          <li 
          id={"color-"+color.id}
          className={cn}
          key={color.id} 
          style={{backgroundColor:color.value}}>
          </li>
        )
      })}
    </ul>)
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>Shop By</Typography>
        <Typography variant="overline" className={classes.subtitle}>Categories</Typography>
        <hr className={classes.hr}/>
        <div style={{paddingRight:20, marginBottom:20}}>
          {this.viewCategories(this.state.categories)}
        </div>
        <Typography variant="overline" className={classes.subtitle}>Price</Typography>
        <hr className={classes.hr}/>
        <Typography variant="overline" className={classes.subtitle}>Color</Typography>
        <hr className={classes.hr}/>
        <div style={{marginBottom:20}}>
          {this.viewColors(this.state.colors)}
        </div>
        <Typography variant="overline" className={classes.subtitle}>Brand</Typography>
        <hr className={classes.hr}/>
        <div style={{paddingRight:20, marginBottom:20}}>
          {this.viewBrands(this.state.brands)}
        </div>

      </div>
    )
  }
}


export default withStyles(styles)(Sidebar)