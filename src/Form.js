import React, {Component} from 'react'

class Form extends Component {
    initialisestate = {
        name : '',
        age : ''
    }

    state = this.initialisestate
    handleChange = event => {
        const n = event.target.name
        const v = event.target.value

        this.setState({[n] : v,})
    }
    submitForm = ()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialisestate)
    }


    render(){
        const {name , age} = this.state
        return (
            
            <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
            <label htmlFor="age">Job</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={this.handleChange} />
            <input type="button" value="Submit" onClick={this.submitForm} />
          </form>
        )
    }
}
    export default Form
