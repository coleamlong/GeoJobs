import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./views/About";
import Apartment from "./views/Apartment";
import Apartments from "./views/Apartments";
import Cities from "./views/Cities";
import City from "./views/City";
import Home from "./views/Home";
import Job from "./views/Job";
import Jobs from "./views/Jobs";
import Search from "./views/Search"
import Visualizations from "./views/Visualizations"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:id" element={<City />} />
        <Route path="apartments" element={<Apartments />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="visualizations" element={<Visualizations />} />
        {/* site-wide search */}
        <Route path="/search/:query" element={<Search />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
