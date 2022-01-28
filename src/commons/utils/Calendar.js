import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { CalendarMargin } from "../Styled/styled";

function Calendar(props) {
  const { date, setDate, dataType, state, activeWord } = props;
  return (
    <CalendarMargin>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {state === activeWord ? (
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

export default Calendar;
