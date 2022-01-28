import React from "react";
import * as S from "./styled";

function Cate({ cate, removeCate }) {
  return (
    <S.Cate>
      {cate.text}
      <button onClick={() => removeCate(cate.id)}>X</button>
    </S.Cate>
  );
}

export default Cate;
