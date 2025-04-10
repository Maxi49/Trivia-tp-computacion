import { useNavigate } from "react-router-dom"
import { useTriviaContext } from "../context/TriviaContext"

const enum Options {
  START = 'start',
  REPEAT = 'repeat'
}

export function FinalPage() {
  const { score, setScore, setSelectedDifficulty, setSelectedCategory, resetGame} = useTriviaContext()

  const navigator = useNavigate()
  const handleOption = (option: string) => {
      setScore(0)
    
      if (option === Options.START) {
        setSelectedCategory(null)
        setSelectedDifficulty('')
        navigator('/Categories')
        
        return
      }
      
      if(option === Options.REPEAT) {
        resetGame()
        navigator('/Game')        
        return
      }
    }
  
  
  return (
    <section className="final-page">
    
      <h1>Your final score is</h1>
      <h1>{score}</h1>

      <button onClick={() => handleOption(Options.START)}>Play Again?</button>
      <button onClick={() => handleOption(Options.REPEAT)}>Another try?</button>
      
    </section>
  )
}