import { useState } from 'react'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import ContactList from './components/ContactList'


function App() {
  const [contacts, setContacts] = useState([])

  return (
    <>
    <div className="ui container">
      <Header />
      <AddContacts />

      <ContactList contacts={contacts}/>
    </div>
    </>
  )
}

export default App
