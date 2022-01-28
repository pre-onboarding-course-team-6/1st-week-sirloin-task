import React, { useState, useRef } from "react";
import * as S from "./styled";

function Options(props) {
  const { id, handleRemoveOptions, parentId } = props;
  return (
    <S.OptionBox>
      <S.BtnRightBox>
        <S.DelBtn
          type="button"
          value={parentId}
          id={id}
          onClick={handleRemoveOptions}
        >
          삭제
        </S.DelBtn>
      </S.BtnRightBox>
      <div>
        <S.LongInput type="text" placeholder="옵션명을 입력해주세요(필수)" />
      </div>
      <div>
        <input type="text" placeholder="상품 정상가(필수)" />
        <input type="text" placeholder="상품 판매가" />
        <input type="text" placeholder="재고(필수)" />
        <select name="taxes" id="taxes">
          <option value="notax">비과세</option>
          <option value="tax">과세</option>
        </select>
      </div>
    </S.OptionBox>
  );
}

function ImagePreview({ optionField, onChange }) {
  const fileInputRef = useRef();

  const uploadImage = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <S.Form>
      {optionField.image ? (
        <S.Image src={optionField.image} alt="preveiw" />
      ) : (
        <S.ImageAddBtn type="button" onClick={(e) => uploadImage(e)}>
          + 이미지 첨부
        </S.ImageAddBtn>
      )}
      <input
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChange}
      />
    </S.Form>
  );
}

function Option() {
  const [optionFields, setOptionFields] = useState([]);

  const handleAddOptions = (index) => {
    const temp = optionFields.map((option, i) => {
      if (i === index) {
        const temp2 = option.optionInfo;
        return {
          ...option,
          optionInfo: [
            ...temp2,
            {
              name: "",
              origin_price: "",
              sale_price: "",
              stocks: 0,
              tax: "",
            },
          ],
        };
      }
      return option;
    });
    setOptionFields(temp);
  };

  const handleRemoveOptions = (e) => {
    const parentId = Number(e.target.value);
    const childId = Number(e.target.id);
    const newOptionInfo = [...optionFields[parentId].optionInfo];
    newOptionInfo.splice(childId, 1);
    const newOptionSet = optionFields.map((option, i) => {
      if (i !== parentId) {
        return option;
      }
      return { ...option, optionInfo: newOptionInfo };
    });
    setOptionFields(newOptionSet);
  };

  const handleAddFileds = () => {
    setOptionFields([
      ...optionFields,
      {
        id: optionFields.length,
        image: null,
        optionInfo: [
          {
            name: "",
            origin_price: "",
            sale_price: "",
            stocks: 0,
            tax: "",
          },
        ],
      },
    ]);
  };
  const handleRemoveFileds = (id) => {
    const temp = [...optionFields];
    if (temp.length > 1) {
      temp.splice(id, 1);
      setOptionFields(temp);
    } else {
      setOptionFields([]);
    }
  };

  const imagePreview = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const temp = optionFields.map((option, i) => {
          if (i === index) {
            return { ...option, image: reader.result };
          }
          return option;
        });
        setOptionFields(temp);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <S.MainBox>
      <S.FlexBox>
        <S.Title>상품옵션*</S.Title>
        <S.PurpleBtn type="button" onClick={handleAddFileds}>
          +옵션세트추가
        </S.PurpleBtn>
      </S.FlexBox>
      <S.GreyBox>
        {optionFields.map((optionField, index) => (
          <>
            <S.BtnRightBox>
              <S.DelBtn type="button" onClick={() => handleRemoveFileds(index)}>
                삭제
              </S.DelBtn>
            </S.BtnRightBox>
            <S.WhiteBox>
              <S.ImageBox key={optionField.id}>
                <ImagePreview
                  optionField={optionField}
                  onChange={(e) => imagePreview(e, index)}
                />
              </S.ImageBox>
              {optionField.optionInfo.map((option, i) => (
                <Options
                  options={option}
                  id={i}
                  parentId={index}
                  handleRemoveOptions={handleRemoveOptions}
                />
              ))}
              <button type="button" onClick={() => handleAddOptions(index)}>
                + 옵션추가
              </button>
            </S.WhiteBox>
          </>
        ))}
        {optionFields.length > 0 || (
          <div>옵션세트를 추가하여 옵션을 구성해주세요</div>
        )}
      </S.GreyBox>
    </S.MainBox>
  );
}

export default Option;
