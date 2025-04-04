import axios from "axios"
import { generateUrl } from "../utils/utils"

/**
 * 
 * @param {number} amount 
 * @param {string} category 
 * @param {string} difficulty   
 * @returns {object} respuesta de la API con las preguntas
 * @throws {Error} error si la solicitud falla
 */
export async function getQuestionsApi(amount: number, category: number, difficulty: string) {
  try {
    const url = generateUrl(amount, category, difficulty);

    const { data } = await axios.get(url); 
    
    return data.results
  } catch (error) {
    console.error("Error en getQuestions:", error);
    throw error; 
  }
}
