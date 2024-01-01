import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import banner from "../../netflix-banner.jpg";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
const apiKey = process.env.REACT_APP_TMDB_KEY;
const commonUrl = process.env.REACT_APP_TMDB_URL;
const popular = "popular";
const nowPlaying = "now_playing";
const upComing = "upcoming";
const topRated = "top_rated";
const imgUrl = process.env.REACT_APP_IMG_URL;
const Card = ({ img }) => (
  <div className="card">
    <img alt="cover" src={img} />
  </div>
);
const Row = ({
  title,
  arr = [
    {
      img: "https://i.pinimg.com/736x/b0/13/97/b013977c4fcea22f2a3a9cf1f467b75d.jpg",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${commonUrl}${popular}?api_key=${apiKey}ad4&language=en-US&page=1`
      );
      setPopularMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${commonUrl}${nowPlaying}?api_key=${apiKey}ad4&language=en-US&page=1`
      );
      setNowPlayingMovies(results);
    };
    const fetchUpComing = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${commonUrl}${upComing}?api_key=${apiKey}ad4&language=en-US&page=1`
      );
      setUpComingMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${commonUrl}${topRated}?api_key=${apiKey}ad4&language=en-US&page=1`
      );
      setTopRatedMovies(results);
    };
    fetchPopular();
    fetchNowPlaying();
    fetchUpComing();
    fetchTopRated();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        <div>
          <button>Play <BiPlay/></button>
          <button>My List <AiOutlinePlus/></button>
        </div>
      </div>
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Up Coming"} arr={upComingMovies} />
    </section>
  );
};

export default Home;
