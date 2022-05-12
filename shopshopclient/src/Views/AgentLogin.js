
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { signInUser } from '../Data/AuthAgents';

export default function AgentLogin() {
  const navigate = useNavigate();
  const uid = sessionStorage.getItem("uid")
  

  const handleClick = (e) => {
    signInUser();
    navigate(`/agentHome/${uid}`);
  }
  
  return (
    <div className='body agent-login-body'>
      <div className='img'></div>
      <div className="title">
          Agent Login
          <hr className="hr" />
      </div>
      <div className='div-body'>
        <div className='btn-div'>
          <button className='login-button btn btn-info' onClick={(e) => handleClick(e)}>Login</button>
        </div>
      </div>
    </div>
  )
}

AgentLogin.Proptype = {
  agent: PropTypes.shape(PropTypes.obj).isRequired
}
