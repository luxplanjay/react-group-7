import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchArticles = () => {
      return axios
        .get('https://hn.algolia.com/api/v1/search?query=react')
        .then(({ data }) => setArticles(data.hits))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };

    fetchArticles();

    return () => {
      // сделать отмену http-запроса чтобы небыло утечки памяти при unmount
    };
  }, []);

  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

// TODO: сменить раут пока не пришел http-ответ чтобы была утечка памяти

// export default class News extends Component {
//   state = {
//     articles: [],
//   };

// componentDidMount() {
//   axios
//     .get('https://hn.algolia.com/api/v1/search?query=react')
//     .then(({ data }) => this.setState({ articles: data.hits }))
//     .catch(error => {
//       console.log(error);
//     });
// }

//   render() {
//     return (
//       <ul>
//         {this.state.articles.map(({ objectID, title, url }) => (
//           <li key={objectID}>
//             <a href={url} target="_blank" rel="noopener noreferrer">
//               {title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
