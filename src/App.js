import logo from './logo.svg';
import './App.css';
import { AddMovies } from './AddMovies';

function App() {
  const moviesList = [
    {
      name : "VIKRAM",
      rating : 8.5,
      image : "https://m.media-amazon.com/images/M/MV5BZTNhMjU2NTAtZTg5My00ZTg2LWIwZjMtNzRiNGFhZDc2OTg1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      summary : "Vikram is an upcoming Indian Tamil language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International. The film revolves around two siblings: one is a gangster and the other, a politician. They both kidnap a high ranking government official and trap him in their own prison. Vikram, a retired police officer, is assigned to save him and how he saves him forms the rest of the story."
     },
     {
      name : "SPIDER-MAN",
      rating : 8.3,
      image : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
      summary : "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). " 
     },
     {
      name : "RRR",
      rating : 8.2,
      image : "https://www.telugubulletin.com/wp-content/uploads/2022/02/images-48-497x616.jpeg",
      summary : "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli who wrote the film with V. Vijayendra Prasad. It is produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris"
     },
     {
      name : "KGF Chapter 2",
      rating : 8.7,
      image : "https://m.media-amazon.com/images/M/MV5BNzY1NTRhZDgtZGQyMi00OTQ1LWFhMmMtMmJhMTZhMjZhNDQ0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      summary : "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second instalment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1."
     },
     {
      name : "THE BATMAN",
      rating : 7.9,
      image : "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
      summary : "The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise. The film was directed by Matt Reeves, who wrote the screenplay with Peter Craig."
     },
     {
      name : "AVENGERS END GAME",
      rating : 8.4,
      image : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      summary : "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
     },
     {
      name : "BEAST",
      rating : 8.0,
      image : "https://www.mixindia.com/wp-content/uploads/2022/01/Beast-Tamil-Movie-Poster-1.jpg",
      summary: "Beast is a 2022 Indian Tamil-language action comedy film written and directed by Nelson and produced by Sun Pictures. The film stars Vijay and Pooja Hegde, leading an ensemble cast including Selvaraghavan, Shine Tom Chacko, Yogi Babu, Redin Kingsley, VTV Ganesh, Shaji Chen, Aparna Das, Sathish Krishnan, Lilliput and Ankur Ajit Vikal."
     },
     {
      name : "DUNE",
      rating : 8.1,
      image : "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      summary : "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first of a two-part adaptation of the 1965 novel by Frank Herbert, primarily covering the first half of the book"
     },
     {
      name : "JAI BHIM",
      rating : 8.9,
      image : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm8U_-RJoMKrgvpIVLbDV8ovuHIp-p_Ls5I7WHaXJUUCbhjQVd",
      summary : "Jai Bhim is a 2021 Indian Tamil-language legal drama film directed by T. J. Gnanavel and produced by Jyothika and Suriya under 2D Entertainment. The film stars Suriya with Lijomol Jose and Manikandan in the lead."
     }
  ]
  return (
    <div className="App">
        <AddMovies movies={moviesList} />
    </div>
  );
}

export default App;
