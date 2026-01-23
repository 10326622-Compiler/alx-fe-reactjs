// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  return (
    <Router>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px', padding: '20px' }}>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        
        <aside>
          <FavoritesList />
          <hr />
          <RecommendationsList />
        </aside>
      </div>
    </Router>
  );
}


export default App;