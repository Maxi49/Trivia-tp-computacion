import './App.css'
import { useState } from "react"
import { CategoryCard, getQuestion } from './OptionCards';
import { DifficultyCard } from './OptionCards';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const categories = [
    { categoryName: "geography", id: 22 },
    { categoryName: "history", id: 23 },
    { categoryName: "politics", id: 24 },
    { categoryName: "art", id: 25 },
    { categoryName: "celebrities", id: 26 }
  ];

  const difficulties = ["easy", "meadium", "hard"]

  function renderCategories() {
    return (

        <section className="category-card-container">
          {categories.map(({ categoryName, id }) => (
            <CategoryCard
              key={id}
              categoryName={categoryName}
              id={id}
              onSelectCategory={(id) => setSelectedCategory(id)}
            />
          ))}
        </section>
      
    );
  }
  
  async function questions() {
    await getQuestion()
  }

  function renderDifficulties() {
    return (
      <section>
        <h2>Selecciona una dificultad</h2>
        {difficulties?.map((difficulty) => (  // ✅ Corrección de la sintaxis de map()
          <DifficultyCard
            key={difficulty}
            difficulty={difficulty}
            onSelectDifficulty={() => setSelectedDifficulty(difficulty)}
          />
        ))}
      </section>
    )
  }

  return (
    <>
      {!selectedCategory && 
        (
        renderCategories()
        )  
      }
      {
        selectedCategory && (
          
            renderDifficulties()
          
        )
      }
      {/*
        selectedDifficulty !== null (
          // TODO ADD renderQuestions
        )
      */}
      <button onClick={() => questions()}>
        clickea
      </button>
    </>
  );
}
export default App
