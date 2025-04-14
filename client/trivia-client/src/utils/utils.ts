export function generateUrl(amount: number = 5, category: number, difficulty: string) {
  let url = `https://opentdb.com/api.php?amount=${amount}`;

  if (category) url += `&category=${category}`;
  if (difficulty) url += `&difficulty=${difficulty}`;
  url += `&type=multiple`;


  return url;
}
