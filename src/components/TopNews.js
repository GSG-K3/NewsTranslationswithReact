import React, { Component } from 'react';
import NewsList from './NewsList';

class TopNews extends Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      info: []
    };
  }

  componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' +
      '3e7d4184f8d442b89a3415bd1fe8cbc4';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isloading: false,
          info: data.articles
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div>
        <nav className="menu">
          <ul>
            <li>
              <a href="/worldnews">World News </a>
            </li>
            <li>
              <a href="/">Top News</a>
            </li>
          </ul>
        </nav>
        <div>
          {this.state.isloading
            ? 'loading the data...'
            : this.state.info.map((item, index) => {
                return (
                  <NewsList
                    key={index.toString()}
                    title={item.title}
                    description={item.description}
                    image={item.urlToImage}
                    date={item.publishedAt}
                    url={item.url}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

export default TopNews;
