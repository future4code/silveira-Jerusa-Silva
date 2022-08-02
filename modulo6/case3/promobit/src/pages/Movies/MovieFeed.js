import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL, IMG_API } from "../../constants/url";
import { GuideContainer, FilterGuide, GenreNavigation } from "../../assets/styles/Guide/GuideNavigation";
import { Catalog, MovieCard } from "../../assets/styles/Catalog/Catalog";
import Headers from "../../components/Header/Header";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { Footer } from "../../assets/styles/Pagination/Pagination";
import { useNavigate } from "react-router-dom";



const MovieFeed = () => {

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState();
  const [buttonCliked, setButtonClicked] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    
    getMovies(page);
    getGenres();
    
  }, [page]);

  const getGenres = () => {
    axios
      .get(`${BASE_URL}genre/movie/list${API_KEY}&language=pt-BR`)
      .then((response) => {
        setGenres(response.data.genres);
        setActiveGenre(response.data.genres)
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  console.log(activeGenre)

  const getMovies = (page) => {
    axios.get(`${BASE_URL}movie/popular${API_KEY}&language=pt-BR&page=${page}`)
    .then((response) => {
      setMovies(response.data.results);
    })
    .catch((error) => {
      alert(error.message)
    })
  };

  const movieGenres = genres.map((genre) => {

    const onClickCategory = () => {
      if (buttonCliked === false) {
        setButtonClicked(true);
        setActiveGenre(genre.id);

      } else if (buttonCliked === true) {
        setButtonClicked(false);
        setActiveGenre("");
      }
    };

    return <button key={genre.id} onClick={() => onClickCategory()}>{genre.name}</button>
  });
  
  const movieCatalog = movies.filter((movie) => {
    if (activeGenre > 0) {
      return movie.genre_ids.includes(activeGenre)
    } else {
      return movie
    }
  }).map((movie) => {
        
        const splitDate = movie.release_date.split("-", 3);
    
        const year = splitDate[0];
    
        const mounth = splitDate[1];
    
        const day = splitDate[2];
    return (
        <MovieCard key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={IMG_API + movie.poster_path} alt={movie.title}/>
            <p>{movie.vote_average}</p>
            <h3>{movie.title}</h3>
            <h4><strong>Lançamento:</strong> {day}/{mounth}/{year}</h4>
        </MovieCard>
        )
      });

  return (
    <div>
      <Headers/>
      <main>
        <GuideContainer>
          <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já</h1>
          <FilterGuide>
            <h2>Filtre por:</h2>
            <GenreNavigation>
              {movieGenres}
            </GenreNavigation>
          </FilterGuide>
        </GuideContainer>
        <Catalog>
          {movieCatalog}
        </Catalog>
      </main>
      <Footer>
        <CustomPagination setPage={setPage}/>
      </Footer>
    </div>
  )
};

export default MovieFeed;