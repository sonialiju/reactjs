//Main Component defining the layout of Application
import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import PersonInfo from './Components/PersonInfo';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                            <Header/>

                    <div className="row">
                        <div className="col-xs-3">
                            <Sidebar/>
                        </div>
                        <div className="col-xs-9">
                            <Switch>
                                <Route path='/personinfo/:number' component={PersonInfo}/>
                                <Route path='/' component={Home}/>

                            </Switch>
                        </div>
                    </div>

                    <div className="row App-footer">
                        <div className="col-xs-10 ">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
