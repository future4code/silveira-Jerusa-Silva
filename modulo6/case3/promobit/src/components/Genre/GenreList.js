import React, { useEffect, useState } from "react";
import { getGenreList } from "../../services/getGenreList";
import { GenreNavigation } from "../../assets/styles/Guide/GuideNavigation";

const GenreList = ({setActiveGenre, activeGenre, setFiltered, movies}) => {
    
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getApiDetail = async () => {
          setGenres(await getGenreList());
        };
    
        getApiDetail();
      }, []);
    
      const movieGenres = genres.map((genre, index) => {
    
        return <button key={index} onClick={() => {setActiveGenre(1)}}>{genre.name}</button>
      });

    return (
        <GenreNavigation>
            {movieGenres}
        </GenreNavigation>
    )
};

export default GenreList;