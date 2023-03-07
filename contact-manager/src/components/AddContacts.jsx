import React from 'react'

const AddContacts = () => {
  return (
    <div className="ui main">
      <h2>Add Contacts </h2>
      <form className="ui form">
        <div className="field">
          <label><h3>Name</h3></label>
          <input type="text" name="name" placeholder='Enter your Name here' />
        </div>
        <div className="field">
          <label><h3>Email</h3></label>
          <input type="text" name="name" placeholder='Enter your Email here' />
        </div>

        <button className='ui button black'>Add</button>
      </form>
    </div>
  )
}

export default AddContacts