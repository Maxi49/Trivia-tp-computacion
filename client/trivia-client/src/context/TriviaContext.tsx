import React, { createContext, useContext, ReactNode } from 'react';

interface TriviaContextType {
    selectedCategory: number | null;
    setSelectedCategory: (category: number) => void;
    selectedDifficulty: string | null;
    setSelectedDifficulty: (difficulty: string) => void;
}

const TriviaContext = createContext <TriviaContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTriviaContext = () : TriviaContextType => {
    const context = useContext(TriviaContext);
    if (!context) {
        throw new Error('useTriviaContext must be used within a TriviaProvider');
    }
    return context;
}

interface TriviaProviderProps {
    children: ReactNode;}

export const TriviaProvider : React.FC<TriviaProviderProps> = ({children}) => {
    const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = React.useState<string | null>(null);

    return (
        <TriviaContext.Provider 
        value={{ selectedCategory, setSelectedCategory, selectedDifficulty, setSelectedDifficulty }}>
            {children}
        </TriviaContext.Provider>
    );
}