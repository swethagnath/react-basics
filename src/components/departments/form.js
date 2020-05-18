import React from 'react'

class DepartmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'name'
    }
    this.submitDepartment = this.submitDepartment.bind(this)
    this.departmentName   = this.departmentName.bind(this)
  }

  departmentName(e) {
    const  name = e.target.value
    this.setState(() => ({name}))
  }

  submitDepartment(e) {
    e.preventDefault()
    const formData = {
      name: this.state.name
    }
    this.props.add(formData)
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.submitDepartment}>
          <label htmlFor="department">
            <input id="department" value={this.state.name} onChange={this.departmentName} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default DepartmentForm