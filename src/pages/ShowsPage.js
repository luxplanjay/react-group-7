import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import InlineShowDetails from '../components/InlineShowDetails';
import Searchbar from '../components/Searchbar';
import tvApiService from '../services/tv-api-service';

export default class ShowsPage extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');

    if (!query) {
      return;
    }

    tvApiService.fetchShowWithQuery(query).then(shows => {
      this.setState({ shows });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (prevQuery === nextQuery) {
      return;
    }

    tvApiService.fetchShowWithQuery(nextQuery).then(shows => {
      this.setState({ shows });
    });
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Shows page</h1>

        <Searchbar onSearch={this.setSearchQuery} />

        <ul>
          {this.state.shows.map(show => (
            <li key={show.id}>
              <Link to={`${match.url}/${show.id}`}>{show.name}</Link>
            </li>
          ))}
        </ul>

        {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> */}
      </div>
    );
  }
}
