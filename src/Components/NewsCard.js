import React, { Component } from 'react'

export class NewsCard extends Component {
  render() {
    return (
        <div className="my-3">
        <div className="card" style={{width: "20rem"}}>
            
        <img src={this.props.imageURL} className="card-img-top"  style={{height: "12rem", width:"20rem"}} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description} </p>
          <a href={this.props.link} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsCard