import axios from "axios"
import { generateUrl, getCategory } from "../utils/utils"

/**
 * 
 * @param amount 
 * @param category 
 * @param difficulty 
 * @param type 
 * @returns 
 */
export async function getQuestionsApi(amount: number, category: string | number, difficulty: string) {
  try {
    const returnedCategory = getCategory(category as string);

    const url = generateUrl(amount, returnedCategory as number, difficulty);

    const { data } = await axios.get(url); 
    
    return data.results
  } catch (error) {
    console.error("Error en getQuestions:", error);
    throw error; 
  }
}
