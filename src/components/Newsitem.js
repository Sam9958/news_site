import React, { Component } from 'react'
import Newscard from './Newscard';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./cssfile/Newscard.css";
import Spinner from './Spinner';
import { searchingvalue } from './Navbar';
// import "./Spinner"
// import Spinner from './Spinner';

export default class Newsitem extends Component {
  constructor() {
    super();
    
    console.log("constructor");
    this.state = {
      articles: [],
      page: 1,
      totalarticle:0,
      
    }
  }
  // async componentDidMount() {
  //   this.setState({
  //     loading : true
  //   })
  //   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${this.state.page}&pageSize=15&category=${this.props.search}&category=${this.props.search}`)
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   this.setState({ articles: parsedata.articles,totalarticle:parsedata.totalResults })
  //   this.setState({
  //     loading : false
  //   })

  // }
  fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
     this.setState({
        page: this.state.page + 1
      });
      console.log(this.state.page);
      if(searchingvalue===''){
         
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${this.state.page}&pageSize=15&category=${this.props.search?this.props.search:"General"}`)
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({ articles: this.state.articles.concat(parsedata.articles),totalarticle:parsedata.totalResults })
      }else{
        let data = await fetch(`https://newsapi.org/v2/everything?q=${searchingvalue}&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&pageSize=30`)
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({ articles: this.state.articles.concat(parsedata.articles),totalarticle:parsedata.totalResults })
      }
      
     
        
      
    };
  // PrechangeHandling = async() => {
  //   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${this.state.page-1}&pageSize=15&category=${this.props.search}&category=${this.props.search}`)
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   this.setState({ 
  //     articles: parsedata.articles,
  //     page:this.state.page-1
  //   }) 
  // }
  // NextChangeHandling = async() => {
    
  //   if(this.state.page+1 > Math.ceil(this.state.totalarticle/15)){

  //   }else{
  //   let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${this.state.page+1}&pageSize=15&category=${this.props.search}&category=${this.props.search}`)
  //   let parsedata = await data.json();
  //   console.log(parsedata);
  //   this.setState({ 
  //     articles: parsedata.articles,
  //     page:this.state.page+1
  //    })
  // }
  // }
  render() {
    let {search} = this.props;
    console.log({search});
    console.log({searchingvalue});
    // console.log({searchvalue});
    return (
      <>
        <h1 className='headlines'><marquee>Top Headlines all Across the world</marquee></h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spinner/>}
        >
        <div className="newscards_in_app">
          {this.state.articles.map((element) => {
            return <Newscard key={element.id} url={element.url} title={element.title} discription={element.description} image_url={element.urlToImage ? element.urlToImage : "https://s.abcnews.com/images/Technology/WireAP_db8050f94ec14cd09087dd38c5c20434_16x9_992.jpg"} time={element.publishedAt} />
          })}
        </div>
        {/* <div className="btn_box">
          <button disabled={this.state.page<=1} className="previous" onClick={this.PrechangeHandling} >  Previous</button>
          <button disabled={this.state.page +1> Math.ceil(this.state.totalarticle/15)} className="Next" onClick={this.NextChangeHandling} >Next  </button>
        </div> */}
        </InfiniteScroll>
      </>
    )
  }
}
