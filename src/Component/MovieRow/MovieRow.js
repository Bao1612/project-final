import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../MovieRow/MovieRow.css";

function MovieRow(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b5103ff5c4edd5ebef52acfa7e60aeac&language=en-US&page=1"
      )
      .then((res) => {
        setMovieList(res.data.results); // Gán dữ liệu vào biến state movieList
      });
  }, []);

  return (
    <div className="MoviesRowContaint">
      <div className="originalsFilm">
        <h1 className="heading">PhimFly Originals</h1>
        <div className="MovieSlider">
          {movieList.slice(0, 10).map((movie) => (
            <div key={movie.id} className="movieItem">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} // Hiển thị giá trị của backdrop_path của phim
                alt={movie.title}
              />
              <div className="movieName">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
