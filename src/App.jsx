import { useEffect, useState } from 'react';
import films from "./data/array";

function App() {
  const [posts, setPosts] = useState(films);
  const [filteredPosts, setFilteredPosts] = useState(films);
  const [searchGenre, setSearchGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const addNewGenre = e => {
    e.preventDefault();
    const film = { genre: newGenre, title: newTitle };
    setPosts([...posts, film]);
    setFilteredPosts([...posts, film]);
    setNewTitle('');
    setNewGenre('');
  };

  useEffect(() => {
    let filtered = posts;

    if (searchGenre) {
      filtered = filtered.filter(element => element.genre === searchGenre);
    }

    if (searchTitle) {
      filtered = filtered.filter(element => element.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }

    setFilteredPosts(filtered);
  }, [searchGenre, searchTitle]);
  return (
    <>
      <h1>Films</h1>
      <hr />
      <section>
        <h2>Find Article</h2>
        <label><strong>Find for genre</strong></label>
        <div>
          <select value={searchGenre}
            onChange={event => setSearchGenre(event.target.value)}>
            <option value="">------</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
          <hr />
          <label><strong>Find for title</strong></label>
          <div>
            <input
              type="text"
              value={searchTitle}
              placeholder="search for title"
              onChange={event => setSearchTitle(event.target.value)}
            />
          </div>
        </div>
      </section>
      <div>
        <ul>
          {filteredPosts.map((element, index) => (
            <li key={index}>
              <div>{element.title}</div>
              <div>{element.genre}</div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={addNewGenre}>
        <input placeholder="Titolo" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        <input placeholder="Genere" value={newGenre} onChange={e => setNewGenre(e.target.value)} />
        <button type="submit">Aggiungi</button>
      </form>
    </>
  );
}

export default App;

// 2. Creare un sistema per aggiungere nuovi film alla lista tramite un form.