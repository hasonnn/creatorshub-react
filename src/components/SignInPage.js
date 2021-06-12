import React from 'react'
import { Session } from '../requests'
import { Link } from 'react-router-dom'

function SignInPage(props) {
  const { onSignIn } = props

  function handleSubmit(event) {
    event.preventDefault()
    const {currentTarget} = event
    const formData = new FormData(currentTarget)
    const params = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    Session.create(params).then(data => {
      if (data.id) {
        onSignIn()
        props.history.push('/')
      }
    })
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <div className="sign-div">
                <h1>Sign In</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control" type="email" name="email" id="email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> <br/>
                <div>
                  <label htmlFor="password">Password</label>
                  <input className="form-control" type="password" name="password" id="password" />
                </div> <br/>
                <input className="btn btn-danger" type="submit" value="Sign In" />
              </form> 
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <div className="sign-div">
                <h1>Sign In to Gain</h1>
                <h1>Full Access to Online Courses</h1> <br/>
                <p>Don't have an account? <Link style={{ textDecoration: 'none', color: 'red' }} to={`/sign_up`}>Sign Up</Link></p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignInPage


