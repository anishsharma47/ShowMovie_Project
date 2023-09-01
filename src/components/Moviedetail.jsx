import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

const Moviedetail = () => {
  const [loading, setloading] = useState(true);
  const [movie, setmovie] = useState([]);

  let { id } = useParams();

  const fetchMoviebyId = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2b42fd26ef114dbdda3b761976d2e52a`
    );
    setmovie(data);
    setloading(false);
  };

  useEffect(() => {
    fetchMoviebyId(id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="moviedetail">
          <div className="page1">
            <div className="moviedetailbackground_img">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie ? movie.backdrop_path : "image is not found"
                }`}
                alt="poster"
              />
            </div>
            <div className="row">
              <div className="moviedetailposter_img">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : "image is not found"
                  }`}
                  alt="poster"
                />
              </div>
              <div className="text">
                <div className="title">{movie && movie.original_title}</div>
                <div className="des">{movie && movie.overview}</div>
              </div>
            </div>
          </div>

          <div className="page2">
            <div className="genres_row">
      <h4>key element in this movie</h4>
      <div className="innergeners">
     {
      movie?.genres?.map((item)=>(
        <div key={item.id} className="genres">{item && item.name}</div>   
      ))
     }
      </div>
    </div>

            <div className="comp">
              <h3>Production Companies</h3>
              <div className="companies">
                {movie &&
                  movie.production_companies &&
                  movie.production_companies
                    .slice(0, 4)
                    .map((company, index) => (
                      <>
                        {company.logo_path && (
                          <span key={index} className="productionCompanyImage">
                            <img
                              className="movie__productionComapany"
                              src={
                                "https://image.tmdb.org/t/p/original" +
                                company.logo_path
                              }
                              alt="poster"
                            />
                            <span>{company.name}</span>
                          </span>
                        )}
                      </>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Moviedetail;
