import React, { useEffect, useState } from "react";
import "../Toprate/Toprate.css";
import axios from "axios";

function Toprate() {
  const [toprate, setTopRate] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b5103ff5c4edd5ebef52acfa7e60aeac&language=en-US&page=1"
      )
      .then((res) => {
        console.log(res);
        setTopRate(res.data.results);
      });
  }, []);

  return (
    <div className="TopRateContaint">
      <div className="toprateFilm">
        <h1 className="toprateHeading">Đánh Giá Cao</h1>
        <div className="TopRateSlider">
          {toprate.slice(0, 10).map((movie) => (
            <div key={movie.id} className="toprateItem">
              <img
                className="toprateimg"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} // Hiển thị giá trị của backdrop_path của phim
                alt={movie.title}
              />
              <div className="toprateName">{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toprate;
