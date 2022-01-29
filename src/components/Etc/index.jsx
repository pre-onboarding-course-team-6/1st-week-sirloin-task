import React, { useEffect, useState } from "react";
import Toggle from "commons/utils/Toggle";
import { Table, Title, Content, SettingBox } from "commons/Styled/styled";

function Etc({ data, setData }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setData({
      ...data,
      etcSetting: {
        ...data.etcSetting,
        providingThankscard: toggle,
      },
    });
  }, [toggle]);

  return (
    <Table>
      <tbody>
        <tr>
          <Title colSpan="2">기타 설정</Title>
        </tr>
        <tr>
          <Content>감사카드 제공</Content>
          <SettingBox>
            <Toggle name="card" toggle={toggle} setToggle={setToggle} />
          </SettingBox>
        </tr>
      </tbody>
    </Table>
  );
}

export default Etc;
