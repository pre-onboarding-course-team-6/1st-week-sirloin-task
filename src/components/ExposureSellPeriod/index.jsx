import React, { useState, useEffect } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import * as S from "./styled";

function Calendar(props) {
  const { date, setDate, dataType, state } = props;
  return (
    <S.CalendarMargin>
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
    </S.CalendarMargin>
  );
}

function RadioBoxSet(props) {
  const { value, state, onStateChange } = props;
  return (
    <S.RadioBox>
      <S.RaidoBotton
        type="radio"
        value={value}
        checked={state === value}
        onChange={onStateChange}
      />
      <span>{value}</span>
    </S.RadioBox>
  );
}

function ExposurePeriod(props) {
  const now = new Date();
  const today = new Date();
  const nextWeek = new Date(today.setDate(today.getDate() + 7)).setHours(
    0,
    0,
    0,
    0
  );
  const { setExposure } = props;
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
      <S.Content>상품 노출 기한</S.Content>
      <S.SettingBox>
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
          <S.CalendarBox>
            <Calendar
              date={exposurePeriod}
              setDate={setExposurePeriod}
              dataType="startDate"
              state={state}
            />
            <S.Text>~</S.Text>
            <Calendar
              date={exposurePeriod}
              setDate={setExposurePeriod}
              dataType="endDate"
              state={state}
            />
          </S.CalendarBox>
        </form>
      </S.SettingBox>
    </tr>
  );
}

function SellPeriod(props) {
  const now = new Date();
  const today = new Date();
  const nextWeek = new Date(today.setDate(today.getDate() + 7)).setHours(
    0,
    0,
    0,
    0
  );
  const { setSell } = props;
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
      <S.Content>상품 판매 기한</S.Content>
      <S.SettingBox>
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
          <S.CalendarBox>
            <Calendar
              date={sellPeriod}
              setDate={setSellPeriod}
              dataType="startDate"
              state={state}
            />
            <S.Text>~</S.Text>
            <Calendar
              date={sellPeriod}
              setDate={setSellPeriod}
              dataType="endDate"
              state={state}
            />
          </S.CalendarBox>
        </form>
      </S.SettingBox>
    </tr>
  );
}

function ExposureSellPeriod() {
  const [exposure, setExposure] = useState("제한없음");
  const [sell, setSell] = useState("제한없음");

  console.log("exposure", exposure);
  console.log("sell", sell);

  return (
    <S.Table>
      <tbody>
        <tr>
          <S.Title colSpan="2">노출 및 판매기간설정</S.Title>
        </tr>
        <ExposurePeriod setExposure={setExposure} />
        <SellPeriod setSell={setSell} />
      </tbody>
    </S.Table>
  );
}

export default ExposureSellPeriod;
