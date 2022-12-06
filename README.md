API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=6a680670da9fa87f36e5ef8c78fbb74b'
API_IMG = 'https://image.tmdb.org/t/p/w500/'
API_SEARCH = 'https://api.themoviedb.org/3/search/company?api_key=6a680670da9fa87f36e5ef8c78fbb74b&page=1'


 {movies.map((movieReq)=><Card key={movieReq.id} {...movieReq}/>)}