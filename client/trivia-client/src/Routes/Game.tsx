import { useEffect, useState } from "react";
import { getQuestionsApi } from "../api/api";
import { useTriviaContext } from "../context/TriviaContext";
import he from 'he'
import { QuestionCard } from "../components/QuestionCard";
import { FinalPage } from "../components/FinalPage";

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
  const { selectedDifficulty, selectedCategory, score, setScore, questionIndex, setQuestionIndex, results, setResults } = useTriviaContext();
  const [shuffledAnswers, setShuffledAnswers] = useState<{ options: string[]; correct: string } | null>(null);

  useEffect(() => {
    const getQuestionsFromApi = async () => {
      try {
        const results = await getQuestionsApi(5, selectedCategory as number, selectedDifficulty as string);
        setResults(results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    
    const timeoutId = setTimeout(() => {
      getQuestionsFromApi();
    }, 1000); 
    
    return () => clearTimeout(timeoutId); 
  }, [selectedCategory, selectedDifficulty, results, setResults]);
  
  useEffect(() => {
      if (results.length > 0 && questionIndex < results.length) {
        setShuffledAnswers(shuffleAnswers(
          results[questionIndex].incorrect_answers,
          results[questionIndex].correct_answer
        ));
      }
  }, [questionIndex, results]);

  const handleNext = () => {
    if (questionIndex <= results.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
    else {
      setQuestionIndex(results.length)
    }
  };

  console.log("results: ", results)

  if (results.length === 0)
    return <h1>Loading...</h1>

  if (questionIndex >= results.length) {
    return <FinalPage />;
  }

  return (
    <>

      <QuestionCard
        question={he.decode(results[questionIndex].question)}
        options={shuffledAnswers?.options || []}
        correct_answer={shuffledAnswers?.correct || ""}
        onNext={handleNext}
        setScore={setScore}
        score={score}
      />

    </>

  )
};


export default Game