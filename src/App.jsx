import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <div>
          <h1 style={{ textAlign: "center" }}>Movies Collection</h1>
          {movies.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                width: "auto",
                height: "auto",
                justifyContent: "flex-start",
                padding: "20px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "10px",
                marginTop: "50px",
              }}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  width={102}
                  height={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "10px",
                    marginRight: "20px",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  fontWeight: "700",
                }}
              >
                <div>Title:{item.title}</div>
                <div>Year:{item.year}</div>
                <div>Runtime:{item.runtime}</div>
                <div style={{ display: "flex", gap: "10px" }}>
                  Genres:
                  {item.genres.map((genre, genreIndex) => (
                    <div
                      key={genreIndex}
                      style={{
                        backgroundColor: "orange",
                        padding: "2px 5px",
                        borderRadius: "5px",
                        fontWeight: "normal",
                      }}
                    >
                      {genre}
                    </div>
                  ))}
                </div>
                <div>IMDB Ratings:{item.imdbRating}</div>
                <div>IMDB Votes:{item.imdbVotes}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
