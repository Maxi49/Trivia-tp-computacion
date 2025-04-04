import axios from "axios"
import { generateUrl, getCategory } from "../utils/utils"

/**
 * 
 * @param {number} amount 
 * @param {string} category 
 * @param {string} difficulty   
 * @returns {object} respuesta de la API con las preguntas
 * @throws {Error} error si la solicitud falla
 */
export async function getQuestionsApi(amount: number, category: string, difficulty: string) {
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
