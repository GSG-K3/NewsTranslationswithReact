import React, { Component } from 'react';
import '../App.css';
import NewsList from './NewsList';

class GetNews extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      value: '',
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let { value } = event.target;

    this.setState({ value: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let countryCode = this.state.value;
    let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=626633f093cd40b7bda4ca1a94cc2b89`;
    fetch(url)
      .then(response => {
        this.setState({ loading: true });
        return response.json();
      })
      .then(data => {
        this.setState({ loading: false, data: data.articles });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option> ---Select one of the countries--- </option>
              <option value="au">Australia</option>
              <option value="ca">Canada</option>
              <option value="cn">China</option>
              <option value="eg">Egypt</option>
              <option value="fr">France</option>
              <option value="de">Germany</option>
              <option value="gr">Greece</option>
              <option value="in">India</option>
              <option value="it">Italy</option>
              <option value="jp">Japan</option>
              <option value="mx">Mexico</option>
              <option value="ma">Morocco</option>
              <option value="ru">Russia</option>
              <option value="sa">Saudi Arabia</option>
              <option value="kr">South Korea</option>
              <option value="tr">Turkey</option>
              <option value="ae">UAE</option>
              <option value="gb">United Kingdom</option>
              <option value="us">United States</option>
            </select>
          </label>
          <button>Search</button>
        </form>
        <div>
          {this.state.loading
            ? 'loading the data...'
            : this.state.data.map((item, index) => {
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

export default GetNews;
