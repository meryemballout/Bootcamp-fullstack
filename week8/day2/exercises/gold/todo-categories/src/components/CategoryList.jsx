import React from "react";
import { connect } from "react-redux";
import Category from "./Category";
import AddCategory from "./AddCategory";

function CategoryList({ categories }) {
  const categoryNames = Object.keys(categories);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Todo List avec Catégories</h1>
      <AddCategory />
      {categoryNames.length === 0 && <p>Aucune catégorie. Ajoute-en une !</p>}
      {categoryNames.map((name) => (
        <Category key={name} categoryName={name} todos={categories[name]} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(CategoryList);
