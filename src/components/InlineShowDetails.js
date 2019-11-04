import React, { Component } from 'react';
import tvApiService from '../services/tv-api-service';

export default class InlineShowDetails extends Component {
  state = { show: null };

  componentDidMount() {
    this.fetchDetails();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location === this.props.location) {
      return;
    }

    this.fetchDetails();
  }

  fetchDetails = () => {
    const showId = this.props.match.params.showId;

    tvApiService.fetchShowDetails(showId).then(show => {
      this.setState({ show });
    });
  };

  render() {
    return (
      <div>
        <h2>Show Details</h2>

        {this.state.show && (
          <>
            <img src={this.state.show.image.original} width="320" />
            <h3>{this.state.show.name}</h3>
            <p>Show id: ${this.props.match.params.showId}</p>
          </>
        )}
      </div>
    );
  }
}
