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

# 🏹 과제 구현 목록

판매자들의 상품등록 페이지를 구현하는 과제 였습니다.

### 노출 및 판매기간 설정

Date, Time Picker를 구현하는데 Mui 라이브러리 사용했습니다.
![image](https://user-images.githubusercontent.com/40172373/156302990-e8581b11-2bd9-4ca7-932f-373e286848e6.png)
기간이 지나면 미노출, 미판매로 선택이 변경되고 노출, 판매의 시작 날짜가 종료날짜보다 늦으면 안되는등의 예외처리를 했습니다.

### 상품 배송 설정

마찬가지로 Mui의 Date, Time Picker와 Toggle 버튼을 사용했습니다.
비즈니스 로직상 사용자 배송일 출발일 지정은 복수선택이 가능하지만 선 주문 예약 배송과는 중복될 수 없습니다. 그래서
![image](https://user-images.githubusercontent.com/40172373/156303133-ca525bbd-9dc1-4a68-86bf-52d9d2af8708.png![delivery](https://user-images.githubusercontent.com/40172373/156303877-a87d1424-be97-4d2c-8167-6888da23084d.gif)

### 상품 혜택 허용 설정, 기타 설정

![image](https://user-images.githubusercontent.com/40172373/156303940-5fa68f03-d6ad-4e72-b61c-8b49ec61f05e.png)

</br>

# 🏗 폴더 구조

공통으로 사용하는 Date/Time Picker, 토글 버튼등을 utils로 빼고 각 컴포넌트 별로 분업하여 진행하였습니다.
각 컴포넌트 별로 연관성이 적었기 때문에 분업하기에 용이하였습니다.

저는 Date/Time Picker와 토글버튼으로 구성되어 연관성이 큰 컴포넌트 들을 모두 담당하였습니다.

담당한 코드😀

```
📦src
├──📂commons
│   ├──📂constants
│   │   └──📜templates.js     - 정보 공시 객체 템플릿
│   ├──📂Styled
│   │   └──📜styled.js        - 공통 css
│   └──📂utils
│       ├──📜Calendar.js 😀
│       ├──📜DateMaker.js 😀
│       ├──📜SimpleCalendar.js 😀
│       └──📜Toggle.js 😀
├──📂components
│   ├──📂Benefit
│   │   └──📜index.jsx        - 상품 혜택 허용 설정 😀
│   ├──📂Delivery
│   │   └──📜index.jsx        - 상품 배송 설정 😀
│   ├──📂Etc
│   │   └──📜index.jsx        - 기타 설정 😀
│   ├──📂ExposureSellPeriod
│   │   ├──📜index.jsx        - 노출 및 판매기간 설정 😀
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
