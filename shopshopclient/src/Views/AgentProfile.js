import React from 'react'
import AgentProfileForm from '../Components/AgentProfileForm'

export default function AgentProfile() {
  return (
      <div className='body-div agent-profile-body'>
          <div className='page-title'>Agent Profile</div>
          <hr />
          <div className='div-1'>
            <AgentProfileForm />
            <div className='profile-img'>Profile Picture</div>
          </div>
      </div>
  )
}
