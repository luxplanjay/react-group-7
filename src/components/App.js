/* eslint-disable */

import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as articleAPI from '../services/article-api';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import SearchBar from './SearchBar';

/*
 * Функция-помошник, которая возвращает массив объектов
 * такого формата, который ожидает компонент
 */
const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    pageNumber: 0,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchArticles();
    }
  }

  onSearch = query => {
    this.setState({ query, articles: [], pageNumber: 0 });
  };

  fetchArticles = () => {
    const { query, pageNumber } = this.state;

    this.setState({ isLoading: true });

    articleAPI
      .fetchArticles(query, pageNumber)
      .then(articles => {
        this.setState(state => ({
          articles: [...state.articles, ...mapper(articles)],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div className="App">
        <SearchBar onSearch={this.onSearch} />

        {error && <ErrorNotification message={error.message} />}

        {isLoading && <Loader />}

        {articles.length > 0 && <ArticleList articles={articles} />}

        {articles.length > 0 && (
          <button type="button" onClick={this.fetchArticles}>
            Load more articles
          </button>
        )}
      </div>
    );
  }
}

export default App;
