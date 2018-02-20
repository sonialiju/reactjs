//Component for displaying each person in the list
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SinglePerson extends Component {
    //Passing the id of person to be deleted
    deletePerson(id){
        this.props.onDelete(id);
    }
    render() {
        return (

            <li className="SinglePerson list-group-item">{this.props.person.name}
                <button type="button" className="btn btn-danger pull-right" onClick={this.deletePerson.bind(this, this.props.person.id)}>X</button>
                <Link to={'/personinfo/'+this.props.person.id} className="pull-right">View</Link>
            </li>

        );


    }



}



export default SinglePerson;
