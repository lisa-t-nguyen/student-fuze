import React from 'react';

export default class SearchStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ' '
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/students', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          search: data
        });
      });
  }
}
