## 개요
- cra + typescript 기반의 환경에서 간단한 컴포넌트 및 페이지를 개발해 보며 테스트 주도 방법으로 코드 짜는 법을 익힌다.

## 사용될 스펙
### front
- react.js
- typescript
- react-testing-library

### back
- nestjs

## 1차 계획 
- 타입스크립트로 구성된 리액트 개발 환경 세팅 
- react-testing-library 환경 세팅
- 1분 시나리오 구성
- 테스트 코드 작성
- 기능 구현
- 요약

## 구현할 기능들
- [x] TODO 리스트에 사용될 리스트 테이블
- [x] TODO 리스트에 추가할 버튼
- [ ] TODO 리스트를 삭제할 삭제 버튼
- [ ] TODO 리스트를 수정할 수정 버튼
- [ ] TODO 개별 리스트를 클릭하면 보이는 개별 리스트 페이지
## 유닛 테스트 시나리오
1. TodoTable 유닛 테스트 시나리오
- [x] 컴포넌트 TodoTable은 TodoTable을 렌더한다.
- [x] 컴포넌트 TodoTable은 여러개의 리스트를 렌더한다.

2. TodoInput 유닛 테스트 시나리오
- [x] 컴포넌트 TodoInput은 TodoInput을 렌더한다.
- [x] 컴포넌트 TodoInput은 값을 변경하면 인풋 안에 값이 변경된다.
- [x] 컴포넌트 TodoInput은 input을 변경시키고 버튼을 클릭하면 onInsert 함수가 호출된다.

3. AddButton 유닛 테스트 시나리오
- [x] 컴포넌트 AddButton은 AddButton을 렌더한다.
- [x] 컴포넌트 AddButton은 'Add' 텍스트를 렌더한다.


## E2E 테스트 시나리오
-
### 도움 받은 링크들
- cra + ts 환경 세팅 : https://howdy-mj.me/typescript/cra-typescript-eslint-prettier/
- *eslint가 작동하고 있는 상태에서 prettier도 적용이 된다.

