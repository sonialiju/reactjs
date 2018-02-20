/**
 * The component for Adding persons
 */
import React, { Component } from 'react';


class Addperson extends Component {
    //Declaring state for storing the new person object
    constructor(){
        super();
        this.state = {
            newPerson:{},
        }

    }

    handleSubmit(e){
        //Validation checks for name, username and email fields
        if(!this.refs.name.value.match(/^[a-zA-Z]+$/)){
            alert("Name should contain only alpabets");

        }else if(this.refs.username.value === ""){
            alert("Please enter username");

        }else if(!this.refs.email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
            alert("email format is not correct");
        }else{//If there is no validation errors store the data to current state
            this.setState({newPerson:{
                id:101,
                name:this.refs.name.value,
                username:this.refs.username.value,
                email:this.refs.email.value,
            }},function(){
                // console.log(this.state);
                this.props.addPerson(this.state.newPerson);
            })
        }
        e.preventDefault();
    }

    //Rendering the Add Person form
    render() {

        return (
            <div className="Addperson">
                <h3>Add Person</h3>
                <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label  htmlFor="name">Name</label>
                        <input type="text" className="form-control" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="group">Username</label>
                        <input type="text" className="form-control" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="name">Email</label>
                        <input type="text" className="form-control" ref="email" />
                    </div>
                    <button type="submit" name="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    }
}

export default Addperson;
