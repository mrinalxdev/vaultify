import { useState } from 'react'
import Header from './components/Header'
import AddContacts from './components/AddContacts'
import ContactList from './components/ContactList'


function App() {
  const [contacts, setContacts] = useState([])

  const contacts = [
    {
      id : '1',
      "name": 'Mrinal',
      "email": 'mrinalbitsat@gmail.com',
    },
    {
      id : '2',
      "name": 'Prachi',
      "email": 'prachibitsat@gmail.com',
    }
  ]

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
