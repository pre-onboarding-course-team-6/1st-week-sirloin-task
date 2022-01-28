import React, { useRef } from "react";

function ImagePreview({ optionField, onChange }) {
  const fileInputRef = useRef();

  const uploadImage = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <form>
      {optionField.image ? (
        <img src={optionField.image} alt="preveiw" style={{ width: "100px" }} />
      ) : (
        <button type="button" onClick={(e) => uploadImage(e)}>
          + 이미지 첨부
        </button>
      )}
      <input
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChange}
      />
    </form>
  );
}

export default ImagePreview;
