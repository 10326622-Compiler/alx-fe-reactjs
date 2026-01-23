// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import DeleteRecipeButton from './components/DeleteRecipeBotton';
import EditRecipeForm from './components/EditRecipeForm';


function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <Link to="/">Home (All Recipes)</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <>
              <h1>Recipe Manager</h1>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;