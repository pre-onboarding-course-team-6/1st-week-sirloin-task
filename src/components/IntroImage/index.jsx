import React, { useEffect, useState } from "react";
import { Table, Title, FullBox } from "commons/Styled/styled";
import ImageAttachment from "../../commons/components/ImageAttachment";

function IntroImage({ data, setData }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setData({
      ...data,
      productIntroImage: {
        ...data.productIntroImage,
        images,
      },
    });
  }, [images]);

  return (
    <Table>
      <tbody>
        <tr>
          <Title>상품 소개 이미지</Title>
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

export default IntroImage;
