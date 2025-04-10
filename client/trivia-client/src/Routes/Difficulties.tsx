import { useTriviaContext } from "../context/TriviaContext";
import { Link } from "react-router-dom";

type DifficultyCard = {
  difficulty: string;
  onSelectDifficulty: (difficulty: string) => void;
};

function DifficultyCard({ difficulty, onSelectDifficulty }: DifficultyCard) {

  return (
    <Link to="/Game">
      <div className="difficulty-card" onClick={() => onSelectDifficulty(difficulty)}>
        {difficulty}
      </div>
    </Link>
  )
}

export const Difficulties = () => {
  const { selectedDifficulty, setSelectedDifficulty } = useTriviaContext();

  const difficulties = ["easy", "medium", "hard"];

  return (
    <section>
      <h2>Selecciona una dificultad</h2>
      {difficulties.map((difficulty) => (
        <DifficultyCard
          key={difficulty}
          difficulty={difficulty}
          onSelectDifficulty={() => setSelectedDifficulty(difficulty)}
        />
      ))}
      {selectedDifficulty && <p>Dificultad seleccionada: {selectedDifficulty}</p>}
    </section>
  );
};

export default Difficulties