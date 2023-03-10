import React from 'react'
import user from '../images/user.jpg'
import {Link} from 'react-router-dom'

const ContactDetail = (props) => {
  return (

    <div className="main">
        <div className="ui card centered">
            <div className="ui image">
                <img src={user} alt="User image" />
            </div>
            <div className="content"> 
                <div className="header">
                    Dipesh
                </div>
                <div className="description">
                    cs.dipesh@gmail
                </div>
            </div>
        </div>
    </div>


  )
}

export default ContactDetail