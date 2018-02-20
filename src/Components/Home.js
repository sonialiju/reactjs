/**
 * Home component showing the home page
 */
import React, { Component } from 'react';
import Persons from './Persons';
import AddPerson from './AddPerson';
import $ from 'jquery';


class Home extends Component {
    //Constructor initializing the current state of persons
    constructor(){
        super();
        this.state={
            persons:[],
        }
    }


    /**
     * Function for fetching listing all users
     */
    getPersons(){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({persons:data}, function(){
                    console.log(this.state);
                });
            }.bind(this),
            error:function(xhr, status, err){
                console.log(err);
            }
        });

    }

    /**
     *     Function for deleting a particular user
     *     @param id
     */
    deletePerson(id){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users/'+id,
            dataType:'json',
            type:'DELETE',
            cache:false,
            success:function(data){
                //this.setState({persons:data}, function(){

               // });
            },
            error:function(xhr, status, err){
                console.log(err);
            }
        });

    }

    /**
     * Function for creating a new user
     * @param person
     */
    addPerson(person){
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            dataType:'json',
            type:'POST',
            data : person,
            cache:false,
            success:function(data){
                     this.state.persons.push(data);
                     console.log(this.state.persons);
                     this.setState({persons:this.state.persons});

            }.bind(this),
            error:function(xhr, status, err){
                console.log(err);
            }
        });

    }

    //Functions to call on component initialization
    componentWillMount(){
        this.getPersons();

    }
    ComponentDidMount(){
        this.getPersons();
    }

    //Just aclling the addPerson function
    handleAddPerson(person){
       // console.log(person);
        this.addPerson(person);
    }

    //Calling the deletePerson function
    handleDelPerson(id){
        var ask = window.confirm("Are you sure you want to delete this user?");
        if (ask) {
            console.log(id);
            let persons = this.state.persons;
            let index = persons.findIndex(x => x.id === id);
            persons.splice(index, 1);
            this.setState({persons: persons});
            this.deletePerson(id);
        }
    }

    //Rendering for display
    render() {
        return (
            <div className="Home">
                <AddPerson addPerson={this.handleAddPerson.bind(this)}/><br/>
                    <Persons persons={this.state.persons} onDelete={this.handleDelPerson.bind(this)}/>
            </div>
        );
    }

}

export default Home;
