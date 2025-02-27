import React from "react";
import "../css/Skeleton.css"; 

const NewsitemSkeleton = ({ mode }) => {
  const style = {
    color: mode === "dark" ? "#fff" : "#001121",
    backgroundColor: mode === "dark" ? "#001121" : "#fff",
    border: mode === "dark" ? "1px solid white" : "1px solid #001121",
    width: "18rem",
    height: "430px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  };

  const imgStyle = {
    width: "17.8rem",
    height: "200px",
    backgroundColor: mode === "dark" ? "#002233" : "#ddd",
  };

  return (
    <div className="skeleton-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="card" style={style}>
          <div className="skeleton skeleton-img" style={imgStyle}></div>
          <div className="card-body">
            <div className="skeleton skeleton-text title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-btn"></div>
            <div className="skeleton skeleton-text small"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsitemSkeleton;
