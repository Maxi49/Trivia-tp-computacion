

type CategoryCardProps = {
    categoryName: string;
    id: number;
    onSelectCategory: (id: number) => void;
};

export function CategoryCard({ categoryName, id, onSelectCategory }: CategoryCardProps) {
    return (
        <div className="category-card" onClick={() => onSelectCategory(id)}>
            <span className="category-card-text">{categoryName}</span>
        </div>
    );
}

type DifficultyCard = {
    difficulty: string;
    onSelectDifficulty: (difficulty: string) => void;
};

export function DifficultyCard({ difficulty, onSelectDifficulty }: DifficultyCard) {

    return (
        <div className="difficulty-card" onClick={() => onSelectDifficulty(difficulty)}>
            {difficulty}
        </div>
    )
}

export default CategoryCard;
