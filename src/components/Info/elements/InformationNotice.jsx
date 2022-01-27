/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { INFO_NOTI_MORE_TEMPLATE } from "../../../commons/constants/templates";
import MoreInfoNoti from "./MoreInfoNoti";

function InformationNotice({
  inputField,
  index,
  handleChangeInput,
  handleDeleteFields,
  mergeToInputFields,
}) {
  const [moreFields, setMoreFields] = useState([
    { ...INFO_NOTI_MORE_TEMPLATE },
  ]);

  const handleChangeMore = (moreIndex, event) => {
    const values = [...moreFields];
    values[moreIndex][event.target.name] = event.target.value;

    setMoreFields(values);
    mergeToInputFields(index, values);
  };

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

      {moreFields.map((moreField, moreIndex) => (
        <MoreInfoNoti
          key={moreIndex}
          moreField={moreField}
          moreIndex={moreIndex}
          handleChangeMore={handleChangeMore}
          //   handleDeleteFields={handleDeleteFields}
        />
      ))}

      {/* <button onClick={onClick}>+ 항목 추가</button> */}
    </div>
  );
}

export default InformationNotice;
