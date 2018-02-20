//Component for showing all details of a person
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class PersonInfo extends Component {

    constructor(){
        super();
        this.state={
            singlepersons:{},
            // personsapi:[]
        }
    }

    //Api call for Fetching details of given person
    componentDidMount(){
        //debugger;
        let id = this.props.match.params.number;
        let uri = `https://jsonplaceholder.typicode.com/users/${id}`;
        $.ajax({
            url:uri,
            dataType:'json',
            cache:false,
            success:function(data){
                this.setState({singlepersons:data}, function(){
                    console.log(this.state);
                });
            }.bind(this),
            error:function(xhr, status, err){
                console.log(err);
            }
        });
    }

    //Rendering the results
    render() {
        return (
            <div>
                <h3>You are Viewing:</h3>
                <b>Name:</b>{this.state.singlepersons.name}<br/>
                <b>Username:</b>{this.state.singlepersons.username}<br/>
                <b>Email:</b>{this.state.singlepersons.email}<br/>
                <b>Phone:</b>{this.state.singlepersons.phone}<br/>
                <Link to='/'>Back</Link>
            </div>


        );


    }

}


export default PersonInfo;