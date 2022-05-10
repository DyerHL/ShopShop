import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInUser } from '../Data/AuthAgents';

export default function AgentLogin({agent}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    signInUser();
    navigate(`/agentHome/1`);
    console.warn(agent);
  }
  
  return (
    <div className='body agent-login-body'>
      <div className='img'></div>
      <div className="title">
          Agent Login
          <hr className="hr" />
      </div>
      <div className='div-body'>
        <div className='div-1 form-div'>
            {/* <div className='login-title'>Login</div>
            <div className='login-form'>Login Form */}
              <div>
                <button className='login-button btn btn-info' onClick={(e) => handleClick(e)}>Login</button>
              </div>
              {/*<Link className='create-account-button' to="/createAgent">
                <div>Create Account</div>
          </Link>*/}
            {/* </div> */}
        </div>
      </div>
    </div>
  )
}
