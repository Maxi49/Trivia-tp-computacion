import axios from "axios"
import { generateUrl } from "../utils/utils"
import { Category } from "../Routes/Categories";
export async function getQuestionsApi(amount: number, category: number, difficulty: string) {
  try {
    const url = generateUrl(amount, category, difficulty);

    const { data: questions } = await axios.get(url); 
    
    return questions.results
  } catch (error) {
    console.error("Error en getQuestions:", error);
    throw error; 
  }
}

export async function getCategories(): Promise<Array<Category>> {
  const { data } = await axios.get("https://opentdb.com/api_category.php")
    const { trivia_categories } = data 

  return trivia_categories as Array<Category> 
}