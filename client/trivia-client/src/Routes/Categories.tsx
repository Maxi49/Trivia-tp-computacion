import { useState } from "react";
import { CategoryCard } from "../OptionCards";
import { createContext } from "react";


export const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const categories = [
        { categoryName: "geography", id: 22 },
        { categoryName: "history", id: 23 },
        { categoryName: "politics", id: 24 },
        { categoryName: "art", id: 25 },
        { categoryName: "celebrities", id: 26 }
    ];

    function saveContext() {
        const GameContext = createContext(selectedCategory)
    }

    return (
        <>
            <section className="category-card-container">
                {categories.map(({ categoryName, id }) => (
                    <CategoryCard
                        key={id}
                        categoryName={categoryName}
                        id={id}
                        onSelectCategory={(id) => {setSelectedCategory(id), saveContext()}}
                    />
                ))}
            </section>
            {selectedCategory !== null && (
                <p>Categoría seleccionada: {selectedCategory}</p>
            )}
        </>
    );
};

export default Categories