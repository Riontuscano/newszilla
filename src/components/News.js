import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import "../css/navbar.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ category, apikey, pageSize, setProgress, mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    document.title = `NewsZilla - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    fetchNews(); // eslint-disable-next-line 
  }, []);

  const fetchNews = async () => {
    if (loading) return;
    setProgress(5);
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}&pagesize=${pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    setProgress(30);
    const parsedData = await data.json();
    setProgress(70);
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  const fetchMoreData = async () => {
    const newPage = page + 1;
    setPage(newPage);
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}&page=${newPage}`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
    setLoading(false);
  };

  const style = {
    color: mode === "dark" ? "#fff" : "#001121",
    backgroundColor: mode === "dark" ? "#001121" : "#fff",
  };
  const styleh = {
    color: mode === "dark" ? "#fff" : "#001121",
    backgroundColor: mode === "dark" ? "#001121" : "#fff",
  };

  return (
    <div className={`container my-3 bg-${mode === "dark" ? "#001121" : "#fff"}`}>
      <h2 className="top-heading text-center" style={styleh} >
        Today's News - Know all about Today's Top {`${category.charAt(0).toUpperCase() + category.slice(1)}`} Topics
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className="row" style={style}>
          {articles.length > 0 ? (
            articles.map((ele) => {
              if (ele.title === "[Removed]") {
                return null;
              }
              return (
                <div className="col md-4" style={style} key={ele.url}>
                  <Newsitem
                    title={
                      ele.title
                        ? ele.title.length > 35
                          ? `${ele.title.slice(0, 35)}...`
                          : ele.title
                        : " "
                    }
                    description={
                      ele.description
                        ? ele.description.length > 90
                          ? `${ele.description.slice(0, 90)}....`
                          : ele.description
                        : " "
                    }
                    imgurl={
                      ele.urlToImage == null
                        ? "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                        : ele.urlToImage
                    }
                    date={ele.publishedAt.slice(0, 10)}
                    author={ele.author}
                    newurl={ele.url}
                    mode={mode}
                  />
                </div>
              );
            })
          ) : !loading && (
            <div className="text-center" style={style}>
              <h3>No news to display.</h3>
            </div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
