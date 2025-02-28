import React from "react";

const Newsitem = (props) => {
 

    const { title, description, imgurl, newurl, mode, date ,author} = props;
   
    const style = {
      color: mode === "dark" ? "#fff" : "#001121",
      backgroundColor: mode === "dark" ? "#001121" : "#fff",
      border: mode === "dark" ? "1px solid white" : "1px solid #001121",
      width: "20rem",
      height: "430px",
      margin: "20px",
    };
    const imgstyle = {
      color: mode === "dark" ? "#fff" : "#001121",
      backgroundColor: mode === "dark" ? "#001121" : "#fff",
      width: "19.9rem",
      height: "200px",
    };
    const datestyle = {
      color: mode === "dark" ? "#fff" : "#001121",
    }
    return (
      <div>
        <div className="card" style={style}>
          <img
            src={imgurl}
            className="card-img-top"
            alt="..."
            style={imgstyle}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read more
            </a>
            <p className="card-text mt-1">
              <small style={datestyle} className="date">- {!author ? "unknown":author} on {date}</small>
            </p>
         
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
