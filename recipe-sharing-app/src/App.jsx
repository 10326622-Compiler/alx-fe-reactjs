// src/App.jsx
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: 'red',textAlign: 'center' }}>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;