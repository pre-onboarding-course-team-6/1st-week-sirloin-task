import React, { useState } from "react";
import Toggle from "commons/utils/Toggle";
import * as S from "./styled";

function Benefit() {
  const [toggle, setToggle] = useState(true);

  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Title colSpan="2">상품 혜택 허용 설정</S.Title>
        </tr>
        <tr>
          <S.Content>마일리지 적립</S.Content>
          <S.SettingBox>
            <Toggle name="milege" toggle={toggle} setToggle={setToggle} />
          </S.SettingBox>
        </tr>
      </tbody>
    </S.Table>
  );
}

export default Benefit;
