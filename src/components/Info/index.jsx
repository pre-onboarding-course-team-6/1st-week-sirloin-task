import React, { useEffect, useState } from "react";
import ImageAttachment from "components/RecommendImage/element/ImageAttachment";
import * as S from "./styled";

function Info() {
  const [inputFields, setInputFields] = useState({});
  const [productCode, setProductCode] = useState("");

  useEffect(() => {
    const randNum = Math.floor(Math.random() * 10000000000);

    setProductCode(randNum.toString(16).toUpperCase());
  }, []);

  const handleChangeInput = (event) => {
    const values = { ...inputFields };
    values[event.target.name] = event.target.value;

    setInputFields(values);
    console.log(inputFields);
  };

  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Title colSpan="2">상품 기본 정보</S.Title>
        </tr>
        <tr>
          <S.Content>상품명</S.Content>
          <S.SplitLeftBox>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="상품명을 입력해 주세요."
              onChange={handleChangeInput}
            />
          </S.SplitLeftBox>
          <S.Content>상품코드</S.Content>
          <S.SplitRightBox>
            <span>{productCode}</span>
          </S.SplitRightBox>
        </tr>
        <tr>
          <S.Content>상품 구성 소개 정보</S.Content>
          <S.SettingBox colSpan="3">
            <input
              type="text"
              name="productComposition"
              id="productComposition"
              placeholder="상품 구성 소개 정보를 입력해 주세요."
              onChange={handleChangeInput}
            />
          </S.SettingBox>
        </tr>
        <tr>
          <S.Content>상품 썸네일</S.Content>
          <S.SettingBox colSpan="3">
            <ImageAttachment type="single" />
          </S.SettingBox>
        </tr>
        <tr>
          <S.Content>상품 대표 이미지</S.Content>
          <S.SettingBox colSpan="3">
            <ImageAttachment type="multiple" />
          </S.SettingBox>
        </tr>
        <tr>
          <S.Content>상품 총 재고</S.Content>
          <S.SettingBox colSpan="3">
            <span>{"{{NN}}개"}</span>
          </S.SettingBox>
        </tr>
      </tbody>
    </S.Table>
  );
}

export default Info;
