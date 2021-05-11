import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Login from './components/login'
import Home from './components/home'
import Add from './components/add'
import Edit from './components/edit'




const App = () =>{
    return(
        <Router className="App__container">
            <Switch>
                 <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/add">
                    <Add/>
                </Route>
                <Route path="/edit/:id">
                    <Edit/>
                </Route>
          
            </Switch>            
        </Router>
    )
};

ReactDOM.render(<App/>, document.getElementById('app'));