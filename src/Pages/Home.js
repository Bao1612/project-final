import React from "react";
// import { Routes, Route } from 'react-router-dom'
import Top from "../Component/Top";
import Intro from "../Component/Intro/Intro";
import MovieRow from "../Component/MovieRow/MovieRow";
import Toprate from "../Component/Toprate/Toprate";

// import Phimbo from '../Pages/Phimbo'
// import Phimle from '../Pages/Phimle'
// import Phimhot from '../Pages/Phimhot'
// import Phimmoi from '../Pages/Phimmoi'
// import Search from '../Pages/Search'

function Home() {
  return (
    <div>
      <Top />
      <Intro />
      <MovieRow />
      <Toprate />
    </div>
  );
}

export default Home;
