import { useEffect, useState } from 'react';
import films from "./data/array";

function App() {
  const [posts, setPosts] = useState(films);
  const [filteredPosts, setFilteredPosts] = useState(films);
  const [searchGenre, setSearchGenre] = useState('');

  useEffect(() => {
    if (searchGenre === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.genre === searchGenre);
      setFilteredPosts(filtered);
    }
  }, [searchGenre, posts]);

  return (
    <>
      <h1>Films</h1>
      <hr />
      <section>
        <h2>Find Article</h2>
        <label>Find for genre</label>
        <div>
          <select value={searchGenre} onChange={event => setSearchGenre(event.target.value)}>
            <option value="">------</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
          {searchGenre}
        </div>
      </section>
      <div>
        <ul>
          {filteredPosts.map((element, index) => (
            <li key={index}>
              <div>{element.genre}</div>
              <div>{element.title}</div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;


// Esercizio
// Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
// L'array dei film è già fornito:
