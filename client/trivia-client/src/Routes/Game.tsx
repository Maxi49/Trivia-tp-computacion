import { useEffect, useState } from "react";
import { getQuestionsApi } from "../api/api";
import { useTriviaContext } from "../context/TriviaContext";
import he from 'he'
import { QuestionCard } from "../components/QuestionCard";


type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

function shuffleAnswers(incorrect_answers: string[], correct_answer: string) {
  const answers = [...incorrect_answers, correct_answer];
  //spread para unir todo en un array
  const shuffled = answers.sort(() => Math.random() - 0.5)
  return {
    options: shuffled,
    correct: correct_answer
  };
}

export const Game = () => {
  const { selectedDifficulty, selectedCategory } = useTriviaContext();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [results, setResults] = useState<Question[]>([]);

  useEffect(() => {
    const getQuestionsFromApi = async () => {
      const results = await getQuestionsApi(5, selectedCategory as number, selectedDifficulty as string)
      setResults(results)
    }
    getQuestionsFromApi()
  }, [selectedCategory, selectedDifficulty])

  const handleNext = () => {
    if (currentIndex <= results.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  console.log("results: ", results)

  if (results.length === 0)
    return <h1>Loading...</h1>

  if (currentIndex >= results.length) {
    return <h1>¡Juego terminado!</h1>;

  }

  const { options, correct } = shuffleAnswers(
    results[currentIndex].incorrect_answers,
    results[currentIndex].correct_answer
  );


  return (
    <>

      <QuestionCard
        question={he.decode(results[currentIndex].question)}
        options={options}
        correct_answer={correct}
        onNext={handleNext}
      />

    </>

  )
};


export default Game