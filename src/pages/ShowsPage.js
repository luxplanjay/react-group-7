import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';
// import InlineShowDetails from '../components/InlineShowDetails';
import Searchbar from '../components/Searchbar';
import tvApiService from '../services/tv-api-service';

const getQueryPramsFromProps = props =>
  qs.parse(props.location.search.slice(1));

export default class ShowsPage extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    const queryParams = getQueryPramsFromProps(this.props);

    // Что делать если нужен обязательный параметр
    // console.log('Limit: ', queryParams.limit);

    // if (!queryParams.limit) {
    //   console.log(this.props.location.search);
    //   this.props.history.replace({
    //     ...this.props.location,
    //     search: `${this.props.location.search}&limit=10`,
    //   });
    // }

    if (!queryParams.query) {
      return;
    }

    tvApiService.fetchShowWithQuery(queryParams.query).then(shows => {
      this.setState({ shows });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryPramsFromProps(prevProps);
    const { query: nextQuery } = getQueryPramsFromProps(this.props);

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
              <Link
                to={{
                  pathname: `${match.url}/${show.id}`,
                  state: { from: this.props.location },
                }}
              >
                {show.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> */}
      </div>
    );
  }
}
