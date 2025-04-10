import { useState } from 'react'
import films from "./data/array"

// const array = [
//   { title: 'Inception', genre: 'Fantascienza' },
//   { title: 'Il Padrino', genre: 'Thriller' },
//   { title: 'Titanic', genre: 'Romantico' },
//   { title: 'Batman', genre: 'Azione' },
//   { title: 'Interstellar', genre: 'Fantascienza' },
//   { title: 'Pulp Fiction', genre: 'Thriller' },
// ]

function App() {


  const [posts, setPosts] = useState(films);
  //console.log(posts);
  return (
    <>
      <h1>Films</h1>
      <ul>
        {posts.map((element, index) =>
          <li key={index}>{element.genre}</li>
        )}
      </ul>
    </>
  )
}

export default App


// Esercizio
// Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
// L'array dei film è già fornito:
