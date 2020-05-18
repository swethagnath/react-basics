import React from 'react'
import {BrowserRouter, Route, Link, Switch}    from 'react-router-dom'
import CustomerList from './components/customers/CustomerLists'
import CustomerNew from './components/customers/CustomerNew'
import DepartmentLists from './components/departments/lists'
import CustomerShow   from './components/customers/Show'
import CustomerEdit from './components/customers/Edit'

class App extends React.Component {
  
  render() {
    return( 
      <BrowserRouter>

        <div>
          <h3>Ticket Master</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/customers">Customer</Link></p>
          <p><Link to="/departments">Department</Link></p>
        </div>
 
        <h2><Link to="/add">Add customer</Link></h2>
       
        <Switch>
          <Route path="/add" component={CustomerNew} />
          <Route path="/customers" component={CustomerList} />
          <Route path = "/departments" component={DepartmentLists} />
          <Route path="/customer/edit/:id" component={CustomerEdit} exact={true}/>
          <Route path="/customer/:id" component={CustomerShow} /> 
        </Switch>

      </BrowserRouter>
    )
  }
}

export default App