import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { signInUser } from '../Data/AuthAgents';

export default function AgentLogin() {
  const navigate = useNavigate();
  //const url = `/agentHome/${agent.uid}`;
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
        <div className='div-1 form-div'>
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

AgentLogin.Proptype = {
  agent: PropTypes.shape(PropTypes.obj).isRequired
}
