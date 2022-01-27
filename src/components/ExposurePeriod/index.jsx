import React, { useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import * as S from "./styled";

function Calendar(props) {
  const { date, setDate } = props;
  return (
    <S.CalendarMargin>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          inputFormat="yyyy.MM.dd hh:mm"
          value={date}
          inputVariant="filled"
          onChange={(newValue) => {
            setDate(newValue);
          }}
          mask="____.__.__ __:__"
          renderInput={(params) => (
            <TextField style={{ width: 200 }} size="small" {...params} />
          )}
          components={{ OpenPickerIcon: KeyboardArrowDownSharpIcon }}
        />
      </LocalizationProvider>
    </S.CalendarMargin>
  );
}
function ExposurePeriod() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <S.Table>
      <tbody>
        <S.TableRow>
          <S.Title colSpan="2">노출 및 판매기간설정</S.Title>
        </S.TableRow>
        <S.TableRow>
          <S.Content>상품 노출 기한</S.Content>
          <S.SettingBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
                defaultChecked
              />
              <S.Label>제한없음</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>미노출</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>노출 기간 설정</S.Label>
            </S.RadioBox>
            <S.CalendarBox>
              <Calendar date={startDate} setDate={setStartDate} />
              <div>~</div>
              <Calendar date={endDate} setDate={setEndDate} />
            </S.CalendarBox>
          </S.SettingBox>
        </S.TableRow>
        <S.TableRow>
          <S.Content>상품 판매 기한</S.Content>
          <S.SettingBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
                defaultChecked
              />
              <S.Label>제한없음</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>미노출</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>노출 기간 설정</S.Label>
            </S.RadioBox>
            <div>달력</div>
          </S.SettingBox>
        </S.TableRow>
      </tbody>
    </S.Table>
  );
}

export default ExposurePeriod;
