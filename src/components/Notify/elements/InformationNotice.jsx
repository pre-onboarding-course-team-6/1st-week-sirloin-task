/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import {
  TitleDiv,
  BlackDelBtn,
  ContentInfo,
  InputBox,
  TableRow,
  CustomInput,
  AddBtn,
} from "commons/Styled/styled";
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

  const handleDeleteMore = (moreIndex, event) => {
    event.preventDefault();

    if (moreIndex === 0) {
      return alert("추가 항목은 필수로 입력을 안하셔도 좋습니다.");
    }

    if (window.confirm("정말 삭제하시겠습니까?")) {
      const result = [...moreFields];
      result.splice(index, 1);
      setMoreFields(result);
    }
  };

  const handleAddFields = (e) => {
    e.preventDefault();

    setMoreFields([...moreFields, { ...INFO_NOTI_MORE_TEMPLATE }]);
  };

  const handleChangeMore = (moreIndex, event) => {
    const values = [...moreFields];
    values[moreIndex][event.target.name] = event.target.value;

    setMoreFields(values);
    mergeToInputFields(index, values); // 정보 고시에 merge
  };

  const left = "{{";
  const right = "}}";

  return (
    <>
      <TableRow>
        <td>
          <TitleDiv>
            정보고시{" "}
            <span>
              {left}
              {index + 1}
              {right}
            </span>
          </TitleDiv>
        </td>
        <td style={{ textAlign: "right" }}>
          <BlackDelBtn onClick={(event) => handleDeleteFields(index, event)}>
            삭제
          </BlackDelBtn>
        </td>
      </TableRow>

      <TableRow>
        <ContentInfo>제품명 / 중량</ContentInfo>
        <InputBox>
          <CustomInput
            style={{ width: "360px" }}
            type="text"
            name="nameAndWeight"
            id="nameAndWeight"
            placeholder="제품명 / 중량을 입력해 주세요."
            onChange={(event) => handleChangeInput(index, event)}
            value={inputField.nameAndWeight}
          />
        </InputBox>
      </TableRow>
      <TableRow>
        <ContentInfo>원산지 /원재료 함량</ContentInfo>
        <InputBox>
          <CustomInput
            style={{ width: "360px" }}
            type="text"
            name="originAndIngredient"
            id="originAndIngredient"
            placeholder="원산지 / 원재 함량을 입력해 주세요."
            onChange={(event) => handleChangeInput(index, event)}
            value={inputField.originAndIngredient}
          />
        </InputBox>
      </TableRow>
      <TableRow>
        <ContentInfo>등급</ContentInfo>
        <InputBox>
          <CustomInput
            style={{ width: "360px" }}
            type="text"
            name="grade"
            id="grade"
            placeholder="등급(근내지방도 수치)를 입력해 주세요."
            onChange={(event) => handleChangeInput(index, event)}
            value={inputField.grade}
          />
        </InputBox>
      </TableRow>
      <TableRow>
        <ContentInfo>보관</ContentInfo>
        <InputBox>
          <CustomInput
            style={{ width: "360px" }}
            type="text"
            name="storeMethod"
            id="storeMethod"
            placeholder="보관 방식을 입력해 주세요."
            onChange={(event) => handleChangeInput(index, event)}
            value={inputField.storeMethod}
          />
        </InputBox>
      </TableRow>
      <TableRow>
        <ContentInfo>식품 유형</ContentInfo>
        <InputBox>
          <CustomInput
            style={{ width: "360px" }}
            type="text"
            name="typesOfFood"
            id="typesOfFood"
            placeholder="식품 유형을 입력해 주세요. (ex) 포장육"
            onChange={(event) => handleChangeInput(index, event)}
            value={inputField.typesOfFood}
          />
        </InputBox>
      </TableRow>

      {moreFields.map((moreField, moreIndex) => (
        <MoreInfoNoti
          key={moreIndex}
          moreField={moreField}
          moreIndex={moreIndex}
          handleChangeMore={handleChangeMore}
          handleDeleteMore={handleDeleteMore}
        />
      ))}
      <TableRow>
        <td>
          <AddBtn onClick={handleAddFields}>+ 항목 추가</AddBtn>
        </td>
      </TableRow>
    </>
  );
}

export default InformationNotice;
