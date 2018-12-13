import React, { Component } from 'react'
import {Typography,Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {NoteAddOutlined,RepeatOutlined} from '@material-ui/icons'
import btn1 from './1.png'
import btn2 from './2.png'

const styles = theme => ({
  root:{
    width:"100%",
    // border:"1px solid #000",
    minHeight:"100px",
  },
  img:{
      margin:"5px auto",
      display:"block"
  },
  btns:{
    //   display:"flex"
    margin:"10px 0px"
  },
  btn:{
      borderWidth:"2px"
  }
})

class ShopItem extends Component {
  constructor(props){
    super(props)
  }
  
  handleClick = event => {
    console.log(event.target);        
  }
  render() {
    const {classes, item} = this.props;
    return (
      <div className={classes.root} id={item.id}>
        <img  className={classes.img} src="http://placehold.it/160x206/" />
        <Typography variant="caption"><a href="#" >{item.name}</a></Typography>
        <Typography variant="caption">${item.price}</Typography>
        
        <div className={classes.btns}>
            <Button 
                variant="outlined" 
                name="add" 
                onClick={this.handleClick} 
                className={classes.btn}
                style={{marginLeft:5, padding:"8px"}} > Add To Cart</Button>
            <Button 
                variant="outlined"
                name="btn2" 
                onClick={this.handleClick} 
                color="default"
                size="small"
                style={{float:"right", marginRight:5, minWidth:32}} 
                
                className={classes.btn}><NoteAddOutlined style={{ fontSize: 19 }}/></Button>
            <Button 
                variant="outlined"
                name="btn1" 
                onClick={this.handleClick} 
                color="default"
                size="small"
                style={{float:"right", marginRight:5, minWidth:32 }} 
                className={classes.btn}><RepeatOutlined style={{ fontSize: 19 }}/></Button>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ShopItem)