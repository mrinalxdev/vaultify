import React from 'react'

class AddContacts extends React.Component {
  state = {
    name : "",
    email : "",
  }

  add = (e) => {
    e.preventDefault()

    if(this.state.name === "" || this.state.email === ""){
      alert("Please Fill up the Places")
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({name : "", email: ""})
    console.log(this.state)
  }

  render(){
    return(
      <div className="ui main">
      <h2>Add Contacts </h2>
      <form className="ui form" onSubmit={this.add}>
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
}

export default AddContacts