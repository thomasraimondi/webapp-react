import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Movies from "./pages/Movies.jsx";
import { MoviesProvider } from "./contexts/moviesContext.jsx";

function App() {
  return (
    <>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movies/" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  );
}

export default App;
