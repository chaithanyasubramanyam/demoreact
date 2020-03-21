import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {characters : [
      
    ],
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }


  removecharacter = index => {

    this.setState({
      characters : this.state.characters.filter((character,i) =>{
        return i !== index
      }
      )
    })
  }


  render () {

    return (
      <div className="container">
        <Table characterData={this.state.characters} removecharacter={this.removecharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    
    )}
}

export default App