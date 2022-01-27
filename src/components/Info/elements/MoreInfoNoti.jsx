/* eslint-disable react/button-has-type */
import React from "react";

function MoreInfoNoti({ handleChangeMore, moreIndex, handleDeleteMore }) {
  return (
    <div style={{ border: "2px solid blue" }}>
      <input
        type="text"
        name="moreInfoTitle"
        id="moreInfoTitle"
        placeholder="항목 제목 자유 입력"
        onChange={(event) => handleChangeMore(moreIndex, event)}
      />
      <input
        type="text"
        name="moreInfoContent"
        id="moreInfoContent"
        placeholder="내용을 입력해주세요."
        onChange={(event) => handleChangeMore(moreIndex, event)}
      />
      <button onClick={(event) => handleDeleteMore(moreIndex, event)}>
        삭제
      </button>
    </div>
  );
}

export default MoreInfoNoti;
