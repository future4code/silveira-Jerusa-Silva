import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details, HeadInfo, InfoCard, MovieGenre, Overview, Poster, MovieInfos } from "../../assets/styles/MovieInfo/MovieInfo";
import { getMovieDetail } from "../../services/getMovieById";
import { IMG_API } from "../../constants/url";

const MovieInformation = () => {
    
    const [movieInfo, setMovieInfo] = useState([]);

    let params = useParams();

    useEffect(() => {
        const getApiDetail = async () => {
          setMovieInfo(await getMovieDetail(params.id));
        };
    
        getApiDetail();
      }, [params.id]);

      const information = movieInfo.map((item) => {
        const splitDate = item.release_date.split("-", 3);
    
        const year = splitDate[0];
    
        const mounth = splitDate[1];
    
        const day = splitDate[2];
    
        const genres = item.genres.map((gen) => {
          return <p key={gen.id}>{gen.name}</p>;
        });
    
        return (
          <InfoCard key={item.id}>
            <Poster>
              <img src={IMG_API + item.poster_path} alt="" />
            </Poster>
            <Details>
              <HeadInfo>
                <h1>{item.title} ({year})</h1>
                <MovieGenre>
                  <p>{day}/{mounth}/{year} (BR){" "}</p>
                  {genres}
                </MovieGenre>
                <p><span>{item.vote_average}</span> Avaliação dos usuários</p>
              </HeadInfo>
              <Overview>
                <h2>Sinopse</h2>
                <p>{item.overview}</p>
              </Overview>
              <div></div>
            </Details>
          </InfoCard>
        );
      });

    return (
        <MovieInfos>
            {information}
        </MovieInfos>
    )
};

export default MovieInformation;