/* eslint-disable */
import React from 'react';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ id, title, link }) => (
      <li key={id}>
        <a href={link}>{title}</a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
