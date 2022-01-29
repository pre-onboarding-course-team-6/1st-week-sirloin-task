/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";
import FILTER_TAG_LIST from "commons/constants/filterTagList";
import * as S from "../styled";

function FilterSearchResult({ selectedTags, setSelectedTags }) {
  const handleAddFilterTag = (event, string) => {
    event.preventDefault();

    setSelectedTags([...selectedTags, string]);
  };

  return (
    <S.SearchBox>
      <S.TagListBox>
        {FILTER_TAG_LIST.length > 0 ? (
          FILTER_TAG_LIST.map((string, index) => (
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
