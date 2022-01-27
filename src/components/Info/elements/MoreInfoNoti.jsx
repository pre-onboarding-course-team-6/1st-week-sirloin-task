/* eslint-disable react/button-has-type */
import React from "react";

function MoreInfoNoti({ handleChangeMore, moreIndex }) {
  return (
    <div style={{ border: "2px solid blue" }}>
      <input
        type="text"
        name="moreInfoTitle"
        id="moreInfoTitle"
        placeholder="항목 제목 자유 입력"
        onChange={(event) => handleChangeMore(moreIndex, event)}
        // value={moreInfoTitle}
      />
      <input
        type="text"
        name="moreInfoContent"
        id="moreInfoContent"
        placeholder="내용을 입력해주세요."
        onChange={(event) => handleChangeMore(moreIndex, event)}
        // value={moreInfoContent}
      />
      <button>삭제</button>
    </div>
  );
}

export default MoreInfoNoti;
