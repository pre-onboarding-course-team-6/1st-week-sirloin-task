/* eslint-disable  */
import React, { useEffect, useRef, useState } from "react";
import {ImageInputBtn,FlexBox, FileDeleBtn,FileName} from "../Styled/styled"

function ImageAttachment({ type, name, handleChangeInput }) {
  const [imgFiles, setImgFiles] = useState([]);

  const imgInput = useRef(null);

  const onImgInputBtnClick = (event) => {
    event.preventDefault();
    imgInput.current.click();
  };

  const onImgChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      if (type === "multiple") {
        setImgFiles([
          ...imgFiles,
          {
            name: file.name,
          },
        ]);
      } else {
        setImgFiles([
          {
            name: file.name,
          },
        ]);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImgDelete = (index, event) => {
    event.preventDefault();

    const result = imgFiles.filter((_, objIndex) => index !== objIndex);

    setImgFiles(result);
  };

  // 이미지 파일 추가되면 handleChangeInput 호출
  useEffect(() => {
    imgFiles.length && handleChangeInput(null, name, imgFiles);
  }, [imgFiles]);
  const left = "{{";
  const right = "}}";

  return (
    <FlexBox>
      <input
        ref={imgInput}
        type="file"
        id="imgInput"
        accept="image/*"
        name="file"
        onChange={onImgChange}
        style={{ display: "none" }}
        />
      <ImageInputBtn onClick={onImgInputBtnClick}>+ 이미지 추가</ImageInputBtn>
      {imgFiles.map((file, index) => (
        <FileName key={index}>
          <span>{left}{file.name}{right}</span>
          <FileDeleBtn onClick={(event) => handleImgDelete(index, event)}>x</FileDeleBtn>
        </FileName>
      ))}
    </FlexBox>
  );
}

export default ImageAttachment;
