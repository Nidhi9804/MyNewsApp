import './App.css';
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";




export default class App extends Component {
apikey= process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
         
          <Routes>
            <Route exact path="/" element={<News  pageSize={5} category="general"/>} ></Route>
            <Route exact path="/general" element={<News  key="general" apikey={this.apikey} pageSize={5} category="general"/>}></Route>
            <Route exact path="/science" element={<News key="science" apikey={this.apikey} pageSize={5} category="science"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apikey={this.apikey} pageSize={5} category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News key="health " apikey={this.apikey} pageSize={5} category="health"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" apikey={this.apikey}pageSize={5} category="sports"/>}></Route>
            <Route exact path="/business" element={<News key="business"apikey={this.apikey} pageSize={5} category="business"/>}></Route>
            <Route exact path="/technology" element={<News key="technology"apikey={this.apikey} pageSize={5} category="technology"/>}></Route>
            
            

            <Route path="/"   element={<News/>} ></Route>
           
          </Routes>


        </Router>

      </div>
    )
  }
}