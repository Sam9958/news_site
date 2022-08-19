// import Newscard from './components/Newscard';
import Navbar, { searchingvalue } from './components/Navbar';
// import { searchingvalue } from './components/Navbar';s
// import Newsitem2 from './components/Newsitem2';
// import './components/cssfile/Newscard.css';
// import './components/cssfile/navbar.css';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { Component } from 'react'
import Newsitem from './components/Newsitem';

export default class App extends Component {
  
  render() {
    return (
      <>
    <Router>
    <Navbar/>
    <Routes>
    {/* <Route exact path="/" element={<Newsitem2 key="General" search2="General"/>}/> */}
    {/* <Route exact path={searchingvalue} element={<Newsitem/>}/> */}
    <Route exact path="/"  element={<Newsitem key="/" search="General"/>}/>
    <Route exact path="/sports"  element={<Newsitem key="sports" search="Sports"/>}/>
    <Route exact path="/business" element={<Newsitem key="business"  search="Business"/>}/>
    <Route exact path="/technology" element={<Newsitem key="technology" search="Technology"/>}/>
    <Route exact path="/science" element={<Newsitem key="science" search="Science"/>}/>
    <Route exact path="/health" element={<Newsitem key="health" search="Health"/>}/>
    <Route exact path="/general" element={<Newsitem  key="general" search="General"/>}/>
    <Route exact path="/entertainment" element={<Newsitem key="entertainment" search="Entertainment"/>}/>
    </Routes>
    </Router>
    </>
    )
  }
}



