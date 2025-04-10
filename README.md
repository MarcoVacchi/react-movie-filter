# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Esercizio
Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
L'array dei film è già fornito:
[
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!
Note


- Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
- Se non viene selezionato alcun genere, devono essere mostrati tutti i film.



BONUS:
1. Aggiungere un campo di ricerca per filtrare i film anche per titolo.
2. Creare un sistema per aggiungere nuovi film alla lista tramite un form.
