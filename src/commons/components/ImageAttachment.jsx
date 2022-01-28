/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";

function ImageAttachment({ children, type, name, handleChangeInput }) {
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

  return (
    <div>
      <h3>{children}</h3>
      <input
        ref={imgInput}
        type="file"
        id="imgInput"
        accept="image/*"
        name="file"
        onChange={onImgChange}
        style={{ display: "none" }}
      />
      <button onClick={onImgInputBtnClick}>+ 이미지 추가</button>
      {imgFiles.map((file, index) => (
        <div key={index} style={{ border: "1px solid red" }}>
          <span>{file.name}</span>
          <button onClick={(event) => handleImgDelete(index, event)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default ImageAttachment;
