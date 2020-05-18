import React from 'react'
import axios from 'axios'

class CustomerForm extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      name:   props.isEdit? props.customer.name: 'name',
      mobile: props.isEdit? props.customer.mobile:'mobile',
      email:  props.isEdit? props.customer.email:'email'
    }  

    this.nameChange   = this.nameChange.bind(this)
    this.mobileChange = this.mobileChange.bind(this)
    this.emailChange  = this.emailChange.bind(this)
    this.submit       = this.submit.bind(this)

  }
    
  nameChange(e) {
    const name = e.target.value
    this.setState(() => ({name}))
  }

  mobileChange(e) {
    const mobile = e.target.value
    if(mobile.length <= 10) {
      this.setState(() => ({mobile}))
    }  
  }

  emailChange(e) {
    const email = e.target.value
    this.setState(() => ({email}))
  }

  submit(e) {
    e.preventDefault()
    const formData = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email
    }
    this.props.addForm(formData)
  }

  render() {
    return(
      <div>
        <form id="submit" onSubmit={this.submit}>
          <label htmlfor="name">name</label>
          <input id="name" value={this.state.name} onChange={this.nameChange}/><br/>

          <label htmlfor="mobile">mobile</label>
          <input id="mobile" value={this.state.mobile} onChange={this.mobileChange}/><br/>

          <label htmlfor="email">email</label>
          <input id="email" value={this.state.email} onChange={this.emailChange}/><br/>

          <button type="submit">Submit</button>
          
        </form>
      </div>
    )
  }
  
}

export default CustomerForm