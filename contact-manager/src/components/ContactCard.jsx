import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {

  const {id, name, email } = props.contact

  return (
    <div className="item" style={{display:"flex", justifyContent:"space-between"}}>
      <div className="content">
      <img className='ui avatar image' src={user} alt="" />
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{color:'red', marginTop:"7px"}}></i>
    </div>
  )
}

export default ContactCard