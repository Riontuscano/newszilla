import React, { Component } from "react";
import Newsitem from "./Newsitem";
import '../css/navbar.css';
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      btn: false,
      totalResult: 0
    };
    document.title = `NewsZilla - ${(this.props.category).charAt(0).toUpperCase() + this.props.category.slice(1)} `
  }

  pageMain = async () => {
    this.props.setProgress(5);
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles, totalResult: parsedData.totalResults, loading: false });
    this.props.setProgress(100);
  }

  handlenext = () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pageSize}&page=${this.state.page + 1}`;
      this.setState({ loading: true });
      this.pageMain(url);
      this.setState({ page: this.state.page + 1 });
    }
  };

  handleprev = () => {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pageSize}&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    this.pageMain(url);
    this.setState({ page: this.state.page - 1 });
  };

  componentDidMount() {
  
    this.pageMain();
 

  }

  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResult: parsedData.totalResults, loading: false });
  };
  render() {
    const { mode } = this.props;
    let style = {
      color: mode === 'dark' ? '#fff' : '#001121',
      backgroundColor: mode === 'dark' ? '#001121' : "#fff"
    };

    return (
      <div className={`container my-3 bg-${mode === 'dark' ? '#001121' : '#fff'}`}>
        <h2 className="top-heading m-4 text-center" style={style}>
          Today's News - Know all about Today's Top {`${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`} Topics
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner/>}
        >
        <div className="row" style={style}>
          { this.state.articles.length > 0 ? (
            this.state.articles.map((ele) => {
              if (ele.title === "[Removed]") {
                return null;
              }
              return (
                <div className="col md-4 " style={style} key={ele.url}>
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
                    date={ele.publishedAt.slice(0,10)}
                    author={ele.author}
                    newurl={ele.url}
                    mode={mode}
                  />
                </div>
                
              );
              
            })
          ) : !this.state.loading && (
            <div className="text-center" style={style}>
              <h3>No news to display.</h3>
            </div>
          )}
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between" style={style}>
          <button
            disabled={this.state.page <= 1}
            className="btn btn-outline-dark"
            onClick={this.handleprev}
            style={style}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)}
            className="btn btn-outline-dark"
            style={style}
            onClick={this.handlenext}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
