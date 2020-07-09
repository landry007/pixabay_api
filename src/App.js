import React, { Component } from 'react';
import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import Login from './components/login/login'
import Register from './components/register/register'
import Users from './components/users/users'
import User from './components/users/single-user'
import NoMatch from './components/nomatch/nomatch'
import Search  from './components/search/search';  

class App extends Component {
  render() {
   return(
    <Router>
      <Switch>

        <Route path ="/" exact component={Search} />
        <Route path ="/user/:id"  component={User} />
        <Route path ="/users"  component={Users} />
        <Route path ="/login"  component={Login} />
        <Route path ="/register" component={Register} />

        <Route component= {NoMatch} />

      </Switch>




    </Router>

   );
  }
}

export default App;
