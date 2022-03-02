<p align="middle" >
  <img src="https://user-images.githubusercontent.com/24728385/148955263-b3a0e063-6950-46f2-82e9-1fcabc24e19e.jpeg"/>
</p>
<br/>
<h1 align="middle">[과제] 설로인</h1>

# 🔗 배포

https://pre-onboarding-course-team-6.github.io/1st-week-sirloin-task/

<br>

# ⚙️ 설치 및 시작하는 법

```
$ git clone https://github.com/pre-onboarding-course-team-6/1st-week-sirloin-task.git

$ cd 1st-week-sirloin-task

$ npm install

$ npm run start
```

<br>

# 🏹 과제 구현 목록 및 담당

## [22_01 민무길](https://github.com/gilmujjang)

### 노출 및 판매기간 설정

1. 노출 기한 설정
2. 판매 기한 설정

### 상품 배송 설정

16. 사용자 배송 출발일 지정
17. 방문 수령 지정
18. 선 주문 예약 배송 지정

### 상품 혜택 허용 설정

19. 마일리지 적립 허용 영역

### 기타 설정

20. 감사 카드 제공 여부 설정

</br>

## [22_01 정민형](https://github.com/minbr0ther)

### 상품 기본 정보
4. 필터 태그 지정
5. 상품명 및 상품코드
6. 상품 구성 소개 정보
7. 상품 썸네일
8. 상품 대표이미지 (선택)
9. 상품 총 재고 영역

### 13. 상품 소개 이미지

### 14. 구매자 추천 이미지

### 15. 상품 정보 고시 알림 설정

### 21. 저장하기 (console.log 출력)
</br>

## [22_01 김선명](https://github.com/BGM-109)

### 상품 옵션

10. 상품 옵션 등록
11. 추가 옵션 상품 등록
12. 옵션 내용 등록 영역
</br>

## [22_01 이현명](https://github.com/wiseeee)

### 상품 기본 정보

3. 카테고리 지정
<br>

# 🏗 프로젝트 구조 설명

```
📦src
├──📂commons
│   ├──📂constants
│   │   └──📜templates.js     - 정보 공시 객체 템플릿
│   ├──📂Styled
│   │   └──📜styled.js        - 공통 css
│   └──📂utils
│       ├──📜Calendar.js      
│       ├──📜DateMaker.js
│       ├──📜SimpleCalendar.js
│       └──📜Toggle.js
├──📂components
│   ├──📂Benefit
│   │   └──📜index.jsx        - 상품 혜택 허용 설정
│   ├──📂Delivery
│   │   └──📜index.jsx        - 상품 배송 설정
│   ├──📂Etc
│   │   └──📜index.jsx        - 기타 설정
│   ├──📂ExposureSellPeriod
│   │   ├──📜index.jsx        - 노출 및 판매기간 설정
│   │   └──📜styled.js
│   ├──📂Info
│   │   └──📜index.jsx        - 상품 기본 정보
│   ├──📂IntroImage
│   │   └──📜index.jsx        - 상품 소개 이미지
│   ├──📂Notify
│   │   ├──📂elements
│   │   │   ├──📜InformationNotice.jsx
│   │   │   └──📜MoreInfoNoti.jsx
│   │   └──📜index.jsx        - 상품 정보 고시 알림 설정
│   ├──📂Option
│   │   └──📜index.jsx        - 상품 옵션
│   └──📂RecommendImage
│       ├──📂element
│       │   └──📜ImageAttachment.jsx
│       └──📜index.jsx        - 구매자 추천 이미지
├──📜App.js
├──📜index.css
└──📜index.js
```

<br>

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)

<br>

## 👨‍👨‍👦‍👦 팀구성원 소개

| [<img src="https://github.com/minbr0ther.png" width="100px">](https://github.com/minbr0ther) | [<img src="https://github.com/BGM-109.png" width="100px">](https://github.com/BGM-109) | [<img src="https://github.com/wiseeee.png" width="100px">](https://github.com/wiseeee) | [<img src="https://github.com/gilmujjang.png" width="100px">](https://github.com/gilmujjang) |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|                        [22_01 정민형](https://github.com/minbr0ther)                         |                       [22_01 김선명](https://github.com/BGM-109)                       |                       [22_01 이현명](https://github.com/wiseeee)                       |                        [22_01 민무길](https://github.com/gilmujjang)                         |
