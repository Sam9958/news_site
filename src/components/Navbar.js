import React,{Component} from "react";
import "./cssfile/navbar.css"
// import Newsitem2 from "./Newsitem2"
import {
    Link
  } from "react-router-dom";
let searchingvalue = '';
 export default class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            textvalue: "",
            searchvalue:""
            }
    }
    changehandling = (event)=>{
        this.setState({
            textvalue : event.target.value 
    })
        console.log(event.target.value);
    }
    clickhandle = ()=>{
        // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${this.state.page}&pageSize=15&category=${this.state.textvalue}`)
        // let parsedata = await data.json();
        // console.log(parsedata);
        // window.location.reload();
        console.log("clickeddd");
        this.setState({
            searchvalue : this.state.textvalue
        })
        searchingvalue = this.state.textvalue;
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        // <Newsitem searchvalue={this.state.textvalue}/>
        // this.setState({ articles: this.state.articles.concat(parsedata.articles),totalarticle:parsedata.totalResults })
    }
    

    render() {
    return (
        <div className="body">
            <div className="navbar">
                <div className="logo">
                    <img src="https://cdn.dribbble.com/users/2404/screenshots/15065505/media/c3d68d663aedcc0479328838167e0333.png?compress=1&resize=640x480&vertical=top" alt="logo" />
                </div>
                <div className="item">
                    <ul>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                        <li><Link to="/">General</Link></li>
                        <li><Link to="/health">Health</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/science">Science</Link></li> 
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mid">
                <div className="line typewriter">
                    <h2>Explore the Latest News </h2>
                </div>
                <div className="search">
                    <input type="text" onChange={this.changehandling} value={this.state.textvalue}/>
                    <button onClick={this.clickhandle} >Search</button>
                   
                </div>
            </div>
            {/* <Newsitem2 key={this.state.searchvalue} search2={this.state.searchvalue}/> */}
        </div>    
    )
   }
 }
export {searchingvalue};


