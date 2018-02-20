//Component for displaying all persons
import React, { Component } from 'react';
import SinglePerson from './SinglePerson';

class Persons extends Component {
    deletePerson(id){
        this.props.onDelete(id);
    }
    render() {
        let allPersons;
        //Mapping the person details from parent component
        if(this.props.persons){
            allPersons = this.props.persons.map(person=>{
                console.log(person);
                //passing the details to SinglePerson Component
                return (
                    <SinglePerson onDelete={this.deletePerson.bind(this)} key={person.name} person={person} />

                );
            });
        }
        //Listing all Persons
        return (
            <div className="Persons">
                <ul className="list-group">
                {allPersons}
                </ul>
            </div>
        );
    }
}

export default Persons;