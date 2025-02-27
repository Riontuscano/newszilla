import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewsitemSkeleton = ({ mode, count = 6 }) => {
  const style = {
    color: mode === "dark" ? "#fff" : "#001121",
    backgroundColor: mode === "dark" ? "#001121" : "#fff",
    border: mode === "dark" ? "1px solid white" : "1px solid #001121",
    width: "20em",
    height: "430px",
    margin: "20px",
  };

  const imgstyle = {
    width: "19.9rem",
    height: "200px",
  };

  const skeletonBaseColor = mode === "dark" ? "#0d2235" : "#e0e0e0";
  const skeletonHighlightColor = mode === "dark" ? "#1a3b5a" : "#f5f5f5";


  const renderSkeleton = () => {
    return (
      <div className="card" style={style}>
        <Skeleton 
          style={imgstyle} 
          baseColor={skeletonBaseColor}
          highlightColor={skeletonHighlightColor}
        />
        <div className="card-body">
          <h5 className="card-title">
            <Skeleton 
              width="90%" 
              baseColor={skeletonBaseColor}
              highlightColor={skeletonHighlightColor}
            />
          </h5>
          <p className="card-text">
            <Skeleton 
              count={3} 
              baseColor={skeletonBaseColor}
              highlightColor={skeletonHighlightColor}
            />
          </p>
          <Skeleton 
            width={85} 
            height={31} 
            baseColor={skeletonBaseColor}
            highlightColor={skeletonHighlightColor}
          />
          <p className="card-text mt-1">
            <Skeleton 
              width="70%" 
              baseColor={skeletonBaseColor}
              highlightColor={skeletonHighlightColor}
            />
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="row">
      {Array(count).fill().map((_, index) => (
        <div className="col md-4" key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default NewsitemSkeleton;