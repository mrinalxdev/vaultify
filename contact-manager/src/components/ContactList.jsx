import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {


  const deleteContactHandler = (id) => {
    props.getContactId(id)
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    ) 
  })

  return (
    <>
    <div className="main">
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <h2>ContactList</h2>

        <Link to="/add">
          <button className="ui button black right">Add Contact</button>
        </Link>
      </div>
      <div className='ui celled list'>
        {renderContactList}
      </div>
    </div>

    </>
  )
}


export default ContactList