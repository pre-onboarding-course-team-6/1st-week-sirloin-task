/* eslint-disable react/button-has-type */
import React from "react";
import {
  TableRow,
  CustomInput,
  InputBox,
  RedDelBtn,
} from "commons/Styled/styled";

function MoreInfoNoti({ handleChangeMore, moreIndex, handleDeleteMore }) {
  return (
    <TableRow>
      <InputBox>
        <CustomInput
          style={{ width: "360px" }}
          type="text"
          name="moreInfoTitle"
          id="moreInfoTitle"
          placeholder="항목 제목 자유 입력"
          onChange={(event) => handleChangeMore(moreIndex, event)}
        />
      </InputBox>
      <td>
        <CustomInput
          style={{ width: "240px" }}
          type="text"
          name="moreInfoContent"
          id="moreInfoContent"
          placeholder="내용을 입력해주세요."
          onChange={(event) => handleChangeMore(moreIndex, event)}
        />
        <RedDelBtn onClick={(event) => handleDeleteMore(moreIndex, event)}>
          삭제
        </RedDelBtn>
      </td>
    </TableRow>
  );
}

export default MoreInfoNoti;
