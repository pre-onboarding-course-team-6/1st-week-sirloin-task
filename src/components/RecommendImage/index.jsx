import React from "react";
import { Table, Title, FullBox } from "commons/Styled/styled";
import ImageAttachment from "../../commons/components/ImageAttachment";

function RecommendImage() {
  return (
    <Table>
      <tbody>
        <tr>
          <Title>구매자 추천 이미지</Title>
        </tr>
        <tr>
          <FullBox>
            <ImageAttachment type="multiple" />
          </FullBox>
        </tr>
      </tbody>
    </Table>
  );
}

export default RecommendImage;
