import React from "react";
import ImageAttachment from "../../commons/components/ImageAttachment";

function RecommendImage() {
  return (
    <>
      <ImageAttachment type="multiple">상품 소개 이미지</ImageAttachment>
      <ImageAttachment type="multiple">구매자 추천 이미지</ImageAttachment>
    </>
  );
}

export default RecommendImage;
