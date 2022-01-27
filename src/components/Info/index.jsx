/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import InformationNotice from "./elements/InformationNotice";
import { INFO_NOTI_TEMPLATE } from "../../commons/constants/templates";

function Info() {
  const [inputFields, setInputFields] = useState([{ ...INFO_NOTI_TEMPLATE }]);

  const handleDeleteFields = (index, event) => {
    event.preventDefault();

    if (index === 0) {
      return alert("하나 이상의 정보고시는 존재해야 합니다.");
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      const result = [...inputFields];
      result.splice(index, 1);
      setInputFields(result);
    }
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { ...INFO_NOTI_TEMPLATE }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputFields);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;

    setInputFields(values);
  };

  const mergeToInputFields = (index, moreValues) => {
    moreValues.forEach((obj) => {
      const [moreKey, moreValue] = Object.values(obj);

      const values = [...inputFields];
      values[index][moreKey] = moreValue;

      setInputFields(values);
    });
  };

  return (
    <>
      <form>
        {inputFields.map((inputField, index) => (
          <InformationNotice
            key={index}
            inputField={inputField}
            index={index}
            handleChangeInput={handleChangeInput}
            handleDeleteFields={handleDeleteFields}
            mergeToInputFields={mergeToInputFields}
          />
        ))}
      </form>
      <button onClick={handleAddFields}>+ 정보고시 추가</button>
      <button onClick={handleSubmit}>정보고시 console 출력</button>
    </>
  );
}

export default Info;
