import React from 'react'

class Filters extends React.Component {

  onSelect = (event) => {
    let selection = event.target.value 
    this.props.onChangeType(selection)
  }

  clickFind = (event) => {
    this.props.onFindPetsClick(event)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.onSelect}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.clickFind}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
