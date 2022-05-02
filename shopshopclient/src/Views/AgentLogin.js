import React from 'react'
import { Link } from 'react-router-dom'

export default function AgentLogin() {
  return (
    <div className=' body agent-login-body'>
      <div className='page-title'>Agent Login</div>
      <hr />
      <div className='div-body'>
        <div className='div-1 form-div'>
            <div className='login-title'>Login</div>
            <div className='login-form'>Login Form
              <div className='login-button btn'>Login</div>
              <Link className='create-account-button' to="/createAgent">
                <div>Create Account</div>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}
