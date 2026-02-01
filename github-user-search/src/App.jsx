import Search from './components/Search'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">GitHub User Search</h1>
          <p className="text-gray-500 mt-1">Find GitHub users and explore their profiles</p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <Search />
      </main>

      <footer className="bg-white border-t border-gray-200 text-center py-4">
        <p className="text-sm text-gray-400">Powered by GitHub API</p>
      </footer>
    </div>
  )
}

export default App