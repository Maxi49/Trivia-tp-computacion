import { useState } from "react"
import he from "he"
type Props = {
  question: string;
  options: string[];
  onNext: () => void;
  correct_answer: string;
  score: number,
  setScore: (score: number) => void
};

export function QuestionCard({ question, options, onNext, correct_answer, setScore, score }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = (option: string) => {
    setSelectedOption(option);
    if (option === correct_answer) {
      setScore(score + 10)
    }
    const timeOut = setTimeout(() => {
      onNext()
      setSelectedOption(null)
    }, 1000);

    return () => clearTimeout(timeOut);
  }

  const getButtonClass = (option: string) => {
    if (!selectedOption) return "answer-button";

    if (option === correct_answer)
      return "answer-button correct";
    else
      return "answer-button incorrect";

  };

  return (
    <div className="question-card">
      <div>{he.decode(question)}</div>
      <div>
        {options.map((option) => (
          <button
            key={option}
            className={getButtonClass(option)}
            onClick={() => handleClick(option)}
            disabled={!!selectedOption} // Desactiva todos los botones una vez que se clickea uno
          >
            {he.decode(option)}
          </button>
        ))}
      </div>
    </div>
  );
}
