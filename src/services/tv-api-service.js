const fetchShowDetails = showId => {
  return fetch(`http://api.tvmaze.com/shows/${showId}`).then(res => res.json());
};

const fetchShowWithQuery = searchQuery => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
    .then(res => res.json())
    .then(data => {
      const shows = data.map(entry => entry.show);

      return shows;
    });
};

export default { fetchShowDetails, fetchShowWithQuery };
