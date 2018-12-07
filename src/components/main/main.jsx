import React, { Component } from 'react'
import {Sidebar} from 'components'
import axios from 'axios'
import {SERVER} from 'config'

class main extends Component {
  constructor(props){
    super(props)
    this.state={
      list:null
    }
  }
  componentDidMount(){
    axios.get(SERVER+'/api')
      .then(res => {
        const data = {res}
        alert(JSON.stringify(data))
        
      }).catch(error => alert(error))
  }
  render() {
    return (
      <section>
        <Sidebar/>
      </section>
    )
  }
}
export default (main);