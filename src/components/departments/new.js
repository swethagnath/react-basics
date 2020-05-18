import React from 'react'
import axios from 'axios'
import DepartmentForm from './form'

class DepartmentNew extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }
    this.departmentAdd = this.departmentAdd.bind(this)
  }

  departmentAdd(formData) {
    axios.post('http://dct-ticket-master.herokuapp.com/departments', formData, {
      headers: {
        'x-auth': localStorage.getItem('token')
      }
    })
    .then((res) => {
      this.state.department = res.data
    })
  }

  render() {
    return (
      <div>
        <DepartmentForm add= {this.departmentAdd}/>
      </div>
    )
  }

}

export default DepartmentNew