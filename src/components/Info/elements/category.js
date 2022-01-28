import React, { useState } from "react";
import * as S from "./styled";
import { categoryList } from "./categoryList";
import Cate from "./Cate";
// import AddForm from "./addFrom";

function Category() {
  const [addCategory, setAddCategory] = useState(categoryList);

  const [isChecked, setIsChecked] = useState(false); //체크 여부
  const [checkedItems, setCheckedItems] = useState(new Set());//체크된 요소들

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems); 
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    return checkedItems;
  };


  const removeCate = (id) => {
    setAddCategory(addCategory.filter(movie => {
      return movie.id !== id;
    }));
  };
  

  const renderCategory = categoryList.length ? Array.from(checkedItems).map((cate) => {
    return (
      <Cate 
      cate={cate} 
      key={cate.id}
      removeCate = {removeCate}
      />
    );
  }) : '카테고리를 지정해 주세요'

  const addCate = (cate) => {
    setAddCategory([
      ...addCategory,
      cate
    ]);
  };

  return (
    <>
      <S.Box50>
        {categoryList.map((cate, index) => (
          <div key={index}>
            <input type="checkbox" name="category" value={cate.text} onChange={(e) => checkHandler(e)} />
            {cate.text}
          </div>
        ))}
      </S.Box50>
      <S.Box50>
        <div>{checkedItems}</div>
        <ul>
          {renderCategory}
        </ul>

          
      </S.Box50>
    </>
  );
}

export default Category;
