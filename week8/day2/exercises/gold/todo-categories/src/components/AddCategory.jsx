import React, { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/actions";

function AddCategory({ addCategory }) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") return;
    addCategory(categoryName.trim());
    setCategoryName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle catégorie"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type="submit">Ajouter Catégorie</button>
    </form>
  );
}

export default connect(null, { addCategory })(AddCategory);
