/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import ImageAttachment from "../../commons/components/ImageAttachment";
import FilterSearchResult from "./elements/FilterSearchResult";
import * as S from "./styled";

const productCode = Math.floor(Math.random() * 10000000000)
  .toString(16)
  .toUpperCase();

function Info() {
  const [inputFields, setInputFields] = useState({ productCode });
  const [isFocusOn, setIsFocusOn] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChangeInput = (event, key, imgFiles = []) => {
    const values = { ...inputFields };
    imgFiles.length === 0
      ? (values[event.target.name] = event.target.value)
      : (values[key] = imgFiles);

    setInputFields(values);
  };

  const handleFocus = () => {
    setIsFocusOn((prev) => !prev);
  };

  const handleDeleteFilterTag = (event, index) => {
    console.log(event, index);
  };

  // state 확인용 => App.js에서 최종 머지후 제거
  useEffect(() => {
    console.log(`selectedTags : ${selectedTags}`);
  }, [selectedTags]);

  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Title colSpan="2">상품 기본 정보</S.Title>
        </tr>
        <tr>
          <S.Content>필터태그</S.Content>
          <S.SettingBox colSpan="3">
            <input
              type="text"
              name="filterSearch"
              id="filterSearch"
              placeholder="상품명을 입력해 주세요."
              onFocus={handleFocus}
              // onBlur={handleFocus}
              onChange={handleChangeInput}
            />
            {isFocusOn && (
              <FilterSearchResult
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            )}
            {selectedTags.length > 0 && (
              <S.SelectedTag>
                <div>지정된 필터 태그</div>
                <S.TagListBox>
                  {selectedTags.map((tag, index) => (
                    <S.FilterTag
                      key={index}
                      onClick={(event) => handleDeleteFilterTag(event, index)}
                    >
                      {tag}
                      {" X"}
                    </S.FilterTag>
                  ))}
                </S.TagListBox>
              </S.SelectedTag>
            )}
          </S.SettingBox>
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
            <span>{inputFields.productCode}</span>
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
            <ImageAttachment
              type="single"
              name="productThumbnail"
              handleChangeInput={handleChangeInput}
            />
          </S.SettingBox>
        </tr>
        <tr>
          <S.Content>상품 대표 이미지</S.Content>
          <S.SettingBox colSpan="3">
            <ImageAttachment
              type="multiple"
              name="productRepresent"
              handleChangeInput={handleChangeInput}
            />
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
