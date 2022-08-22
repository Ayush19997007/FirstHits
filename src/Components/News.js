import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Spinner from './Spinner';

export default class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[],
            page:1,
            loading:true
          }
          console.log("current page is ", this.state.page);   

    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=722a2fb074284e2abb07b3da650e8fdf&page=1&pageSize=5`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
    }

    handleNextPage=async()=>{
        console.log("next page clicked");
     
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=722a2fb074284e2abb07b3da650e8fdf&page=${this.state.page+1}&pageSize=5`;
        this.setState({
            loading:true
           })
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1,
            loading:false
        })
        console.log("current page is next ", this.state.page);
    }

    handlePreviousPage=async()=>{
        console.log("previous page clicked");
      
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=722a2fb074284e2abb07b3da650e8fdf&page=${this.state.page-1}&pageSize=5`;
        this.setState({
            loading:true
           })
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1,
            loading:false
        })
        console.log("current page is prev ", this.state.page);
    }
  render() {
      let noImage="https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
    return (
              <div className="container my-3"> {/* shifts all cards 3spaces from left*/}
          {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                  <NewsCard imageURL={element.urlToImage?element.urlToImage:noImage}
                   title={element.title?element.title.slice(0,40):""} 
                   description={element.description?element.description.slice(0,70):""}
                   link={element.url}
                   /> {/*slice returns characters from [initial,final) */}
                  </div>
              })}
              </div>

              <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousPage}>Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/5)} type="button" class="btn btn-dark" onClick={this.handleNextPage}>Next</button>
              </div>

             </div>
    )
  }
}
