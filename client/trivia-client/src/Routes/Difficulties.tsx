import { useTriviaContext } from "../context/TriviaContext";
import { Link } from "react-router-dom";
import "../Difficulties.css"

type DifficultyCard = {
  difficulty: string;
  onSelectDifficulty: (difficulty: string) => void;
};

function DifficultyCard({ difficulty, onSelectDifficulty }: DifficultyCard) {
  return (
    <Link to="/Game">
      <button
        className={`difficulty-button ${difficulty}`}
        onClick={() => onSelectDifficulty(difficulty)}
      >
        {difficulty}
      </button>
    </Link>
  );
}
export const Difficulties = () => {
  const { setSelectedDifficulty } = useTriviaContext();

  const difficulties = ["easy", "medium", "hard"];

  return (
    <section className="all-difficulties-container">
      <h1 className="difficulty-title">DIFICULTAD</h1>
      <div className="buttons-container">
        {difficulties.map((difficulty) => (
          <DifficultyCard
            key={difficulty}
            difficulty={difficulty}
            onSelectDifficulty={() => setSelectedDifficulty(difficulty)}
          />
        ))}
      </div>
    </section>
  );
};

export default Difficulties