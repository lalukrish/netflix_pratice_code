import axios from "../axios";
import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import { imageURL, API_KEY } from "../Constants/Constants";
import "./RowPost.css";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlid] = useState("");

  useEffect(() => {
    axios
      .get(props.Urls)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      })
      .catch((err) => {
        //alert('network error');
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 2,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.results.length !== 0) {
          setUrlid(resp.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}s</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageURL + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlid && <YouTube opt={opts} videoId={urlid.key} />}
    </div>
  );
}
export default RowPost;
