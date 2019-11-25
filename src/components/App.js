import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
 
  fetchPets = () => {
    let url = '/api/pets'
    this.state.filters.type === 'all' ? url : url = `/api/pets?type=${this.state.filters.type}`
    fetch(url)
      .then(res => res.json())
      .then(p => this.setState({pets: p}))
  }

  updateFilter = data => {
    this.setState({filters: {type: data}}) 
  }

  onAdoptPet = (petId) => {
    let pet = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p
    })
    this.setState({pets: pet})
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
