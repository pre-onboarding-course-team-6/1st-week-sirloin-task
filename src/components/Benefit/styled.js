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

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  margin: 22px;
  height: 24px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 52px;
  &:checked + ${CheckBoxLabel} {
    background: #670fdf;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
