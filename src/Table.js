import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>age</th>
        </tr>
      </thead>
    )
  }
  const TableBody = (props) => {
    const rows = props.characterData.map((row,index) => {
      return (
        <tr key = {index}>
          <td>{row.name}</td>
          <td>{row.age}</td>
          <td>
            <button onClick = {()=> props.removecharacter(index)}>delete</button>
          </td>
        </tr>
      )
    }

    )
    return (
        <tbody>{rows}</tbody>
    )
  }

class Table extends Component {
    render() {
      const Data = this.props.characterData 
      const removeData = this.props.removecharacter
      return (
      <table>
        <TableHeader/>
        <TableBody characterData = {Data} removecharacter = {removeData}/>
      </table>
      )    
    }
  }
  
  export default Table