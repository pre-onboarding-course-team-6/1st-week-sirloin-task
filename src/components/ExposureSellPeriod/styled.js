import styled from "styled-components";

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid #cccccc;
  margin: 24px;
`;

export const Title = styled.td`
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  width: 120px;
`;

export const Content = styled.td`
  width: 120px;
  font-size: 16px;
  font-weight: 600;
  background-color: #eeeeee;
  padding-top: 16px;
  vertical-align: top;
  border: 1px solid #cccccc;
  border-top: 0;
`;

export const SettingBox = styled.td`
  padding: 8px;
  width: 540px;
  min-width: 240px;
  border-bottom: 1px solid #cccccc;
`;

export const RadioBox = styled.div`
  margin: 4px;
`;

export const RaidoBotton = styled.input`
  type: radio;
`;

export const CalendarMargin = styled.div`
  margin: 8px;
`;

export const CalendarBox = styled.div`
  display: flex;
  height: 56px;
  line-height: 56px;
  text-align: center;
`;

export const Text = styled.div`
  font-size: 18px;
`;
