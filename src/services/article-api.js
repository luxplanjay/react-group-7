/* eslint-disable */

export const fetchArticles = (query = '', pageNumber = 0) => {
  return fetch(
    `http://hn.algolia.com/api/v1/search?query=${query}&page=${pageNumber}`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
