/* eslint-disable react/button-has-type */
import React from "react";
import InformationNotice from "./elements/InformationNotice";

function Info() {
  // const [data] = useState([]);

  return (
    <>
      <InformationNotice />
      <button>+ 정보고시 추가</button>
      <button>정보고시 console 출력</button>
    </>
  );
}

export default Info;
