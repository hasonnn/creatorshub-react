import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { User } from './requests'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CourseIndexPage from './components/CourseIndexPage'
import CourseShowPage from './components/CourseShowPage'
import EpisodeShowPage from './components/EpisodeShowPage'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import AuthRoute from './components/AuthRoute'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isLoading: true
    }
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current()
    .then(user => {
      if (user?.id) {
        this.setState(state => {
          return { user, isLoading: false }
        })
      }
    })
  }

  onSignOut = () => {
    this.setState({ user: null })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} /> 
          <Switch>
            <Route exact path='/sign_in' render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />}  />
            <Route exact path='/sign_up' render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />}  />

            <Route path="/" exact component={Home} />

            {/* <Route path="/courses/:id" component={CourseShowPage}/> */}
            <AuthRoute isAuthenticated={!!this.state.user} exact path="/courses/:id" component={CourseShowPage} />

            <Route path="/courses" component={CourseIndexPage} />

            {/* <Route path="/episodes/:id" component={EpisodeShowPage}/> */}
            {this.state.isLoading? (<div></div>) : (
            <AuthRoute isAuthenticated={!!this.state.user} exact path="/episodes/:id" component={EpisodeShowPage} />
            )} 
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
