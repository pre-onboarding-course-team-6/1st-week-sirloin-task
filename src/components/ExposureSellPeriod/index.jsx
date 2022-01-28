import React, { useState, useEffect } from "react";

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
import { RadioBox, RaidoBotton } from "./styled";

function RadioBoxSet(props) {
  const { value, state, onStateChange } = props;
  return (
    <RadioBox>
      <RaidoBotton
        type="radio"
        value={value}
        checked={state === value}
        onChange={onStateChange}
      />
      <span>{value}</span>
    </RadioBox>
  );
}

function ExposurePeriod(props) {
  const { setExposure, today, nextWeek } = props;
  const [exposurePeriod, setExposurePeriod] = useState({
    startDate: today,
    endDate: nextWeek,
  });
  const [state, setState] = useState("제한없음");

  const onStateChange = (e) => {
    setState(e.target.value);
  };

  useEffect(() => {
    if (state === "노출 기간 설정") {
      setExposure(exposurePeriod);
    } else {
      setExposure(state);
    }
  }, [onStateChange]);

  if (exposurePeriod.startDate > exposurePeriod.endDate) {
    setExposurePeriod({ ...exposurePeriod, endDate: exposurePeriod.startDate });
  }

  if (today > exposurePeriod.endDate) {
    setExposurePeriod({ ...exposurePeriod, endDate: nextWeek });
    setState("미노출");
  }

  return (
    <tr>
      <Content>상품 노출 기한</Content>
      <SettingBox>
        <form>
          <RadioBoxSet
            value="제한없음"
            state={state}
            onStateChange={onStateChange}
          />
          <RadioBoxSet
            value="미노출"
            state={state}
            onStateChange={onStateChange}
          />
          <RadioBoxSet
            value="노출 기간 설정"
            state={state}
            onStateChange={onStateChange}
          />
          <CalendarBox>
            <Calendar
              date={exposurePeriod}
              setDate={setExposurePeriod}
              dataType="startDate"
              state={state}
              activeWord="노출 기간 설정"
            />
            <Text>~</Text>
            <Calendar
              date={exposurePeriod}
              setDate={setExposurePeriod}
              dataType="endDate"
              state={state}
              activeWord="노출 기간 설정"
            />
          </CalendarBox>
        </form>
      </SettingBox>
    </tr>
  );
}

function SellPeriod(props) {
  const { setSell, today, nextWeek } = props;
  const [sellPeriod, setSellPeriod] = useState({
    startDate: today,
    endDate: nextWeek,
  });
  const [state, setState] = useState("제한없음");

  const onStateChange = (e) => {
    setState(e.target.value);
  };

  if (sellPeriod.startDate > sellPeriod.endDate) {
    setSellPeriod({ ...sellPeriod, endDate: sellPeriod.startDate });
  }

  if (today > sellPeriod.endDate) {
    setSellPeriod({ ...sellPeriod, endDate: nextWeek });
    setState("미판매");
  }

  useEffect(() => {
    if (state === "판매 기간 설정") {
      setSell(sellPeriod);
    } else {
      setSell(state);
    }
  }, [onStateChange]);

  return (
    <tr>
      <Content>상품 판매 기한</Content>
      <SettingBox>
        <form>
          <RadioBoxSet
            value="제한없음"
            state={state}
            onStateChange={onStateChange}
          />
          <RadioBoxSet
            value="미판매"
            state={state}
            onStateChange={onStateChange}
          />
          <RadioBoxSet
            value="판매 기간 설정"
            state={state}
            onStateChange={onStateChange}
          />
          <CalendarBox>
            <Calendar
              date={sellPeriod}
              setDate={setSellPeriod}
              dataType="startDate"
              state={state}
              activeWord="판매 기간 설정"
            />
            <Text>~</Text>
            <Calendar
              date={sellPeriod}
              setDate={setSellPeriod}
              dataType="endDate"
              state={state}
              activeWord="판매 기간 설정"
            />
          </CalendarBox>
        </form>
      </SettingBox>
    </tr>
  );
}

function ExposureSellPeriod() {
  const [exposure, setExposure] = useState("제한없음");
  const [sell, setSell] = useState("제한없음");
  const today = todayMaker;
  const nextWeek = nextWeekMaker;
  console.log(today, nextWeek);

  console.log("exposure", exposure);
  console.log("sell", sell);

  return (
    <Table>
      <tbody>
        <tr>
          <Title colSpan="2">노출 및 판매기간설정</Title>
        </tr>
        <ExposurePeriod
          setExposure={setExposure}
          today={today}
          nextWeek={nextWeek}
        />
        <SellPeriod setSell={setSell} today={today} nextWeek={nextWeek} />
      </tbody>
    </Table>
  );
}

export default ExposureSellPeriod;
