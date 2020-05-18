import React from 'react'
import CustomerForm from './CustomerForm'
import axios from 'axios'

class CustomerEdit extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      customer: {},
      isLoading: true
    } 
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://dct-ticket-master.herokuapp.com/customers/${id}`, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
      .then((res) => {
        this.setState(() => ({customer: res.data, isLoading: false}))
      })
  }

  handleSubmit(formData) {
    
    const id = this.props.match.params.id
    axios.put(`http://dct-ticket-master.herokuapp.com/customers/${id}`, formData, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
      .then((res) => {
        this.props.history.push(`/customers/${id}`)
      })
      
  }

  render() {
    return ( 
      <div>             
        {!this.state.isLoading && <h2><CustomerForm customer={this.state.customer} isEdit={true} addForm={this.handleSubmit}/></h2> }
      </div>
    )
  }

}

export default CustomerEdit