import React, { Component } from "react";

export class Newsitem extends Component {

  constructor(){
   super();
  }
  render() {
    const {title,description,imgurl,newurl} = this.props
    const style = {
      width: "18rem",
      height: "430px",
      margin:"20px"
    }
    const imgstyle = {
      width: "18rem",
      height: "200px",
    }
    return (
      <div>
        <div className="card" style={style}>
          <img src={imgurl} className="card-img-top" alt="..." style={imgstyle} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <a href={newurl} target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
