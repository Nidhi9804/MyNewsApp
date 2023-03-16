import React, { Component } from 'react'
import NewsItem from './NewsItem'

import PropTypes from 'prop-types'

export default class News extends Component {

  articles = [
    

  ]

  static defaultProps = {
    country:'in',
    pageSize:10,
    category:'general'

  }

  static propTypes = {
    country: PropTypes.string,  
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cff58869a7341818d965f53839dad2a&1pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
this.setState({loading : true});
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults , loading:false })

  }

  previousHandler = async () => {
    console.log('p');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cff58869a7341818d965f53839dad2a&page=${this.state.page-1 }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({loading : true});
    

    let parsedData = await data.json()

    console.log(parsedData);  
    this.setState({  page: this.state.page - 1 , articles: parsedData.articles })
    
     
  
  }
  nextHandler = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5cff58869a7341818d965f53839dad2a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()

      console.log(parsedData);
      this.setState({   page: this.state.page + 1, articles: parsedData.articles })
      
      
    }
  }
    render() {
      return (
        <div className="container my-4  ">
          <h2 style={{ textAlign: 'center' }}> News - Top Headlines </h2>
          

          <div className="row">
            {this.state.articles && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsurl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}

          </div>
          <div className='container d-flex justify-content-between my-3' >
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.previousHandler} > Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.nextHandler} >Next </button>
          </div>
        </div>




      )
    }
  }