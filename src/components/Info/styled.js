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
  width: 270px;
  min-width: 240px;
  border-bottom: 1px solid #cccccc;
`;

export const SplitLeftBox = styled.td`
  padding: 8px;
  width: 240px;
  border-bottom: 1px solid #cccccc;
`;

export const SplitRightBox = styled.td`
  padding: 8px;
  width: 160px;
  border-bottom: 1px solid #cccccc;
`;

export const SearchBox = styled.div`
  border-radius: 10px;
  border: 2px solid #eee;
  margin: 20px 0;
`;

export const FilterTag = styled.span`
  border-radius: 4px;
  padding: 5px 7px;
  background-color: #e8f7d3;
  margin-right: 10px;
`;

export const SelectedTag = styled.div`
  width: 100%;
  padding: 10px 10px;
`;

export const TagListBox = styled.div`
  padding: 30px 20px;
`;
