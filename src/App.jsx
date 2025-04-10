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
    if (newTitle === '') {
      alert('Insert a valid title!')
    } else if (newGenre === '') {
      alert('Insert a valid genre!')
    } else {
      const film = { genre: newGenre, title: newTitle };
      setPosts([...posts, film]);
      setFilteredPosts([...posts, film]);
      setNewTitle('');
      setNewGenre('');
    }
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
      <header>
        <section className='container mb-2 text-white p-2'>
          <h1 className='text-center'>Films</h1>
          <hr />
          <h2>Find Article</h2>
          <select value={searchGenre}
            onChange={event => setSearchGenre(event.target.value)}>
            <option value="">------</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
          <label><strong className='mx-2'>Find for genre</strong></label>
          <hr />
        </section>
      </header>

      <main>
        <section className='container mb-2 text-white p-2'>
          <label><strong>Find for title</strong></label>
          <div>
            <input
              type="text"
              value={searchTitle}
              placeholder="search for title"
              className="form-control"
              onChange={event => setSearchTitle(event.target.value)} />
          </div>
        </section>
      </main>

      <footer>
        <section className='container mb-2 text-white p-2'>
          <ul className='list-group'>
            {filteredPosts.map((element, index) => (
              <li className='list-item' key={index}>
                <div><strong>{element.title}</strong></div>
                <div>{element.genre}</div>
                <hr />
              </li>
            ))}
          </ul>

          <div className='container d-flex justify-content-center text-white p-2'>
            <form onSubmit={addNewGenre}>
              <input placeholder="Titolo" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
              <select value={newGenre}
                onChange={event => setNewGenre(event.target.value)}>
                <option value="">------</option>
                <option>Fantascienza</option>
                <option>Thriller</option>
                <option>Romantico</option>
                <option>Azione</option>
              </select>
              <button type="submit">Aggiungi</button>
            </form>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;

// 2. Creare un sistema per aggiungere nuovi film alla lista tramite un form.