import React, { useEffect, useState } from "react";
import {
  Table,
  Title,
  Content,
  SettingBox,
  CalendarBox,
  Text,
} from "commons/Styled/styled";
import Calendar from "commons/utils/Calendar";
import SimpleCalendar from "commons/utils/SimpleCalendar";
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
  const [deliveryPeriod, setDeliveryPeriod] = useState({
    dawn: nextWeek,
    normal: nextWeek,
  });

  useEffect(() => {
    if (preOrder) {
      setApoint(false);
      setVisit(false);
    }
  }, [preOrder]);
  useEffect(() => {
    if (apoint || visit) {
      setPreOrder(false);
    }
  }, [apoint, visit]);

  useEffect(() => {
    if (today > orderPeriod.endDate) {
      setPreOrder(false);
    }
    if (orderPeriod.startDate > orderPeriod.endDate) {
      setOrderPeriod({ ...orderPeriod, endDate: orderPeriod.startDate });
      setDeliveryPeriod({ ...deliveryPeriod, dawn: orderPeriod.startDate });
      setDeliveryPeriod({ ...deliveryPeriod, dawn: orderPeriod.startDate });
    }
  }, [orderPeriod]);

  useEffect(() => {
    if (deliveryPeriod.dawn < orderPeriod.endDate) {
      if (window.confirm("주문 시간 이후로 출고일을 지정해 주세요")) {
        setDeliveryPeriod({ ...deliveryPeriod, dawn: orderPeriod.endDate });
      } else {
        setDeliveryPeriod({ ...deliveryPeriod, dawn: orderPeriod.endDate });
      }
    }
    if (deliveryPeriod.normal < orderPeriod.endDate) {
      if (window.confirm("주문 시간 이후로 출고일을 지정해 주세요")) {
        setDeliveryPeriod({ ...deliveryPeriod, normal: orderPeriod.endDate });
      } else {
        setDeliveryPeriod({ ...deliveryPeriod, normal: orderPeriod.endDate });
      }
    }
  }, [orderPeriod, deliveryPeriod]);

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
              <span>주문 시간</span>
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
            <CalendarBox>
              <span>새벽 배송</span>
              <SimpleCalendar
                date={deliveryPeriod}
                setDate={setDeliveryPeriod}
                dataType="dawn"
                state={preOrder}
                activeWord
              />
              <span>일반 배송</span>
              <SimpleCalendar
                date={deliveryPeriod}
                setDate={setDeliveryPeriod}
                dataType="normal"
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
