import React from 'react'
import user from '../images/user.png'
import {Link} from 'react-router-dom'

const ContactCard = (props) => {

  const {id, name, email } = props.contact

  return (
    <div className="item" style={{display:"flex", justifyContent:"space-between"}}>
      <div className="content">
      <img className='ui avatar image' src={user} alt="" />
      <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </Link>
      </div>
      <i className="trash alternate outline icon" style={{color:'red', marginTop:"7px"}}  onClick={() => props.clickHandler(id)}></i>
    </div>
  )
}

export default ContactCard