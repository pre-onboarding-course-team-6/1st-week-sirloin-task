import React, { useState, useEffect } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Table, Title, Content, SettingBox } from "commons/Styled/styled";
import {
  RadioBox,
  RaidoBotton,
  CalendarMargin,
  CalendarBox,
  Text,
} from "./styled";

function Calendar(props) {
  const { date, setDate, dataType, state } = props;
  return (
    <CalendarMargin>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {state === "노출 기간 설정" || state === "판매 기간 설정" ? (
          <DateTimePicker
            inputFormat="yyyy.MM.dd hh:mm"
            value={date[dataType]}
            inputVariant="filled"
            onChange={(newValue) => {
              setDate({ ...date, [dataType]: newValue });
            }}
            mask="____.__.__ __:__"
            renderInput={(params) => (
              <TextField style={{ width: 200 }} size="small" {...params} />
            )}
            components={{ OpenPickerIcon: KeyboardArrowDownSharpIcon }}
          />
        ) : (
          <DateTimePicker
            disabled
            inputFormat="yyyy.MM.dd hh:mm"
            value={date[dataType]}
            inputVariant="filled"
            onChange={(newValue) => {
              setDate({ ...date, [dataType]: newValue });
            }}
            mask="____.__.__ __:__"
            renderInput={(params) => (
              <TextField style={{ width: 200 }} size="small" {...params} />
            )}
            components={{ OpenPickerIcon: KeyboardArrowDownSharpIcon }}
          />
        )}
      </LocalizationProvider>
    </CalendarMargin>
  );
}

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
  const { setExposure, now, nextWeek } = props;
  const [exposurePeriod, setExposurePeriod] = useState({
    startDate: now,
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

  if (now > exposurePeriod.endDate) {
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
            />
            <Text>~</Text>
            <Calendar
              date={exposurePeriod}
              setDate={setExposurePeriod}
              dataType="endDate"
              state={state}
            />
          </CalendarBox>
        </form>
      </SettingBox>
    </tr>
  );
}

function SellPeriod(props) {
  const { setSell, now, nextWeek } = props;
  const [sellPeriod, setSellPeriod] = useState({
    startDate: now,
    endDate: nextWeek,
  });
  const [state, setState] = useState("제한없음");

  const onStateChange = (e) => {
    setState(e.target.value);
  };

  if (sellPeriod.startDate > sellPeriod.endDate) {
    setSellPeriod({ ...sellPeriod, endDate: sellPeriod.startDate });
  }

  if (now > sellPeriod.endDate) {
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
            />
            <Text>~</Text>
            <Calendar
              date={sellPeriod}
              setDate={setSellPeriod}
              dataType="endDate"
              state={state}
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
  const now = new Date();
  const today = new Date();
  const nextWeek = new Date(today.setDate(today.getDate() + 7)).setHours(
    0,
    0,
    0,
    0
  );

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
          now={now}
          nextWeek={nextWeek}
        />
        <SellPeriod setSell={setSell} now={now} nextWeek={nextWeek} />
      </tbody>
    </Table>
  );
}

export default ExposureSellPeriod;
