
import { Link } from "react-router-dom";
import { useTriviaContext } from "../context/TriviaContext";
import { categories } from "../utils/utils";
import "../Categories.css"

type CategoryCardProps = {
    categoryName: string;
    id: number;
    onSelectCategory: (id: number) => void;
};

function CategoryCard({ categoryName, id, onSelectCategory }: CategoryCardProps) {
    return (

        <Link to='/Difficulties' className="category-card-link">
            <div className="category-card" onClick={() => onSelectCategory(id)}>
                <span className="category-card-text">{categoryName}</span>
            </div>
        </Link>
    );
}

export const Categories = () => {

    const { setSelectedCategory } = useTriviaContext();

    return (
        <>
            <div className="category-all">
                <h1 className="category-title">CATEGORIAS</h1>
                <section className="category-card-container">
                    {Object.entries(categories).map(([categoryName, id]) => {
                        // Si el valor es un número, renderizamos la categoría normalmente
                        if (typeof id === "number") {
                            return (
                                <CategoryCard
                                    key={id}
                                    categoryName={categoryName}
                                    id={id}
                                    onSelectCategory={(id) => {
                                        setSelectedCategory(id)
                                    }

                                    }
                                />
                            );
                        }

                        // Si el valor es un objeto, recorremos sus subcategorías
                        if (typeof id === "object") {
                            return Object.entries(id).map(([subCategoryName, subId]) => (
                                <CategoryCard
                                    key={subId as number} // Forzamos el tipo, ya que sabemos que será un número
                                    categoryName={`${subCategoryName}`} // "entretenimiento - música"
                                    id={subId as number}
                                    onSelectCategory={(id) => setSelectedCategory(id)}
                                />
                            ));
                        }

                        return null;
                    })}

                </section>
            </div>
        </>
    );

};




export default Categories