import { useState } from "react";
import { DifficultyCard } from "../OptionCards";

export const Difficulties = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
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