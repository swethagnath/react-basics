import React from 'react'
import axios from 'axios'
import CustomerForm from './CustomerForm'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class CustomerNew extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}
    
    this.addForm = this.addForm.bind(this)
  }

  addForm(formData) {
    axios.post('http://dct-ticket-master.herokuapp.com/customers', formData, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
    .then((response) => {
      this.props.history.push('/customers')
    })

  }

  render() {
    return(
      <div>
        <p>add customer</p>
        <CustomerForm addForm={this.addForm}/>
      </div>
    )
  } 
  
}
  
export default CustomerNew


