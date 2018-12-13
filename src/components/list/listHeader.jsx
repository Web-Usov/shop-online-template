import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Typography,FormControl,InputLabel,Select,Input,MenuItem } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10,
  },
  title:{

  },
  btns:{
    
  },
  form: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  select_root:{
    // border:"solid 2px #eaeaea",
    borderRadius:"25px !important",
    overflow:"hidden",
    border:"none !important",
    '&::before':{
      display:'node',
    }
  },
  select_input:{
    // border:"solid 2px red",
    borderRadius:"25px !important",
    padding:"6px 36px 6px 18px",
    overflow:"hidden",
  },
  select_icon:{
    right:8,
  }
})


class ListHeader extends Component {
  constructor(props){
    super(props)
    this.state={
      position:""      
    }
  }
  handleChange = event => {
    // this.setState({ [event.target.name]: event.target.value });

    const {changePerPage} = this.props;

    switch (event.target.name) {
      case "perPage":            
        changePerPage(event.target.value)
        break;    
      default:
        break;
    }

  };
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="caption">150 item(s)</Typography>
        </div>
        <div className={classes.btns}>
          
        <FormControl className={classes.form}>
          <Select
            value={this.props.perPage}
            onChange={this.handleChange}
            name="perPage"
            classes={{
              root:classes.select_root,
              select:classes.select_input,
              icon:classes.select_icon,
            }}
          >
            <MenuItem value={5}>5 per page</MenuItem>
            <MenuItem value={10}>10 per page</MenuItem>
            <MenuItem value={15}>15 per page</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <Select
            value={this.state.position}
            onChange={this.handleChange}
            name="position"
            displayEmpty
            classes={{
              root:classes.select_root,
              select:classes.select_input,
              icon:classes.select_icon,
            }}
          >
            <MenuItem value="" disabled>Position</MenuItem>
            <MenuItem value={"pup"}>PUP</MenuItem>
            <MenuItem value={"pop"}>POP</MenuItem>
          </Select>
        </FormControl>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ListHeader)