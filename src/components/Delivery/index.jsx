import React, { useState } from "react";
import { Table, Title, Content, SettingBox } from "commons/Styled/styled";
import Toggle from "commons/utils/Toggle";

function Delivery() {
  const [toggle, setToggle] = useState(false);

  return (
    <Table>
      <tbody>
        <tr>
          <Title colSpan="2">상품 배송 설정</Title>
        </tr>
        <tr>
          <Content>사용자 배송일 출발일 지정</Content>
          <SettingBox>
            <Toggle name="card" toggle={toggle} setToggle={setToggle} />
          </SettingBox>
        </tr>
        <tr>
          <Content>방문 수령</Content>
          <SettingBox>
            <Toggle name="card" toggle={toggle} setToggle={setToggle} />
          </SettingBox>
        </tr>
        <tr>
          <Content>선 주문 예약 배송</Content>
          <SettingBox>
            <Toggle name="card" toggle={toggle} setToggle={setToggle} />
          </SettingBox>
        </tr>
      </tbody>
    </Table>
  );
}

export default Delivery;
