import React from 'react'
import AgentProfileForm from '../Components/AgentProfileForm'

export default function CreateAgent() {
    return (
        <div className='body-div agent-profile-body'>
            <div className='page-title'>Create Agent</div>
            <hr />
            <div className='div-1'>
                <AgentProfileForm></AgentProfileForm>
                <div className='profile-img'>Profile Picture</div>
            </div>
        </div>
    )
  }
