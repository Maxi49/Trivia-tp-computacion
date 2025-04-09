import { useTriviaContext } from "../context/TriviaContext";

export function GameFinished() {
  const { points } = useTriviaContext();

  return (
  <h1>{ points }</h1>
  )
}