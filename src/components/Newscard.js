import './cssfile/Newscard.css'
import React,{Component} from "react";
import "aos/dist/aos.css";
import  Aos  from 'aos';
export default class Newscard extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    Aos.init();
  }
render() {
  let {title,discription,image_url,time,url} = this.props;
    return (
      <div className="card" data-aos="fade-up"
      data-aos-duration="3000">
        <div className="image">
          <img src={image_url} alt="pic" />
        </div>
        <div className="container">
          <div className="title">
          <h4><b>{title}</b></h4><br /></div>
          <div className="decs"><p>{discription}</p></div>
          <div className="time"><p>Published Date and time : <strong>{time}</strong></p></div>
          <div className="read_more">
            <a href={url}>Read more...</a>
          </div>
        </div>
      </div>
    )
  }
}

