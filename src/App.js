import React from "react";
import Benefit from "components/Benefit";
import Etc from "components/Etc";
import ExposureSellPeriod from "components/ExposureSellPeriod";
import Info from "components/Info";
import IntroImage from "components/IntroImage";
import Notify from "components/Notify";
import Option from "components/Option";
import RecommendImage from "components/RecommendImage";
import Delivery from "components/Delivery";

function App() {
  return (
    <div>
      <ExposureSellPeriod />
      <Info />
      <Option />
      <IntroImage />
      <RecommendImage />
      <Notify />
      <Delivery />
      <Benefit />
      <Etc />
    </div>
  );
}

export default App;
