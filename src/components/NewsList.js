import React, { Component } from 'react';
import '../App.css';
import Translate from './Translate';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let url =
      'https://translate.yandex.net/api/v1.5/tr.json/translate' +
      '?key=trnsl.1.1.20200331T155151Z.e1ad711262d15b7a.79c7c4a75b529e046bc13216389ab46b55378075' +
      '&text=' +
      this.props.title +
      '&text=' +
      this.props.description +
      '&lang=ar';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ title: data.text[0], description: data.text[1] });
      })
      .catch(err => {
        throw new Error(err);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="newsBox">
        <img src={this.props.image} alt="news pic" />
        <div className="newsBox_info">
          <h5>{this.state.title}</h5>
          <br />
          <p>{this.state.description}</p>
          <br />
          <div className="readLink">
            <a href={this.props.url}> read more..</a>
          </div>
          <p>Published at : {this.props.date}</p>
          <Translate handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default NewsList;
