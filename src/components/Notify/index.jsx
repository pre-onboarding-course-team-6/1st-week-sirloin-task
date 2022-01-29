/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Table, FullBtn } from "commons/Styled/styled";
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

    // 객체 -> 배열 -> 필터링 -> 객체
    const result = inputFields.map((obj) => {
      const parsedArr = Object.entries(obj).filter((arr) => arr[1] !== "");

      return Object.fromEntries(parsedArr);
    });

    console.log(result);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;

    setInputFields(values);
  };

  const mergeToInputFields = (index, moreValues) => {
    moreValues.forEach((obj) => {
      const [moreKey, moreValue] = Object.values(obj);

      // 추가 항목의 key나 value가 공백이면 merge 무시
      if (moreKey === "" || moreValue === "") return;

      const values = [...inputFields];
      values[index][moreKey] = moreValue;

      setInputFields(values);
    });
  };

  return (
    <Table>
      <tbody>
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
        <div>
          <form>
            <FullBtn onClick={handleAddFields}>+ 정보고시 추가</FullBtn>
            <br />
            <FullBtn onClick={handleSubmit}>정보고시 console 출력</FullBtn>
          </form>
        </div>
      </tbody>
    </Table>
  );
}

export default Info;
