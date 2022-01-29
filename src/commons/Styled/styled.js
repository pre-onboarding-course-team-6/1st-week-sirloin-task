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

export const FullBox = styled.td`
  background-color: #ffffff;
  border-top: 1px solid #cccccc;
  height: 180px;
  width: 660px;
`;

export const CalendarBox = styled.div`
  display: flex;
  height: 56px;
  line-height: 56px;
  text-align: center;
`;

export const CalendarMargin = styled.div`
  margin: 8px;
`;

export const Text = styled.div`
  font-size: 18px;
`;

export const ImageInputBtn = styled.button`
  padding: 8px 24px;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  margin: 24px 8px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FileName = styled.div`
  margin: 8px;
`;

export const FileDeleBtn = styled.button`
  border: 1px solid #cccccc;
  border-radius: 100%;
  padding: 2px 6px;
  background-color: #ffffff;
  font-color: #000000;
  margin-left: 8px;
`;
