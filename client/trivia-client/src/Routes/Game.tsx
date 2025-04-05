import { useEffect, useState } from "react";
import { getQuestionsApi } from "../api/api";
import { useTriviaContext } from "../context/TriviaContext";

export const Game = () => {
  const { selectedDifficulty , selectedCategory} = useTriviaContext();

  const [results, setResults] = useState<[] | undefined>([]);
  useEffect(() => {
    const getQuestionsFromApi = async () => {
      const results = await getQuestionsApi(5, selectedCategory as number, selectedDifficulty as string)
      setResults(results)
    }
    getQuestionsFromApi()
  }, [selectedCategory, selectedDifficulty])
  console.log("results: ", results)


  return (<>
        <h1>Click en el boton play para jugar</h1>
    </>
    )
};

export default Game