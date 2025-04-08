type Props = {
  question: string;
  options: string[];
  onNext: () => void;
};

export function QuestionCard({ question, options, onNext }: Props) {
  return (
    <div className="question-card">
      <div>{question}</div>
      <div>
        {options.map((option) => (
          <button className="option-button" onClick={onNext} key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
