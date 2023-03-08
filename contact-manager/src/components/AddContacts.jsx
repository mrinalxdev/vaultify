import React from 'react'

const AddContacts = () => {
  state = {
    name : "",
    email : "",
  }
  return (
    <div className="ui main">
      <h2>Add Contacts </h2>
      <form className="ui form">
        <div className="field">
          <label><h3>Name</h3></label>
          <input 
            type="text" 
            name="name" 
            value = {this.state.name}
            placeholder='Enter your Name here' 
            onChange = {(e) => this.setState({name : e.target.value})}
          />
        </div>
        <div className="field">
          <label><h3>Email</h3></label>
          <input 
            type="text" 
            name="name" 
            value={this.state.email}
            placeholder='Enter your Email here'
            onChange = {(e)=> this.setState({ email : e.target.value})}

          />
        </div>

        <button className='ui button black'>Add</button>
      </form>
    </div>
  )
}

export default AddContacts