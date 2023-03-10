import { useState, useEffect } from 'react'
import {v4 as uuidV4} from "uuid"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'



function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id : uuidV4(), ...contact }])
  }

  const removeContactHnadler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
  }

  useEffect(() => {
    const rtvContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (rtvContacts) setContacts(rtvContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <>
    <div className="ui container">
        <Header />
        <br />
        <br />
        <br />
      
      <BrowserRouter>
        <Routes>

        <Route path='/add' exact element={<AddContacts addContactHandler={addContactHandler}/>} />

        <Route path='/' exact element={<ContactList contacts={contacts} getContactId = {removeContactHnadler}/>} />

        <Route path='/contact/:id' element={<ContactDetail />} />

        </Routes> 
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
