import React, { useEffect, useState } from "react";
import { Table, Title, FullBox } from "commons/Styled/styled";
import ImageAttachment from "../../commons/components/ImageAttachment";

function RecommendImage({ data, setData }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setData({
      ...data,
      recommendationImage: {
        ...data.recommendationImage,
        images,
      },
    });
  }, [images]);

  return (
    <Table>
      <tbody>
        <tr>
          <Title>구매자 추천 이미지</Title>
        </tr>
        <tr>
          <FullBox>
            <ImageAttachment type="multiple" setImages={setImages} />
          </FullBox>
        </tr>
      </tbody>
    </Table>
  );
}

export default RecommendImage;
