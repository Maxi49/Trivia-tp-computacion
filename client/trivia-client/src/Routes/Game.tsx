import { useEffect, useState } from "react";
import { getQuestionsApi } from "../api/api";
import { useTriviaContext } from "../context/TriviaContext";
import he from 'he'


type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export const Game = () => {
  const { selectedDifficulty , selectedCategory} = useTriviaContext();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [results, setResults] = useState<Question[] | undefined>([]);
  useEffect(() => {
    const getQuestionsFromApi = async () => {
      const results = await getQuestionsApi(5, selectedCategory as number, selectedDifficulty as string)
      setResults(results)
    }
    getQuestionsFromApi()
  }, [selectedCategory, selectedDifficulty])
  console.log("results: ", results)
  

  if (!results) return <h1>Loading...</h1>

  return (
    <>
    {results.length && (
      <div key={results[currentIndex].question} className="question-card">
        <h2>{he.decode(results[currentIndex].question)}</h2>
          {results[currentIndex].incorrect_answers.map((answer, index) => (
            <button key={index}>{answer}</button>
          ))}
          <button onClick={() => setCurrentIndex(currentIndex + 1)}>{results[currentIndex].correct_answer}</button>
      </div>
    )}
    </>
    
  )
};

export default Game