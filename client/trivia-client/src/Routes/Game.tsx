import { useEffect, useState } from "react";
import { getQuestionsApi } from "../api/api";
import { useTriviaContext } from "../context/TriviaContext";
import { QuestionCard } from "../components/QuestionCard";
import { FinalPage } from "../components/FinalPage";

function shuffleAnswers(incorrect_answers: string[], correct_answer: string) {
  const answers = [...incorrect_answers, correct_answer];
  const shuffled = answers.sort(() => Math.random() - 0.5);
  return {
    options: shuffled,
    correct: correct_answer,
  };
}

export const Game = () => {
  const {
    selectedDifficulty,
    selectedCategory,
    score,
    setScore,
    questionIndex,
    setQuestionIndex,
    results,
    setResults,
  } = useTriviaContext();
  const [shuffledAnswers, setShuffledAnswers] = useState<{
    options: string[];
    correct: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setResults([]);
    setQuestionIndex(0);
  }, [selectedCategory, selectedDifficulty, setResults, setQuestionIndex]);

  useEffect(() => {
    if (!selectedCategory || !selectedDifficulty) return;
    if (results.length > 0) return;

    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const data = await getQuestionsApi(
          5,
          selectedCategory as number,
          selectedDifficulty as string
        );
        setResults(data);
        setQuestionIndex(0);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [selectedCategory, selectedDifficulty, results.length, setResults, setQuestionIndex]);

  useEffect(() => {
    if (results.length > 0 && questionIndex < results.length) {
      setShuffledAnswers(
        shuffleAnswers(
          results[questionIndex].incorrect_answers,
          results[questionIndex].correct_answer
        )
      );
    }
  }, [questionIndex, results]);

  const handleNext = () => {
    if (questionIndex <= results.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(results.length);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (questionIndex >= results.length) {
    return <FinalPage />;
  }

  return (
    <>
      <QuestionCard
        question={results[questionIndex].question}
        options={shuffledAnswers?.options || []}
        correct_answer={shuffledAnswers?.correct || ""}
        onNext={handleNext}
        setScore={setScore}
        score={score}
      />
    </>
  );
};

export default Game;