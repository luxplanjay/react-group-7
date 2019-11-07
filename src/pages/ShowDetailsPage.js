import React, { Component } from 'react';
import tvApiService from '../services/tv-api-service';

export default class ShowDetailsPage extends Component {
  state = { show: null };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const showId = this.props.match.params.showId;

    tvApiService.fetchShowDetails(showId).then(show => {
      this.setState({ show });
    });
  };

  onGoBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }

    this.props.history.push('/shows');
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.onGoBack}>
          Back to shows
        </button>

        <h2>Show Details</h2>

        {this.state.show && (
          <>
            <img
              src={this.state.show.image.original}
              alt="poster"
              width="320"
            />
            <h3>{this.state.show.name}</h3>
            <p>Show id: ${this.props.match.params.showId}</p>
          </>
        )}
      </div>
    );
  }
}
