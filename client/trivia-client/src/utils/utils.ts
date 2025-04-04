const categories: Record<string, number | object> = {
  "general knowledge": 9,
  "entertainment": {
    "books": 10,
    "film": 11,
    "music": 12,
    "musical & theatres": 13,
    "television": 14,
    "video games": 15,
    "board games": 16,
    "comics": 29,
    "japanese anime & manga": 31,
    "cartoons & animations": 32,
  },
  "science & nature": 17,
  "science" : {
    "computers": 18,
    "mathematics": 19,
    "gadgets": 30
  },
  "mythology": 20,
  "sports": 21,
  "geography": 22,
  "history": 23,
  "politics": 24,
  "art": 25,
  "celebrities": 26,
  "animals": 27,
  "vehicles": 28
}

/**
 * 
 * @param {number} amount cantidad de preguntas a solicitar
 * @param {number} category categoria de las preguntas
 * @param {string} difficulty dificultad de las preguntas
 * @returns {string} url completa para la solicitud 
 */
export function generateUrl(amount: number = 5, category: number, difficulty: string) {   
  let url = `https://opentdb.com/api.php?amount=${amount}`;
  
  if (category) url += `&category=${category}`;
  if (difficulty) url += `&difficulty=${difficulty}`;
  url += `&type=multiple`;
  
  return url;
}

/**
 * 
 * @param {string} category 
 * @returns {string} id de categoria o undefined si no encuentra la categoria especificada
 */
export function getCategory(category: string): number | undefined { 
  const [principalCategory, subCategory] = category.toLowerCase().split(":").map(c => c.trim())
  
  if(!subCategory) {
    const id = (categories[principalCategory]) as number
    return id
  }

  if (typeof categories[principalCategory] === "object" && categories[principalCategory] !== null) {
    const id = (categories[principalCategory] as Record<string, number>)[subCategory];
    return id
  }
  return undefined
}