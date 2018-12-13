import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import HeaderList from './listHeader'
import FooterList from './listFooter'
import Product from './item'

const styles = theme => ({
	root: {
		width: "100%",
		// border:"1px solid #000",
		minHeight: "100px",
	},
})


class ShopList extends Component {
	constructor(props) {
		super(props)
		this.state={
			perPage:5,
			page:0,
			pages:1,
		}
	}
	changePerPage = perPage =>{
		this.setState({perPage})		
	}
	changePage = page =>{
		this.setState({page})
	}
	viewList = (list, startIndex, count) => {
		const result = []
		for (let i = startIndex; i < startIndex+count; i++) {
			result.push(list[i])					
		}
		console.log(result);
		
		return result;
	}
	render() {
		const { classes,products } = this.props;
		const { perPage,page } = this.state;

		let startIndex, viewCount = 0;
		if(products.list.length < perPage){
			startIndex = 0
			viewCount = products.list.length
		}
		else {
			startIndex = page * perPage
			if(products.list.length - page * perPage <= perPage) {
				viewCount = products.list.length - page * perPage
			}else{				
				viewCount = perPage
			}
		}
		return (
			<div className={classes.root}>
				<HeaderList perPage={perPage} changePerPage={this.changePerPage}/>
				<hr />
				<Grid container spacing={24}>					
					{this.viewList(products.list,startIndex,viewCount).map(item => (
						<Grid item xs={12} sm={6} md={4}> 
							<Product item={item} key={item.id}/>
						</Grid>
					))}
				</Grid>
				<FooterList page={page} changePage={this.changePage}/>
			</div>
		)
	}
}
export default withStyles(styles)(ShopList)