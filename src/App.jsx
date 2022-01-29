import React, { useEffect, useState } from "react";
import Benefit from "components/Benefit";
import Etc from "components/Etc";
import ExposureSellPeriod from "components/ExposureSellPeriod";
import Info from "components/Info";
import IntroImage from "components/IntroImage";
import Notify from "components/Notify";
import Option from "components/Option";
import RecommendImage from "components/RecommendImage";
import Delivery from "components/Delivery";
import * as S from "styled";

function App() {
  const [data, setData] = useState({
    exposureOrSalePeriod: { exposure: "", sell: "" },
    basicProductInformation: {},
    productOption: {},
    productIntroImage: [],
    recommendationImage: [],
    informationNotify: [],
    deliverySettings: {},
    productBenefitsSetting: { accumulationPoints: true },
    etcSetting: { providingThankscard: true },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <S.Main>
      <S.Header>
        <h3>상품 등록</h3>
        <button type="button" onClick={() => console.log(data)}>
          저장하기
        </button>
      </S.Header>
      <ExposureSellPeriod data={data} setData={setData} />
      <Info />
      <Option />
      <IntroImage />
      <RecommendImage />
      <Notify />
      <Delivery />
      <Benefit />
      <Etc />
    </S.Main>
  );
}

export default App;
