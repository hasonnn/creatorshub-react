import React from 'react'
import { User } from '../requests'

const SignUpPage = (props) => {
  const { onSignUp } = props

  const handleSubmit = event => {
    const { currentTarget } = event
    event.preventDefault()
    const formData = new FormData(currentTarget)
    const params = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    }
    User.create(params).then(res => {
      if (res?.id) {
        onSignUp()
        props.history.push('/') 
      }
    })
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 pb-4">
              <div className="sign-div">
                <h1>Sign Up</h1> 
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input className="form-control" type="text" name="first_name" id="first_name" />
                </div> <br/>
                <div>
                  <label htmlFor="last_name">Last Name</label>
                  <input className="form-control" type="text" name="last_name" id="last_name" />
                </div> <br/>
                <div>
                  <label htmlFor="email">Email</label>
                  <input className="form-control" type="email" name="email" id="email" />
                </div> <br/>
                <div>
                  <label htmlFor="password">Password</label>
                  <input className="form-control" type="password" name="password" id="password" />
                </div> <br/>
                <div>
                  <label htmlFor="password_confirmation">Password Confirmation</label>
                  <input className="form-control" type="password" name="password_confirmation" id="password_confirmation" />
                </div> <br/>
                <input className="btn btn-danger" type="submit" value="Sign Up" />
              </form>
            </div> 
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
            
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage


