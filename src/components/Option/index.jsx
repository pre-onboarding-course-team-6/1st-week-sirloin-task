import ImagePreview from "components/ImagePreview";
import React, { useState } from "react";

function Option() {
  const [optionFields, setOptionFields] = useState([]);

  const handleAddFileds = () => {
    setOptionFields([
      ...optionFields,
      { id: optionFields.length, image: null, options: "" },
    ]);
  };
  const handleRemoveFileds = (id) => {
    console.log(id);
    const options = [...optionFields];
    if (options.length > 1) {
      options.splice(id, 1);
      setOptionFields(options);
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
        console.log(index);
        setOptionFields(temp);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div>
        <h1>상품옵션</h1>
        <button type="button" onClick={handleAddFileds}>
          옵션세트추가
        </button>
      </div>
      {optionFields.map((optionField, index) => (
        <div
          key={optionField.id}
          style={{ width: "300px", backgroundColor: "grey" }}
        >
          <button type="button" onClick={() => handleRemoveFileds(index)}>
            삭제
          </button>
          <ImagePreview
            optionField={optionField}
            onChange={(e) => imagePreview(e, index)}
          />
        </div>
      ))}
      {optionFields.length > 0 || (
        <div>옵션세트를 추가하여 옵션을 구성해주세요</div>
      )}
    </div>
  );
}

export default Option;
