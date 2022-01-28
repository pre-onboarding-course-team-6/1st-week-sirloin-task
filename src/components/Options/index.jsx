import React from "react";

function Options() {
  return (
    <div>
      <h1>options</h1>
      <button type="button">삭제</button>
      <input type="text" placeholder="옵션명을 입력해주세요" />
      <input type="text" placeholder="상품 정상가(필수)" />
      <input type="text" placeholder="상품 판매가" />
      <input type="text" placeholder="재고(필수)" />
      <select name="taxes" id="taxes">
        <option value="notax">비과세</option>
        <option value="tax">과세</option>
      </select>
    </div>
  );
}

export default Options;
