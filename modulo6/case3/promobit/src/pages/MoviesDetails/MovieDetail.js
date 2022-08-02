import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../../components/Header/Header";
import { FeedButton } from "../../assets/styles/MovieInfo/MovieInfo"
import FeedLogo from "../../assets/images/feed-logo.png";
import { CastContent, CastTitle } from "../../assets/styles/MovieInfo/CastInfo";
import MovieInformation from "../../components/MovieInformation/MovieInformation";
import MovieCast from "../../components/MovieInformation/MovieCast";
import RecommendedMovie from "../../components/MovieInformation/RecommendedMovie";
import { SimilarContent, SimilarTitle } from "../../assets/styles/MovieInfo/SimilarContent";


const MovieDetail = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Headers />
        <FeedButton onClick={() => navigate("/")}>
          <img src={FeedLogo} alt="Button to go back to the feed" />
        </FeedButton>
        <main>
          <MovieInformation/>
          <CastContent>
            <CastTitle>
              <h1>Elenco original</h1>
            </CastTitle>
            <MovieCast/>
          </CastContent>
          <SimilarContent>
            <SimilarTitle>
              <h1>Recomendações</h1>
            </SimilarTitle>
            <RecommendedMovie/>
          </SimilarContent>
        </main>
    </div>
  );
};

export default MovieDetail;