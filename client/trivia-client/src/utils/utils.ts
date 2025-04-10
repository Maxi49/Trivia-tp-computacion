export const categories: Record<string, number | object> = {
  "General knowledge": 9,
  "Entertainment": {
    "Books": 10,
    "Film": 11,
    "Music": 12,
    "Musical & theatres": 13,
    "Television": 14,
    "Video games": 15,
    "Board games": 16,
    "Comics": 29,
    "Japanese anime & manga": 31,
    "Cartoons & animations": 32,
  },
  "Science & nature": 17,
  "Science": {
    "computers": 18,
    "mathematics": 19,
    "gadgets": 30
  },
  "Mythology": 20,
  "Sports": 21,
  "Geography": 22,
  "History": 23,
  "Politics": 24,
  "Art": 25,
  "Celebrities": 26,
  "Animals": 27,
  "Vehicles": 28
}

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
