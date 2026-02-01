import Search from './components/Search'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Find GitHub users and explore their profiles</p>
      </header>

      <main className="app-main">
        <Search />
      </main>

      <footer className="app-footer">
        <p>Powered by GitHub API</p>
      </footer>
    </div>
  )
}

export default App