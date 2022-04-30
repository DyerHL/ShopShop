import React from 'react'
// import AgentProfileForm from '../Components/AgentProfileForm'
import CreateAgentForm from '../Components/CreateAgentForm'

export default function CreateAgent() {
    return (
        <div className='body'>
            <div className='img'></div>
            <div className='title page-title'>Create Agent</div>
            <hr className="hr"/> 
            <div className='div-body'>
                <div className='div-1'>
                    {/* <AgentProfileForm></AgentProfileForm>
                    <div className='profile-img'>Profile Picture</div> */}
                    <CreateAgentForm></CreateAgentForm>
                </div>
            </div>
        </div>
    )
  }
