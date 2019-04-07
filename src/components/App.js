import React from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './Search'
import '../styles/App.css'
import SignIn from './Sign/SignIn';
import SignUp from './Sign/SignUp';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/new/1" />} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/top" component={LinkList} />
          <Route exact path="/new/:page" component={LinkList} />
        </Switch>
      </div>
    </div>
  )
}

export default App