/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";
import FILTER_TAG_LIST from "commons/constants/filterTagList";
import * as S from "../styled";

function FilterSearchResult({
  savedTagList,
  selectedTags,
  setSelectedTags,
  setIsFocusOn,
}) {
  const handleAddFilterTag = (event, string) => {
    event.preventDefault();

    if (selectedTags.includes(string))
      return alert("이미 태그가 추가되어 있습니다");

    setSelectedTags([...selectedTags, string]);
    setIsFocusOn((prev) => !prev);
  };

  return (
    <S.SearchBox>
      <S.TagListBox>
        {savedTagList.length > 0 ? (
          savedTagList.map((string, index) => (
            <S.FilterTag
              key={index}
              onClick={(event) => handleAddFilterTag(event, string)}
            >
              {string}
            </S.FilterTag>
          ))
        ) : (
          <span>검색 결과가 존재하지 않습니다</span>
        )}
      </S.TagListBox>
    </S.SearchBox>
  );
}

export default FilterSearchResult;
