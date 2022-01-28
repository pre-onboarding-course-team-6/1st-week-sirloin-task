import React from "react";

function OptionSet() {
  return (
    <div>
      <button type="button">삭제</button>
      <div>
        <div style={{ width: "100px" }}>
          <input
            type="file"
            name="image-uploader"
            id="input"
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
}

export default OptionSet;
