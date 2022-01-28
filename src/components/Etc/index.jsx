import React, { useState } from "react";
import Toggle from "commons/utils/Toggle";
import * as S from "./styled";

function Etc() {
  const [toggle, setToggle] = useState(false);

  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Title colSpan="2">기타 설정</S.Title>
        </tr>
        <tr>
          <S.Content>감사카드 제공</S.Content>
          <S.SettingBox>
            <Toggle name="card" toggle={toggle} setToggle={setToggle} />
          </S.SettingBox>
        </tr>
      </tbody>
    </S.Table>
  );
}

export default Etc;
