import React from "react";
import * as S from "./styled";

function ExposurePeriod() {
  return (
    <S.Table>
      <tbody>
        <S.TableRow>
          <S.Title colSpan="2">노출 및 판매기간설정</S.Title>
        </S.TableRow>
        <S.TableRow>
          <S.Content>상품 노출 기한</S.Content>
          <S.SettingBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
                defaultChecked
              />
              <S.Label>제한없음</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>미노출</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>노출 기간 설정</S.Label>
            </S.RadioBox>
            <div>달력</div>
          </S.SettingBox>
        </S.TableRow>
        <S.TableRow>
          <S.Content>상품 판매 기한</S.Content>
          <S.SettingBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
                defaultChecked
              />
              <S.Label>제한없음</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>미노출</S.Label>
            </S.RadioBox>
            <S.RadioBox>
              <S.RaidoBotton
                type="radio"
                value="no-limit"
                id="no-limit"
                name="no-limit"
              />
              <S.Label>노출 기간 설정</S.Label>
            </S.RadioBox>
            <div>달력</div>
          </S.SettingBox>
        </S.TableRow>
      </tbody>
    </S.Table>
  );
}

export default ExposurePeriod;
