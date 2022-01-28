import React, { useState } from "react";
import * as S from "./styled";

function Benefit() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Title colSpan="2">상품 혜택 허용 설정</S.Title>
        </tr>
        <tr>
          <S.Content>마일리지 적립</S.Content>
          <S.SettingBox>
            <S.CheckBoxWrapper>
              <S.CheckBox
                id="mileage"
                name="mileage"
                type="checkbox"
                checked={toggle}
                onChange={handleToggle}
              />
              <S.CheckBoxLabel htmlFor="mileage" />
            </S.CheckBoxWrapper>
          </S.SettingBox>
        </tr>
      </tbody>
    </S.Table>
  );
}

export default Benefit;
