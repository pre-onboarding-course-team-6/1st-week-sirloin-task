/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import InformationNotice from "./elements/InformationNotice";
import { INFO_NOTI_TEMPLATE } from "../../commons/constants/templates";

function Info() {
  const [inputFields, setInputFields] = useState([{ ...INFO_NOTI_TEMPLATE }]);

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <InformationNotice
            key={index}
            inputField={inputField}
            index={index}
            handleChangeInput={handleChangeInput}
          />
        ))}
      </form>
      <button onClick={handleAddFields}>+ 정보고시 추가</button>
      <button onClick={handleSubmit}>정보고시 console 출력</button>
    </>
  );
}

export default Info;
