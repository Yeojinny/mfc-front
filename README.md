# My Fashion Coordinator 맞춤 코디네이팅 추천 플랫폼

- 배포 URL : https://myfaco.site

# 목차
1. [프로젝트 개요](#1-프로젝트-개요)
2. [팀원 구성](#2-팀원-구성)
3. [시스템 아키텍처](#3-시스템-아키텍처)
4. [기술 스택](#4-기술-스택)
5. [협업](#5-협업)
6. [ERD](#6-ERD)
7. [역할 분담](#7-역할-분담)
8. [구현 기능](#8-구현-기능)
9. [트러블 슈팅](#9-트러블-슈팅)
10. [개선 목표](#10-개선-목표)
11. [프로젝트 후기](#11-프로젝트-후기)

<br />

# 1. 프로젝트 개요
### 개발 기간
- 전체 기간 : 2024.04.18 ~ 2024.07.02
- 서비스 분석 및 설계 : 2024.04.18 ~ 2024.04.30
- UI 및 기능 개발 : 2024.05.02 ~ 2024.07.02

### 목표
- 옷 입기가 어려운 일반인과 옷 입는 것에 자신 있는 사람을 매칭해주는 중개 플랫폼 개발
- 온라인으로 코디를 진행하여 시간과 장소에 관계 없이 코디 진행 가능
- 파트너는 남는 시간에 코디를 진행하고 소소한 부업, 유저는 커피 한잔 가격으로 코디 고민 해결!

# 2. 팀원 구성
| **Name**     | 정예진                                                                  | 박진영                                                                  |김관호                                                                   | 황성철                                                                  | 서여진                                                                                                                                  
|:------------:|:--------------------------------------------------------------------:|:--------------------------------------------------------------------:|:--------------------------------------------------------------------:|:--------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| **Profile**  |<img width="120" src="https://github.com/2-PERSONULL/.github/blob/main/assets/KakaoTalk_20240701_102153253_01.png">|<img width="120" src="https://github.com/2-PERSONULL/.github/blob/main/assets/my_image.png"> | <img width="120" src="https://github.com/2-PERSONULL/.github/blob/main/assets/KakaoTalk_20240701_110120361_03.png">| <img width="120" src="https://github.com/2-PERSONULL/.github/blob/main/assets/KakaoTalk_20240701_103318423_01.png"> | <img width="120" src="https://github.com/2-PERSONULL/.github/blob/main/assets/KakaoTalk_20240701_102650684_03.jpg"> |  
| **Position** | Backend <br/> (팀장)      | Backend              | Backend          | Frontend                   | Frontend            | 
| **Git** | [@pockyjx](https://github.com/pockyjx)       | [@icarus012832](https://github.com/icarus012832)    | [@KwanHoo](https://github.com/KwanHoo)      | [@hsc03](https://github.com/hsc03)    | [@Yeojinny](https://github.com/Yeojinny)            | 


<br />

# 3. 시스템 아키텍처
![sa](https://github.com/2-PERSONULL/.github/blob/main/assets/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-07-01%20163230.png)

<br />

# 4. 기술 스택

## 💻 IDE

![VSCode](https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)
![IntelliJ](https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white)

## 📱 Frontend
![NEXT.JS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white) 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/zustand-3578E5?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">


## 💾 Backend

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![SpringBoot](https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) ![SpringBoot](https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) ![mysql](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
 ![Querydsl](https://img.shields.io/badge/Querydsl-007ACC?style=for-the-badge&logo=Querydsl&logoColor=white) ![Kafka](https://img.shields.io/badge/Kafka-007396?style=for-the-badge&logo=Kafka&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-007ACC?style=for-the-badge&logo=MongoDB&logoColor=white) ![SpringBatch](https://img.shields.io/badge/SpringBatch-007ACC?style=for-the-badge&logo=SpringBatch&logoColor=white) ![SpringCloud](https://img.shields.io/badge/SpringCloud-007ACC?style=for-the-badge&logo=SpringCloud&logoColor=white) 



## 🔃 DevOPS

![docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![amazonec2](https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
<img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">


<br />

<div align="right">
  
[목차로](#목차)

</div>

# 5. 협업

![together](https://github.com/2-PERSONULL/.github/blob/main/assets/together.png)
<br />

<div align="right">
  
[목차로](#목차)

</div>

# 6. ERD

![erd](https://github.com/2-PERSONULL/.github/blob/main/assets/capture.png)

<br />

# 7. 역할 분담

### 🌗Frontend
#### 황성철
- 회원, 탐색 기능 개발
- 유저 기능 개발 (유저 마이페이지, 홈, 코디 요청서 작성 등)

#### 서여진
- 채팅, 결제 기능 개발 
- 파트너 기능 개발(파트너 프로필, 홈, 스타일 업로드 등)
- 프론트엔드 배포


### 🌓Backend
#### 정예진
- 인프라 및 CI/CD 구축
- 인증 및 회원 서비스 개발
- 채팅 서비스 개발
- SNS 서비스 개발

#### 박진영
- 코디네이팅 서비스 개발
- 결제 서비스 개발
    
#### 김관호
- 채팅 서비스 개발
<br />

<div align="right">
  
[목차로](#목차)

</div>

# 8. 구현 기능

<br /> 

<strong>[회원가입]</strong>
- Funnel 구조를 참고하여 개발하였습니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/blob/main/assets/MFC 회원가입-1.gif">

<br /> 

<strong>[홈화면]</strong>
- 로그인하지 않은 경우 인기 파트너 게시물을 랜덤으로 보여줍니다.
- 로그인한 경우 유저가 팔로우한 파트너의 게시물을 보여줍니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/blob/main/assets/mfc.png">

<br /> 

<strong>[파트너 랭킹]</strong>
- 1시간 단위로 집계하여 실시간 파트너 랭킹을 보여줍니다.
- 팔로워 수, 코디 매칭 수, 리뷰 평점 항목 각각에 가중치를 부여하여 집계하였습니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/blob/main/assets/mfc2.png">

<br /> 

<strong>[탐색 및 검색]</strong>
- 파트너의 스타일 피드를 무한스크롤로 구현하였습니다.
- 파트너가 지정한 선호스타일을 기준으로 카테고리별 조회가 가능합니다.
- 스타일 태그를 통해 검색을 할 수 있습니다.
- 특정 스타일 게시물을 좋아요할 수 있습니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/blob/main/assets/mfc3.png">

<br /> 

<strong>[파트너 프로필 조회]</strong>
- 파트너 프로필에 들어가 스타일 피드와 상세정보를 조회할 수 있습니다.
- 특정 파트너를 팔로우할 수 있습니다.
- 상세정보를 확인 후 특정 파트너에게 코디요청을 할 수 있습니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/e0846901-43a3-45c2-8d46-844e19d9b842">

<br /> 

<strong>[코디 요청서 작성]</strong>
- 선호브랜드, 코디상황, 옵션, 예산 등의 정보를 담아 코디 요청서를 작성할 수 있습니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/db514d6c-148c-40a8-836e-a66f75e2e421">

<br /> 

<strong>[유저 체형정보 입력]</strong>
- 유저의 프로필에 미리 체형, 사이즈, 선호 스타일 정보를 등록할 수 있고
- 코디 요청 시 해당 정보가 파트너에게 함께 전달됩니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/c4024906-d816-4d1c-8279-a81405a6d354">

<br /> 

<strong>[코디 요청서 조회(파트너)]</strong>
- 유저가 요청한 코디 요청서를 조회할 수 있습니다.
- 유저의 체형정보 및 사이즈 정보를 함께 확인할 수 있습니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/77a8ad93-867b-4790-b60f-da4afcac0977">
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/223f2cd9-24c2-46f2-a4ef-abcefd512485">

<br /> 

<strong>[채팅]</strong>
- 파트너가 요청서를 수락하면 채팅방이 생성됩니다.
- 채팅방에서 유저와 파트너가 상담을 진행한 후 파트너가 확정을 제안합니다.
- 유저가 결제를 진행하면 거래가 확정되고, 유저의 캐시는 관리자에게 전달됩니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/0c99dfd8-ac27-43a0-84a9-29ab59e47876">
<img width="240" src="https://github.com/2-PERSONULL/.github/assets/73014511/5994c3de-5d4c-4d74-bda8-63670c9b4e33">

<br /> 

<strong>[스타일 가이드 조회]</strong>
- 파트너가 전달한 스타일 가이드를 조회할 수 있습니다.
- 파트너가 첨부한 구매링크로 바로 이동이 가능합니다.
<img width="240" src="https://github.com/2-PERSONULL/.github/blob/main/assets/mfc4.png">

<div align="right">
  
[목차로](#목차)

</div>

# 9. 트러블 슈팅

![trs](https://github.com/2-PERSONULL/.github/blob/main/assets/trs.png)
![trs](https://github.com/2-PERSONULL/.github/blob/main/assets/trs2.png)
![trs](https://github.com/2-PERSONULL/.github/blob/main/assets/trouble-batch.png)
![trs](https://github.com/2-PERSONULL/.github/blob/main/assets/trouble-batch(2).png)
<br />

# 10. 개선 목표

 ## 알림 & 리뷰 기능 도입
 
 - **목적**: 사용자 참여도 증가 및 서비스 품질 향상
 - **계획**:
   - 푸시 알림 시스템 구축
   - 사용자 맞춤형 알림 설정 옵션 개발
   - 리뷰 작성 및 관리 인터페이스 구현
   - 리뷰 기반 추천 시스템 도입
 
 ## 1:N 매칭 시스템 개발
 
 - **목적**: 서비스 유연성 향상 및 사용자 선택의 폭 확대
 - **계획**:
   - 다중 매칭 알고리즘 설계 및 구현
   - 사용자 선호도 기반 매칭 시스템 구축
   - 실시간 매칭 상태 모니터링 도구 개발
 
 ## 검색 기능 개선
 
 - **목적**: 사용자 경험 개선 및 검색 정확도/속도 향상
 - **계획**:
   - elastic search 도입
   - 검색 결과 개인화 기능 구현
   - 검색 성능 최적화 (인덱싱, 캐싱 등)

<br />

<div align="right">
  
[목차로](#목차)

</div>

# 11. 프로젝트 후기
### 🦕 정예진
MSA, EDA 아키텍처와 같은 다양한 구조에 대해 이해하고, 직접 구현까지할 수 있게 되어서 뜻깊은 시간이였습니다!
또, 저희만의 서비스를 개발하면서 기획의 중심이 제대로 잡혀 있어야 프로젝트가 원활하게 진행된다는 점을 알게 되었습니다.

### 🦖 박진영
프로젝트를 진행하면서 협업 경험을 쌓을 수 있어서 좋았고, 이와 함께 다양한 기술 스택을 경험해볼 수 있어서 매우 유익했습니다. 
또한 혼자 고민하면서 개발했던 경험, 강사님과 FT님께 피드백을 받을 수 있어서 더욱 성장할 수 있었습니다. 
이러한 다양한 경험들이 모여 이번 프로젝트가 제게 매우 의미 있는 시간이 되었습니다.

### 💚 황성철
짧은 기간 안에 서비스를 만드는 것이 지치고 피곤하기도 했지만, 기획부터 거의 모든 부분을 직접 다듬으면서 진행 하다 보니 너무 재미있게 개발했던 것 같습니다. 
1차 프로젝트에서 배웠던 내용을 본격적으로 활용해볼 수 있는 시간이 되었으며, 개발 외적인 부분에서도 저에게 득이 되는 경험이었습니다!

### 🌱 서여진
저희만의 서비스를 개발하면서 아주 작은 부분까지 함께 정책을 세우고 논의하면서 기획과 설계의 중요성을 느꼈고, 무엇보다 개발이 재미있었습니다:) 
다양한 사용자 페이지를 개발하면서 모바일에서 가격을 입력할 때 숫자 키패드만 나타나게 하는 것과 같은 사소한 부분을 포함해 
사용자가 더 편하게 느낄 수 있는 요소에 대해 많은 고민을 할 수 있는 시간이었습니다. 무엇보다 코디 요청서 상태에 따라 달라지는 UI를 구현하면서
큰 구조를 생각하고 설계한 후 개발을 진행해야겠다고 정말 많이 느꼈습니다. 빠르게 구현을 하려다보니 그때그때 필요할 때 코드를 추가하면서 스스로도 이해하기가
점점 어려워졌습니다. 다음에는 효율적이고, 좋은 구조를 먼저 생각한 후 개발을 진행하고자 합니다.
또한 프로젝트 마무리 단계 테스트 과정에서 수많은 에러를 마주치며 예외 처리의 중요성을 느꼈습니다. 마지막으로 협업 경험을 쌓을 수 있어 좋았고 이번 프로젝트를 통해
배운점을 반영하여 앞으로 더욱 좋은 구조와 코드를 고민하는 개발자로 나아가고싶습니다:)

<br />

<div align="right">
  
[목차로](#목차)

</div>
