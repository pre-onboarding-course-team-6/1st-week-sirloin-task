import React, { useState } from "react";

function AddForm({ addCate }) {
  const [category, setCategory] = useState("");
  const resetForm = () => {
    setCategory("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addCate({
      id: 0,
      text: category,
    });
    resetForm();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={category}
        placeholder="영화제목"
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <button type="submit">영화추가</button>
    </form>
  );
}

export default AddForm;
