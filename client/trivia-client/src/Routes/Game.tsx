import { useEffect } from "react";
import { getQuestionsApi } from "../api/api";
import { useTriviaContext } from "../context/TriviaContext";

export const Game = () => {
  const { selectedDifficulty , selectedCategory} = useTriviaContext();
  console.log (selectedCategory);
  useEffect(() => {
    const getQuestionsFromApi = async () => {
      await getQuestionsApi(5, selectedCategory as number, selectedDifficulty as string)
    }
    getQuestionsFromApi()
  }, [selectedCategory, selectedDifficulty])


  return (<>
        <h1>Click en el boton play para jugar</h1>
    </>
    )
};

export default Game