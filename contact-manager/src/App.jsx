import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactList from './components/ContactList'
import {v4 as uuidV4} from "uuid"


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

        <Route path='/add' element = {
          <AddContacts addContactHandler={addContactHandler}/>
        } />

        <Route path='/' element={
          <ContactList contacts={contacts} getContactId = {removeContactHnadler}/>
        } />

        </Routes> 
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
