
import { Link } from "react-router-dom";
import { useTriviaContext } from "../context/TriviaContext";
import "../Categories.css"
import { useEffect, useState } from "react";
import { getCategories } from "../api/api";

type CategoryCardProps = {
    categoryName: string;
    id: number;
    onSelectCategory: (id: number) => void;
};

export type Category = {
  name: string;
  id: number;
}

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
  const [categories, setCategories] = useState< Array<Category> | null>([])
  
  const { selectedCategory, setSelectedCategory } = useTriviaContext();

  useEffect(() => {
    const categories = async() => {
      setCategories(await getCategories())
    }
    categories()
  }, [selectedCategory, setSelectedCategory])

  if(categories == null) {
    return <h1>Loading</h1>
  }
    console.log(categories)
    return (
        <>
            <div className="category-all">
                <h1 className="category-title">CATEGORIAS</h1>
                <section className="category-card-container">
                    {
                      categories.map(c => (
                            <CategoryCard
                              key={c.id}
                              categoryName={c.name}
                                id={c.id}
                                onSelectCategory={() => setSelectedCategory(c.id)
                              }
                            />
                      ))

                    }
                </section>
            </div>
        </>
    );

};

export default Categories