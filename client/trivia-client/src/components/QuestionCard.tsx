import { useState } from "react"
type Props = {
  question: string;
  options: string[];
  onNext: () => void;
  correct_answer: string;

};

export function QuestionCard({ question, options, onNext, correct_answer }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = (option: string) => {
    setSelectedOption(option);

    setTimeout(() => {
      onNext()
      setSelectedOption(null)
    }, 1000);
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
      <div>{question}</div>
      <div>
        {options.map((option) => (
          <button
            key={option}
            className={getButtonClass(option)}
            onClick={() => handleClick(option)}
            disabled={!!selectedOption} // Desactiva todos los botones una vez que se clickea uno
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
