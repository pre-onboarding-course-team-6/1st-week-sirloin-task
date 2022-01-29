import React from "react";
import { Table, Title, FullBox } from "commons/Styled/styled";
import ImageAttachment from "../../commons/components/ImageAttachment";

function IntroImage() {
  return (
    <Table>
      <tbody>
        <tr>
          <Title>상품 소개 이미지</Title>
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

export default IntroImage;
