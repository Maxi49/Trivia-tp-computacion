import React, { createContext, useContext, ReactNode } from 'react';

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

interface TriviaContextType {
    selectedCategory: number | null;
    setSelectedCategory: (category: number | null) => void;
    selectedDifficulty: string | null;
    setSelectedDifficulty: (difficulty: string | null) => void;
    score: number;
    setScore: (score: number) => void;
    questionIndex: number;
    setQuestionIndex: (index: number) => void;
    results: Array<Question>;
    setResults: (questions: Array<Question>) => void;
    resetGame: () => void; 
}

const TriviaContext = createContext<TriviaContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTriviaContext = (): TriviaContextType => {
    const context = useContext(TriviaContext);
    if (!context) {
        throw new Error('useTriviaContext must be used within a TriviaProvider');
    }
    return context;
}

interface TriviaProviderProps {
    children: ReactNode;
}

export const TriviaProvider: React.FC<TriviaProviderProps> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = React.useState<string | null>(null);
    const [score, setScore] = React.useState(0)
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const [results, setResults] = React.useState<Array<Question>>([]);

    const resetGame = () => {
      setQuestionIndex(0);
      setScore(0);
      setResults([]);
    };


    return (
        <TriviaContext.Provider
            value={{ 
              selectedCategory, setSelectedCategory, selectedDifficulty, setSelectedDifficulty, score, setScore, 
              questionIndex, setQuestionIndex,
              results, setResults,
              resetGame
            }}>
            {children}
        </TriviaContext.Provider>
    );
}