import { useState } from 'react'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import ContactList from './components/ContactList'


function App() {

  return (
    <>
    <div className="ui container">
      <Header />
      <AddContacts />

      <ContactList />
    </div>
    </>
  )
}

export default App
