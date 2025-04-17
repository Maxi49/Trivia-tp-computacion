import { useNavigate } from "react-router-dom"
import { useTriviaContext } from "../context/TriviaContext"
import "../Game.css"
const enum Options {
  START = 'start',
  REPEAT = 'repeat'
}

export function FinalPage() {
  const { resetGame, restartRound, score } = useTriviaContext()

  const navigator = useNavigate()
  const handleOption = (option: string) => {
    if (option === Options.START) {
      resetGame();
      navigator('/');
      return;
    }

    if (option === Options.REPEAT) {
      restartRound(); // ← reinicia ronda pero mantiene dificultad y categoría
      navigator('/Game');
      return;
    }
  };



  return (
    <section className="container-all">
      <div className="question-card">
        <h1>Your final score is</h1>
        <h1>{score}</h1>

        <button className="answer-button" onClick={() => handleOption(Options.START)}> Play Again </button>
        <button className="answer-button" onClick={() => handleOption(Options.REPEAT)}> Restart</button>
      </div>
    </section>
  )
}