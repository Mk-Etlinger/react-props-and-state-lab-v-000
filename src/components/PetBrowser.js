import React from 'react';
import Pet from './Pet';



class PetBrowser extends React.Component {

  

  render() {
    const pets = this.props.pets
    return (
      <div className="ui cards">
        {pets.map((pet) =>
        <Pet pet={pet}
             isAdopted={this.props.adoptedPets.includes(pet.id)} 
             onAdoptPet={this.props.onAdoptPet}/>
      )}
      </div>
    );
  }
}

export default PetBrowser;