

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTkxOTY4ZmQxYTRlOTI5MjYzMmVhYjYxMDRjNTYwNyIsIm5iZiI6MTcyMzQwOTAxMi43NTQwNDIsInN1YiI6IjY2YjkyMTU0N2RmMDM0YjljNDFhMjk5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-RKwBcspPWc_epFZ80TrUtYo_GfjiotHU-QWlc3lRTQ'
    }
  };
  

  const getData = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  getData();

  