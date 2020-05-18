import React from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import CustomerShow from './Show'
class CustomerList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      isLoading: true
    }
  }

  componentDidMount() {
    
    axios.get('http://dct-ticket-master.herokuapp.com/customers', {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })

    .then((res) => {
      this.setState(() => ({customers: res.data, isLoading: false}))
      if(res.data.hasOwnProperty('errors')){
        alert('error while submitting form')
      } else {
        this.props.history.push('/customers')
      }
    })

    .catch((err) => {
      console.log(err)
    })

  }

  render() {

    return (
      <BrowserRouter>
        {this.state.isLoading ? (<p>Loading..</p>) : (
          <div>
            <p>listing customers</p>
            <ul>
              {this.state.customers.map((customer) => {
                return (
                <Link to={`/customer/${customer._id}`}><li key={customer._id}>{customer.name}</li></Link>
                )
              })}
            </ul>
          </div>
        )}
      </BrowserRouter>
    )

  }
}

export default CustomerList