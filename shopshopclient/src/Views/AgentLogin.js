import React from 'react'
import { Link } from 'react-router-dom'
import { signInUser } from '../Data/AuthAgents'

export default function AgentLogin() {
  return (
    <div className='body agent-login-body'>
      <div className='img'></div>
      <div className="title">
          Agent Login
          <hr className="hr" />
      </div>
      <div className='div-body'>
        <div className='div-1 form-div'>
              <div>
                <Link className='login-button btn btn-info' onClick={signInUser} to='/'>Login</Link>
              </div>
              <Link className='create-account-button' to="/createAgent">
                <div>Create Account</div>
              </Link>
        </div>
      </div>
    </div>
  )
}
