import { useState } from 'react';
import './App.css';

function App() {
  const movies = [
    {
      poster: "https://moviegalleri.net/wp-content/uploads/2020/01/Hero-Suriya-Soorarai-Pottru-Movie-Teaser-Release-Jan-7th-Poster-HD.jpg",
      name: "Soorarai Pottru",
      rating: "9.1",
      summary: "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest."
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BNDJhNWRjMjgtNzg1NS00YjBjLThlZjUtYTViNjdjOGZmNmQ2XkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg",
      name: "Baba",
      rating: "5.3",
      summary: "Baba is an atheist who always questions the higher power. A turn of events bestows Baba with divine powers and he takes it as an opportunity to help the people in his state."
    },
    {
      poster: "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_FMjpg_UX1000_.jpg",
      name: "Maanaadu",
      rating: "9.3",
      summary: "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop."
    },
    {
      poster: "https://www.thehindu.com/entertainment/movies/z5lmd3/article35738194.ece/BINARY/jai",
      name: "Jai Bhim",
      rating: "9.5",
      summary: "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them."
    },
    {
      poster: "https://images-na.ssl-images-amazon.com/images/I/71JmxE8pC1L._RI_.jpg",
      name: "Annaamalai",
      rating: "7.7",
      summary: "Annamalai, a milkman, and Ashok, the son of a rich businessman, are childhood friends. However Ashok's father disapproves of their friendship and attempts to create a rift between the two."
    },
    {
      poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWQ5phF7_mITj-vhcGLg5vGKSXF1KmhjWNblq-8PSdW8IAbICb",
      name: "Aayirathil Oruvan",
      rating: "8.1",
      summary: "Anitha, a government official, embarks on a journey to find Chandramouli, an archaeologist, who went to Vietnam in order to search for any existence of the prince of the Chola dynasty."
    },
    {
      poster: "https://static.moviecrow.com/gallery/20141008/46940-64ecbf36008c17a7bd5e0ccbe4daa47a.jpg",
      name: "Goa",
      rating: "6.6",
      summary: "Three young men, who always get into trouble in their village, dream of an effortless life. For this, they run away to Goa in the hope of finding and getting married to rich foreign women."
    },
    {
      poster: "https://images-na.ssl-images-amazon.com/images/I/71LX0gmM7lL._RI_.jpg",
      name: "Polladhavan",
      rating: "7.7",
      summary: "Prabhu is dejected when he learns that his bike has been stolen. He decides to find the people who stole the bike, but lands in trouble when he realises that his bike has been used to transport drugs."
    },
    {
      poster: "https://images.jdmagicbox.com/comp/jd_social/news/2018jul13/image-51236-r50u94uqxl.jpg",
      name: "Anjathe",
      rating: "8.1",
      summary: "Satya and Kiruba are friends. Satya is reckless and gets into drinking and violent fights whereas Kiruba studies hard to become a Sub-Inspector. Tables are turned when Satya becomes a Sub-Inspector."
    },
    {
      poster: "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/512/512/0/94/41/c3b4cfd09aac11e990e939ad7f02823a_1562999216322_p_medium.jpg",
      name: "Vettaiyaadu Vilaiyaadu",
      rating: "7.9",
      summary: "Raghavan, a police officer, sets out to catch a serial killer who killed his friend's daughter, Rani. As the culprit goes rampant in other countries, Raghavan is forced to go to New York to catch him."
    },
    {
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/Valimai_poster.jpg",
      name: "Valimai",
      rating: "9.1",
      summary: "Valimai is an upcoming Indian Tamil-language action thriller film written and directed by H. Vinoth, and produced by Zee Studios and Boney Kapoor under Bayview Projects LLP. The film stars Ajith Kumar, Huma Qureshi, and Kartikeya Gummakonda."
    },
    {
      poster: "https://i.scdn.co/image/ab67616d0000b273a591472e6968e41cede6c706",
      name: "Naveena Saraswathi Sabatham",
      rating: "4.7",
      summary: "Lord Shiva crashes four friends' bachelor party as he wants to recruit four mortals. After a night of debauchery, they wake up on a deserted island with no memory of how they got there."
    },
  ];
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div className="counter-container">
      <button className="like-dislike" onClick={() => setLike(like + 1)}>???? {like}</button>
      {/*<p>{like}</p>*/}
      <button className="like-dislike" onClick={() => setdisLike(dislike - 1)}>???? {dislike}</button>
      {/*<p>{dislike}</p>*/}
    </div>
  );
}

function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster }) =>
        <Movie
          name={name}
          rating={rating}
          summary={summary}
          poster={poster} />
      )}
    </section>
  );
}

function Movie({ name, rating, summary, poster }) {
  const [show, setShow] = useState(true)
  //conditional styling
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name" >{name}</h3>
        <p className="movie-rating" style={styles}> ??? {rating}</p>
      </div>
      <button className="movie-show-button" onClick={()=> setShow(!show)}>
        {show ? "Hide" : "Show"} description
        </button>
        {/*//conditional rendering*/}
     {show ? <p className="movie-summary"> {summary}</p> : "" }
      <Counter />
    </div>
  );
}

export default App;
