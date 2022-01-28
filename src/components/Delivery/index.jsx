import React, { useState } from "react";
import {
  Table,
  Title,
  Content,
  SettingBox,
  CalendarBox,
  Text,
} from "commons/Styled/styled";
import Calendar from "commons/utils/Calendar";
import { todayMaker, nextWeekMaker } from "commons/utils/DateMaker";
import Toggle from "commons/utils/Toggle";

function Delivery() {
  const today = todayMaker;
  const nextWeek = nextWeekMaker;
  const [apoint, setApoint] = useState(false);
  const [visit, setVisit] = useState(false);
  const [preOrder, setPreOrder] = useState(false);

  const [orderPeriod, setOrderPeriod] = useState({
    startDate: today,
    endDate: nextWeek,
  });

  console.log(orderPeriod);
  return (
    <Table>
      <tbody>
        <tr>
          <Title colSpan="2">상품 배송 설정</Title>
        </tr>
        <tr>
          <Content>사용자 배송일 출발일 지정</Content>
          <SettingBox>
            <Toggle name="apoint" toggle={apoint} setToggle={setApoint} />
          </SettingBox>
        </tr>
        <tr>
          <Content>방문 수령</Content>
          <SettingBox>
            <Toggle name="visit" toggle={visit} setToggle={setVisit} />
          </SettingBox>
        </tr>
        <tr>
          <Content>선 주문 예약 배송</Content>
          <SettingBox>
            <Toggle name="preOrder" toggle={preOrder} setToggle={setPreOrder} />
            <CalendarBox>
              <Text>주문 시간</Text>
              <Calendar
                date={orderPeriod}
                setDate={setOrderPeriod}
                dataType="startDate"
                state={preOrder}
                activeWord
              />
              <Text>~</Text>
              <Calendar
                date={orderPeriod}
                setDate={setOrderPeriod}
                dataType="endDate"
                state={preOrder}
                activeWord
              />
            </CalendarBox>
          </SettingBox>
        </tr>
      </tbody>
    </Table>
  );
}

export default Delivery;
