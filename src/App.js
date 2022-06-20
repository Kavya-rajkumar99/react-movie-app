import "./App.css";
import { AddMovies } from "./AddMovies";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Home } from "./Home";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RenderMovies } from "./RenderMovies";
import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound";
import { MovieDetails } from "./MovieDetails";
import { TicTacToe } from "./TicTacToe";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { BasicForm } from "./BasicForm";

function App() {
  // const initialMoviesList = [
  //   {
  //     id : '100',
  //     name : "VIKRAM",
  //     rating : 8.5,
  //     image : "https://m.media-amazon.com/images/M/MV5BZTNhMjU2NTAtZTg5My00ZTg2LWIwZjMtNzRiNGFhZDc2OTg1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //     summary : "Vikram is an upcoming Indian Tamil language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films. The film revolves around two siblings: one is a gangster and the other, a politician. They both kidnap a high ranking government official and trap him in their own prison.",
  //     trailer : "https://www.youtube.com/embed/2zXxlo5EGUE"
  //    },
  //    {
  //     id:'101',
  //     name : "SPIDER-MAN",
  //     rating : 8.3,
  //     image : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
  //     summary : "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019)",
  //     trailer : "https://www.youtube.com/embed/JfVOs4VSpmA"
  //    },
  //    {
  //     id:'102',
  //     name : "RRR",
  //     rating : 8.2,
  //     image : "https://www.telugubulletin.com/wp-content/uploads/2022/02/images-48-497x616.jpeg",
  //     summary : "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli who wrote the film with V. Vijayendra Prasad. It is produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran and Olivia Morris",
  //     trailer : "https://www.youtube.com/embed/f_vbAtFSEc0"
  //    },
  //    {
  //     id:'103',
  //     name : "KGF Chapter 2",
  //     rating : 8.7,
  //     image : "https://m.media-amazon.com/images/M/MV5BNzY1NTRhZDgtZGQyMi00OTQ1LWFhMmMtMmJhMTZhMjZhNDQ0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  //     summary : "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second instalment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1.",
  //     trailer : "https://www.youtube.com/embed/Qah9sSIXJqk"
  //    },
  //    {
  //     id:'104',
  //     name : "THE BATMAN",
  //     rating : 7.9,
  //     image : "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
  //     summary : "The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise.",
  //     trailer : "https://www.youtube.com/embed/mqqft2x_Aa4"
  //    },
  //    {
  //     id:'105',
  //     name : "AVENGERS",
  //     rating : 8.4,
  //     image : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //     summary : "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
  //     trailer : "https://www.youtube.com/embed/eOrNdBpGMv8"
  //    },
  //    {
  //     id:'106',
  //     name : "BEAST",
  //     rating : 8.0,
  //     image : "https://www.mixindia.com/wp-content/uploads/2022/01/Beast-Tamil-Movie-Poster-1.jpg",
  //     summary: "Beast is a 2022 Indian Tamil-language action comedy film written and directed by Nelson and produced by Sun Pictures. The film stars Vijay and Pooja Hegde, leading an ensemble cast including Selvaraghavan, Shine Tom Chacko, Yogi Babu, Redin Kingsley and Ajit Vikal.",
  //     trailer : "https://www.youtube.com/embed/0E1kVRRi6lk"
  //    },
  //    {
  //     id:'107',
  //     name : "DUNE",
  //     rating : 8.1,
  //     image : "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
  //     summary : "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first of a two-part adaptation of the 1965 novel by Frank Herbert, primarily covering the first half of the book",
  //     trailer : "https://www.youtube.com/embed/8g18jFHCLXk"
  //    },
  //    {
  //     id:'108',
  //     name : "JAI BHIM",
  //     rating : 8.9,
  //     image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
  //     summary : "Jai Bhim is a 2021 Indian Tamil-language legal drama film directed by T. J. Gnanavel and produced by Jyothika and Suriya under 2D Entertainment. The film stars Suriya with Lijomol Jose and Manikandan in the lead.",
  //     trailer : "https://www.youtube.com/embed/nnXpbTFrqXA"
  //    }
  // ]
  // const [moviesList, setMoviesList] = useState(initialMoviesList);
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/tic-tac-toe")}>
                Tic-Tac-Toe
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? "Light" : "Dark"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          {/* <nav className="nav-bar">
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/movies/add">Add Movies</Link></li>
        </ul>
      </nav> */}
          <section className="route-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<RenderMovies />} />
              <Route path="/movies/add" element={<AddMovies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/tic-tac-toe" element={<TicTacToe />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/basic-form" element = {<BasicForm />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;

