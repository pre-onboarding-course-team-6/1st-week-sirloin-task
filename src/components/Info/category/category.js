import React, { useState } from "react";
import * as S from "./styled";
import { categoryList } from "./categoryList";

function Category() {
  const [isChecked, setIsChecked] = useState(false); // 체크 여부
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 요소들
  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    // eslint-disable-next-line no-use-before-define
    checkedItemHandler(target.value, target.id, target.checked);
  };

  // eslint-disable-next-line no-shadow
  const checkedItemHandler = (value, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(value);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(value)) {
      checkedItems.delete(value);
      setCheckedItems(checkedItems);
    }
    return checkedItems;
  };

  const removeCate = (id) => {
    setCheckedItems(
      Array.from(checkedItems).filter((cate) => {
        return cate.id !== id;
      })
    );
  };

  const renderCategory = Array.from(checkedItems).length
    ? Array.from(checkedItems).map((cate) => (
        <S.Cate cate={cate} key={cate.id} id={cate.id} removeCate={removeCate}>
          <span>{cate}</span>
          <button onClick={() => removeCate(cate.id)} type="button">
            X
          </button>
        </S.Cate>
      ))
    : "카테고리를 지정해 주세요";

  return (
    <tr>
      <S.Content>카테고리</S.Content>
      <S.SettingBox colSpan="3">
        <S.Box50>
          {categoryList.map((cate) => (
            <div>
              <input
                key={cate.id}
                id={cate.id}
                type="checkbox"
                name="category"
                value={cate.text}
                onChange={(e) => checkHandler(e)}
              />
              <label htmlFor="category">{cate.text}</label>
            </div>
          ))}
        </S.Box50>
        <S.Box50>
          <S.UL>{renderCategory}</S.UL>
        </S.Box50>
      </S.SettingBox>
    </tr>
  );
}

export default Category;
