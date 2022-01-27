/* eslint-disable react/button-has-type */
import React from "react";

function InformationNotice({
  inputField,
  index,
  handleChangeInput,
  handleDeleteFields,
}) {
  return (
    <div style={{ border: "2px solid red" }}>
      <div>
        <h3>
          정보고시 <span>{index + 1}</span>
        </h3>
        <button onClick={(event) => handleDeleteFields(index, event)}>
          삭제
        </button>
      </div>
      <div>
        <span>제품명 / 중량</span>
        <input
          type="text"
          name="nameAndWeight"
          id="nameAndWeight"
          placeholder="제품명 / 중량을 입력해 주세요."
          onChange={(event) => handleChangeInput(index, event)}
          value={inputField.nameAndWeight}
        />
      </div>
      <div>
        <span>원산지 / 원재료 함량</span>
        <input
          type="text"
          name="originAndIngredient"
          id="originAndIngredient"
          placeholder="원산지 / 원재 함량을 입력해 주세요."
          onChange={(event) => handleChangeInput(index, event)}
          value={inputField.originAndIngredient}
        />
      </div>
      <div>
        <span>등급</span>
        <input
          type="text"
          name="grade"
          id="grade"
          placeholder="등급(근내지방도 수치)를 입력해 주세요."
          onChange={(event) => handleChangeInput(index, event)}
          value={inputField.grade}
        />
      </div>
      <div>
        <span>보관</span>
        <input
          type="text"
          name="storeMethod"
          id="storeMethod"
          placeholder="보관 방식을 입력해 주세요."
          onChange={(event) => handleChangeInput(index, event)}
          value={inputField.storeMethod}
        />
      </div>
      <div>
        <span>식품 유형</span>
        <input
          type="text"
          name="typesOfFood"
          id="typesOfFood"
          placeholder="식품 유형을 입력해 주세요. (ex) 포장육"
          onChange={(event) => handleChangeInput(index, event)}
          value={inputField.typesOfFood}
        />
      </div>

      {/* <div style={{ border: "2px solid blue" }}>
        <input
          type="text"
          name="additionalKey"
          id="additionalKey"
          placeholder="항목 제목 자유 입력"
          onChange={onChange}
          value={additionalKey}
        />
        <input
          type="text"
          name="additionalContent"
          id="additionalContent"
          placeholder="내용을 입력해주세요."
          onChange={onChange}
          value={additionalContent}
        />
        <button>삭제</button>
      </div> */}

      {/* <button onClick={onClick}>+ 항목 추가</button> */}
    </div>
  );
}

export default InformationNotice;
