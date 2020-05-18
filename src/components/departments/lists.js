import React from 'react'
import DepartmentNew from './new'
import axios from 'axios'

import {BrowserRouter, Route, Link} from 'react-router-dom'

class Department extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      department: []
    }
  }

  componentDidMount() {
    axios.get('http://dct-ticket-master.herokuapp.com/departments', {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
    .then((res) => {
      this.setState(() => ({department: res.data}))
      console.log(this.state.department)
    })
  }

  render() {
    return (
      <div>
        <p>listing of customers</p>
        <ul>
            {this.state.department.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default Department