# ๐ ๋ฐฐํฌ

https://pre-onboarding-course-team-6.github.io/1st-week-sirloin-task/

<br>

# โ๏ธ ์ค์น ๋ฐ ์์ํ๋ ๋ฒ

```
$ git clone https://github.com/pre-onboarding-course-team-6/1st-week-sirloin-task.git

$ cd 1st-week-sirloin-task

$ npm install

$ npm run start
```

<br>

# ๐น ๊ณผ์  ๊ตฌํ ๋ชฉ๋ก

ํ๋งค์๋ค์ ์ํ๋ฑ๋ก ํ์ด์ง๋ฅผ ๊ตฌํํ๋ ๊ณผ์  ์์ต๋๋ค.

### ๋ธ์ถ ๋ฐ ํ๋งค๊ธฐ๊ฐ ์ค์ 

Date, Time Picker๋ฅผ ๊ตฌํํ๋๋ฐ Mui ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉํ์ต๋๋ค.
![image](https://user-images.githubusercontent.com/40172373/156302990-e8581b11-2bd9-4ca7-932f-373e286848e6.png)
๊ธฐ๊ฐ์ด ์ง๋๋ฉด ๋ฏธ๋ธ์ถ, ๋ฏธํ๋งค๋ก ์ ํ์ด ๋ณ๊ฒฝ๋๊ณ  ๋ธ์ถ, ํ๋งค์ ์์ ๋ ์ง๊ฐ ์ข๋ฃ๋ ์ง๋ณด๋ค ๋ฆ์ผ๋ฉด ์๋๋๋ฑ์ ์์ธ์ฒ๋ฆฌ๋ฅผ ํ์ต๋๋ค.

### ์ํ ๋ฐฐ์ก ์ค์ 

๋ง์ฐฌ๊ฐ์ง๋ก Mui์ Date, Time Picker์ Toggle ๋ฒํผ์ ์ฌ์ฉํ์ต๋๋ค.
๋น์ฆ๋์ค ๋ก์ง์ ์ฌ์ฉ์ ๋ฐฐ์ก์ผ ์ถ๋ฐ์ผ ์ง์ ์ ๋ณต์์ ํ์ด ๊ฐ๋ฅํ์ง๋ง ์  ์ฃผ๋ฌธ ์์ฝ ๋ฐฐ์ก๊ณผ๋ ์ค๋ณต๋  ์ ์์ต๋๋ค.

![delivery](https://user-images.githubusercontent.com/40172373/156303877-a87d1424-be97-4d2c-8167-6888da23084d.gif)

### ์ํ ํํ ํ์ฉ ์ค์ , ๊ธฐํ ์ค์ 

![image](https://user-images.githubusercontent.com/40172373/156303940-5fa68f03-d6ad-4e72-b61c-8b49ec61f05e.png)

</br>

# ๐ ํด๋ ๊ตฌ์กฐ

๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ Date/Time Picker, ํ ๊ธ ๋ฒํผ๋ฑ์ utils๋ก ๋นผ๊ณ  ๊ฐ ์ปดํฌ๋ํธ ๋ณ๋ก ๋ถ์ํ์ฌ ์งํํ์์ต๋๋ค.
๊ฐ ์ปดํฌ๋ํธ ๋ณ๋ก ์ฐ๊ด์ฑ์ด ์ ์๊ธฐ ๋๋ฌธ์ ๋ถ์ํ๊ธฐ์ ์ฉ์ดํ์์ต๋๋ค.

์ ๋ Date/Time Picker์ ํ ๊ธ๋ฒํผ์ผ๋ก ๊ตฌ์ฑ๋์ด ์ฐ๊ด์ฑ์ด ํฐ ์ปดํฌ๋ํธ ๋ค์ ๋ชจ๋ ๋ด๋นํ์์ต๋๋ค.

๋ด๋นํ ์ฝ๋๐

```
๐ฆsrc
โโโ๐commons
โ   โโโ๐constants
โ   โ   โโโ๐templates.js     - ์ ๋ณด ๊ณต์ ๊ฐ์ฒด ํํ๋ฆฟ
โ   โโโ๐Styled
โ   โ   โโโ๐styled.js        - ๊ณตํต css
โ   โโโ๐utils
โ       โโโ๐Calendar.js ๐
โ       โโโ๐DateMaker.js ๐
โ       โโโ๐SimpleCalendar.js ๐
โ       โโโ๐Toggle.js ๐
โโโ๐components
โ   โโโ๐Benefit
โ   โ   โโโ๐index.jsx        - ์ํ ํํ ํ์ฉ ์ค์  ๐
โ   โโโ๐Delivery
โ   โ   โโโ๐index.jsx        - ์ํ ๋ฐฐ์ก ์ค์  ๐
โ   โโโ๐Etc
โ   โ   โโโ๐index.jsx        - ๊ธฐํ ์ค์  ๐
โ   โโโ๐ExposureSellPeriod
โ   โ   โโโ๐index.jsx        - ๋ธ์ถ ๋ฐ ํ๋งค๊ธฐ๊ฐ ์ค์  ๐
โ   โ   โโโ๐styled.js
โ   โโโ๐Info
โ   โ   โโโ๐index.jsx        - ์ํ ๊ธฐ๋ณธ ์ ๋ณด
โ   โโโ๐IntroImage
โ   โ   โโโ๐index.jsx        - ์ํ ์๊ฐ ์ด๋ฏธ์ง
โ   โโโ๐Notify
โ   โ   โโโ๐elements
โ   โ   โ   โโโ๐InformationNotice.jsx
โ   โ   โ   โโโ๐MoreInfoNoti.jsx
โ   โ   โโโ๐index.jsx        - ์ํ ์ ๋ณด ๊ณ ์ ์๋ฆผ ์ค์ 
โ   โโโ๐Option
โ   โ   โโโ๐index.jsx        - ์ํ ์ต์
โ   โโโ๐RecommendImage
โ       โโโ๐element
โ       โ   โโโ๐ImageAttachment.jsx
โ       โโโ๐index.jsx        - ๊ตฌ๋งค์ ์ถ์ฒ ์ด๋ฏธ์ง
โโโ๐App.js
โโโ๐index.css
โโโ๐index.js
```

<br>

## โ Git - Commit Message Convention [๐](https://webruden.tistory.com/486)

- feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ (a new feature)
- fix : ๋ฒ๊ทธ ์์  (a bug fix)
- docs : ๋ฌธ์ ์์  (changes to documentation)
- style : ์ฝ๋ ํฌ๋งทํ, ์ธ๋ฏธ์ฝ๋ก  ๋๋ฝ, ์ฝ๋ ๋ณ๊ฒฝ์ด ์๋ ๊ฒฝ์ฐ (formatting, missing semi colons, etc; no code change)
- refactor : ์ฝ๋ ๋ฆฌํํ ๋ง (refactoring production code)
- test : ํ์คํธ ์ฝ๋, ๋ฆฌํํ ๋ง ํ์คํธ ์ฝ๋ ์ถ๊ฐ (adding tests, refactoring test; no production code change)
- chore : ๋น๋ ์๋ฌด ์์ , ํจํค์ง ๋งค๋์  ์์  (updating build tasks, package manager configs, etc; no production code change)
